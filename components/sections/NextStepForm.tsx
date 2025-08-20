"use client";

import React from "react";

interface ContactInfo {
  title: string;
  description: string;
  phoneNumbers: string[];
  email: string;
  hours: string;
}

interface NextStepsFormProps {
  theme?: "dark" | "light";
  contactInfo: ContactInfo;
}

export const NextStepsForm: React.FC<NextStepsFormProps> = ({
  theme = "dark",
  contactInfo
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form submitted");
  };

  // Dynamic theme classes
  const bgColor = theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-black";
  const formBgColor = theme === "dark" ? "bg-white text-black" : "bg-white text-black";

  return (
    <section className={`${bgColor} py-12 px-4`}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl mb-4">{contactInfo.title}</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            {contactInfo.description}
          </p>
          <div className="text-sm space-y-1">
            {contactInfo.phoneNumbers.map((phone, index) => (
              <p key={index}>{phone}</p>
            ))}
            <p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>{contactInfo.hours}</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          className={`${formBgColor} rounded-md shadow p-6 space-y-4`}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City<span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium">
              Company Name (Optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium">
              Please provide additional details related to your inquiry.
            </label>
            <textarea
              id="details"
              name="details"
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              id="marketing"
              name="marketing"
              type="checkbox"
              className="mt-1 mr-2"
            />
            <label
              htmlFor="marketing"
              className="text-xs leading-snug text-gray-700"
            >
              By checking this box you are opting in to receive news,
              marketing, and promotional offers from XPEL.
            </label>
          </div>

          <p className="text-xs text-gray-500">
            * indicates a required field
          </p>

          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
