"use client";

import React from "react";

export const NextStepsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl mb-4">Take the Next Steps</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            We look forward to helping you get to the next level and becoming
            the very best you can be with XPEL.
          </p>
          <div className="text-sm space-y-1">
            <p>+1 (210) 678-3701</p>
            <p>(800) 447-9928</p>
            <p>
              <a
                href="mailto:support@XPEL.com"
                className="hover:underline text-yellow-400"
              >
                support@XPEL.com
              </a>
            </p>
            <p>8:30am - 5:30pm CST</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          className="bg-white text-black rounded-md shadow p-6 space-y-4"
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
