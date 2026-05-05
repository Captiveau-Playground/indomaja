import Image from "next/image";

import products from "@/data/products.json";
import Link from "next/link";

const OurProduct = (props: {
    title: React.ReactNode,
    sectionStyle: string,
    page: string,
    productsData?: any[],
    basePath?: string,
    isClickable?: boolean
}) => {
  const displayProducts = props.productsData || products;
  const currentBasePath = props.basePath || "/products";
  const isClickable = props.isClickable ?? false;
  
  // Adjust grid columns if there are exactly 2 products
  const gridClasses = displayProducts.length === 2 
    ? "grid-cols-2" 
    : (props.page === "home" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 lg:grid-cols-4");

  return (
    <section id="our-product" className={props.sectionStyle}>
      {props.title}

      <div className={`grid ${gridClasses} gap-0 w-full`}>
        {displayProducts.length > 0 ? (
          displayProducts.map((product, index) => {
            const cardClasses = "relative group overflow-hidden aspect-[3/4] md:h-[740px] md:aspect-auto cursor-pointer";
            const content = (
              <>
                <Image
                  src={product.image}
                  alt={product.line2}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300">
                  <Image
                    src="/assets/overlay3.png"
                    alt="Overlay"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-3 sm:p-6 lg:p-10 text-white w-full">
                  <p className={`text-[24px] ${props.page === "home" ? "text-[24px]" : "sm:text-[36px]"} font-sans font-medium mb-1 uppercase tracking-tight leading-none`}>
                    {product.line1}
                  </p>
                  <h3 className={`text-special-h4 ${props.page === "home" ? "text-special-h2" : "sm:text-special-h2"} lg:text-special-h3 font-bold leading-[0.9] uppercase tracking-tighter`}>
                    {product.line2}
                  </h3>
                </div>
              </>
            );

            return isClickable ? (
              <Link 
                key={index} 
                href={`${currentBasePath}/${product.slug}`}
                className={cardClasses}
              >
                {content}
              </Link>
            ) : (
              <div key={index} className={cardClasses}>
                {content}
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center bg-gray-50">
             <p className="text-gray-500 italic">Coming soon: More products in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProduct;
