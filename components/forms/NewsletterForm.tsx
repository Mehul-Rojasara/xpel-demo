"use client";

import React, { useState, useCallback } from "react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!email.trim()) return;

      setIsSubmitting(true);
      try {
        // TODO: Implement newsletter signup logic
        setEmail("");
      } catch (error) {
        if (error) {
          setIsSubmitting(false);
        }
      }
    },
    [email]
  );

  return (
    <div className="flex flex-col justify-center md:justify-start text-center md:text-left">
      <h3 className="font-h3 text-white mb-3 lg:mb-4">Newsletter Signup</h3>
      <p className="para-medium text-white mb-6">
        Sign up to get the latest on sales, new releases, updates and more from Xpel!
      </p>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-transparent rounded border border-white text-white placeholder-gray-400 focus:outline-none focus:border-accent-teal-300 focus:shadow-[0_0_0_3px_rgba(27,109,106,0.4)] pr-12"
            aria-label="Email address for newsletter signup"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="absolute right-0 top-0 h-full px-4 text-white-900 hover:bg-gray-600 focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            aria-label="Subscribe to newsletter"
          >
            <i className="icon-Arrow-Right text-[12px] p-0.5 text-white font-bold"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
