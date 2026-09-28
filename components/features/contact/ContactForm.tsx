"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, company, message } = formData;

    const waMessage = `Halo Indomaja,
Saya ingin bertanya mengenai:
- Nama: ${name}
- Email: ${email}
- Company: ${company}
- Message: ${message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waLink = `https://wa.me/6289677597478?text=${encodedMessage}`;

    window.open(waLink, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-grey-500 text-[14px] font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="focus:ring-buccaneer-900 text-buccaneer-900 w-full bg-[#F5F5F5] px-4 py-4 transition-all focus:ring-1 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-grey-500 text-[14px] font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="focus:ring-buccaneer-900 text-buccaneer-900 w-full bg-[#F5F5F5] px-4 py-4 transition-all focus:ring-1 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-grey-500 text-[14px] font-medium">
          Company
        </label>
        <input
          type="text"
          id="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="focus:ring-buccaneer-900 text-buccaneer-900 w-full bg-[#F5F5F5] px-4 py-4 transition-all focus:ring-1 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-grey-500 text-[14px] font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={8}
          required
          value={formData.message}
          onChange={handleChange}
          className="focus:ring-buccaneer-900 text-buccaneer-900 w-full resize-none bg-[#F5F5F5] px-4 py-4 transition-all focus:ring-1 focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-buccaneer-900 hover:bg-buccaneer-800 mt-4 w-full py-5 font-medium text-white transition-all"
      >
        Send
      </button>
    </form>
  );
}
