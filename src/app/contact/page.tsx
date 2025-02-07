import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white py-12">
      {/* Breadcrumb */}
      <div className="text-center text-green-400 text-sm md:text-base">
        <p>Home &gt; Pages &gt; Contact Us</p>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold my-6 text-green-400">
        Contact Us
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-10">
        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Let&apos;s Connect
          </h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full mt-2 p-3 border-2 border-green-400 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400 transition-transform transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@company.com"
                className="w-full mt-2 p-3 border-2 border-green-400 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400 transition-transform transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone number"
                className="w-full mt-2 p-3 border-2 border-green-400 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400 transition-transform transform hover:scale-105"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                id="message"
                placeholder="How can we help?"
                rows={4}
                className="w-full mt-2 p-3 border-2 border-green-400 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400 transition-transform transform hover:scale-105"
              ></textarea>
            </div>
            <p className="text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
            <button
              type="submit"
              className="w-full bg-green-400 text-gray-900 font-bold py-3 rounded-lg mt-3 transition-transform transform hover:scale-105 hover:bg-green-500"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section with Fixed Size */}
        <div className="flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/new2.jpeg"
            alt="Team Photo"
            className="rounded-lg w-[50rem] h-[40rem] opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
