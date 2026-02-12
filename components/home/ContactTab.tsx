"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ContactTab() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    curious: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.curious) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        curious: formData.curious,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Form submitted successfully! Email sent.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        curious: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="tab-content py-10">
      <div className="max-w-2xl mx-auto text-white px-4">
        {/* CTA: Ready to Get Started? */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-4xl sm:text-6xl font-extrabold">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg">Schedule a meet with our team</p>
          <button
            type="button"
            className="bg-transparent cursor-pointer inline-flex items-center justify-center"
            aria-label="Let's Talk"
            onClick={() => {
              if (typeof window !== "undefined") {
                // Tell Tabs to show Consultation inline without navigation
                window.dispatchEvent(new Event("open-consultation"));
              }
            }}
          >
            <Image
              src="/Group%2037.svg"
              alt="Let's Talk"
              width={807}
              height={85}
              className="w-[280px] sm:w-[500px] max-w-4xl h-auto"
              priority
            />
          </button>
        </div>
        <h1 className="lg:text-5xl md:text-5xl text-3xl text-center">
          <span className="font-bold">FOGO</span>
          <span className="px-4 italic">got you puzzled?</span>
        </h1>
        <h2 className="lg:text-3xl md:text-3xl text-2xl font-semibold text-center pt-10">got a project in mind?</h2>
        <h2 className="lg:text-3xl md:text-3xl text-2xl font-semibold mb-6 text-center">say hi !</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
              first name <span className="text-gray-100">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              minLength={3}
              maxLength={20}
              pattern="^[a-zA-Z]+$"
              title="Only alphabets are allowed"
              className="w-full p-3 bg-black text-white placeholder-white/60 focus:outline-none relative rounded-md"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",

                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%),
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)
                `,
                backgroundSize: "1px 100%, 1px 100%",
                backgroundPosition: "0 0, 100% 0",
                backgroundRepeat: "no-repeat",
                backgroundClip: "padding-box",
              }}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
              last name <span className="text-gray-100">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              minLength={3}
              maxLength={20}
              pattern="^[a-zA-Z]+$"
              title="Only alphabets are allowed"
              className="w-full p-3 bg-black text-white placeholder-gray-400 border-x border-b border-gray-600 border-t-0 rounded-md focus:outline-none"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",

                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%),
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)
                `,
                backgroundSize: "1px 100%, 1px 100%",
                backgroundPosition: "0 0, 100% 0",
                backgroundRepeat: "no-repeat",
                backgroundClip: "padding-box",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              email <span className="text-gray-100">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-black text-white placeholder-gray-400 border-x border-b border-gray-600 border-t-0 rounded-md focus:outline-none"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",

                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%),
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)
                `,
                backgroundSize: "1px 100%, 1px 100%",
                backgroundPosition: "0 0, 100% 0",
                backgroundRepeat: "no-repeat",
                backgroundClip: "padding-box",
              }}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
              phone <span className="text-gray-100">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              minLength={9}
              maxLength={15}
              pattern="^\+?[1-9]\d{1,14}$"
              title="Only numbers are allowed"
              className="w-full p-3 bg-black text-white placeholder-gray-400 border-x border-b border-gray-600 border-t-0 rounded-md focus:outline-none"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",

                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%),
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)
                `,
                backgroundSize: "1px 100%, 1px 100%",
                backgroundPosition: "0 0, 100% 0",
                backgroundRepeat: "no-repeat",
                backgroundClip: "padding-box",
              }}
            />
          </div>

          {/* Curiosity */}
          <div>
            <label htmlFor="curious" className="block mb-2 text-sm font-medium text-white">
              you are curious about? <span className="text-gray-100">*</span>
            </label>
            <textarea
              id="curious"
              name="curious"
              value={formData.curious}
              onChange={handleInputChange}
              rows={3}
              required
              minLength={3}
              className="w-full p-3 bg-black text-white placeholder-gray-400 border-x border-b border-gray-600 border-t-0 rounded-md focus:outline-none"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",

                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%),
                  linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)
                `,
                backgroundSize: "1px 100%, 1px 100%",
                backgroundPosition: "0 0, 100% 0",
                backgroundRepeat: "no-repeat",
                backgroundClip: "padding-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="relative w-full flex justify-center">
            {/* Decorative Top/Bottom Border Lines */}
            <div className="absolute top-0 w-1/5 border-t border-gray-600"></div>
            <div className="absolute bottom-0 w-1/5 border-b border-gray-600"></div>

            {/* Button with full border */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative cursor-pointer w-full bg-transparent transition duration-300 flex items-center justify-center"
              aria-label="Submit"
            >
              <Image
                src="/Rectangle%2014.svg"
                alt="Submit"
                width={807}
                height={85}
                className="w-full max-w-[520px] h-auto"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none">
                <span className="text-white font-semibold">
                  {isLoading ? "submitting..." : "submit"}
                </span>
                {isLoading && (
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
