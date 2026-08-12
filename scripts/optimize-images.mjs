/**
 * One-off + reusable image compression for Indomaja.
 *
 * WHY: Vercel's Image Optimization quota (5k unique transformations/mo on
 * Hobby) was nearly exhausted. next.config.ts now sets `unoptimized: true`,
 * so browsers fetch the raw files in /public — which makes it important that
 * those files are lean. This script re-compresses the heaviest images:
 *
 *   1. webp > 250KB  -> re-encoded in place at quality 78 (only overwritten
 *                       when the new file is smaller)
 *   2. PNG > 250KB   -> converted to webp (quality 80) alongside, reporting
 *                       the result — you must update data/*.json references
 *                       from .png to .webp (or delete the PNG if unused)
 *   3. home.png      -> re-encoded in place as a palette PNG (used only as
 *                       OG/schema image)
 *
 * Run:  node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ASSETS_DIR = "public/assets";
const WEBP_QUALITY = 78;
const PNG_TO_WEBP_QUALITY = 80;
const SIZE_THRESHOLD = 250 * 1024; // 250KB

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(ASSETS_DIR).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
let reencoded = 0;
let saved = 0;
let converted = [];

for (const file of files) {
  const size = fs.statSync(file).size;
  if (size < SIZE_THRESHOLD) continue;

  const ext = path.extname(file).toLowerCase();

  try {
    if (ext === ".webp") {
      const buf = await sharp(file).webp({ quality: WEBP_QUALITY }).toBuffer();
      if (buf.length < size) {
        fs.writeFileSync(file, buf);
        saved += size - buf.length;
        reencoded++;
        console.log(
          `webp  ${(size / 1024).toFixed(0).padStart(6)}KB -> ${(buf.length / 1024).toFixed(0).padStart(6)}KB  ${file}`,
        );
      } else {
        console.log(`skip  (already lean)  ${file}`);
      }
    } else if (ext === ".png") {
      if (file.endsWith("hero/home.png")) {
        // OG/schema image only — keep format, shrink with palette.
        const buf = await sharp(file)
          .png({ compressionLevel: 9, palette: true, quality: 90 })
          .toBuffer();
        if (buf.length < size) {
          fs.writeFileSync(file, buf);
          saved += size - buf.length;
          console.log(
            `png   ${(size / 1024).toFixed(0).padStart(6)}KB -> ${(buf.length / 1024).toFixed(0).padStart(6)}KB  ${file} (palette, in place)`,
          );
        }
      } else {
        // Candidate for webp conversion — report only; refs must be updated.
        const webpFile = file.replace(/\.png$/i, ".webp");
        const buf = await sharp(file)
          .webp({ quality: PNG_TO_WEBP_QUALITY })
          .toBuffer();
        if (!fs.existsSync(webpFile) || fs.statSync(webpFile).size > buf.length) {
          fs.writeFileSync(webpFile, buf);
        }
        converted.push({ png: file, webp: webpFile, from: size, to: buf.length });
        console.log(
          `png->w ${(size / 1024).toFixed(0).padStart(6)}KB -> ${(buf.length / 1024).toFixed(0).padStart(6)}KB  ${webpFile}`,
        );
      }
    }
  } catch (err) {
    console.error(`ERROR ${file}: ${err.message}`);
  }
}

console.log("\n--- Summary ---");
console.log(`webp re-encoded in place: ${reencoded} files`);
console.log(`bytes saved (in-place only): ${(saved / 1024 / 1024).toFixed(1)} MB`);
if (converted.length) {
  console.log(
    `\nPNG -> webp created: ${converted.length}. Update these references from .png to .webp (or delete the PNG if unused):`,
  );
  for (const c of converted) console.log(`  ${c.png}`);
}
