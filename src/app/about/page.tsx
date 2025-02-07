import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-green-500 py-12">
      {/* Breadcrumb */}
      <div className="text-center">
        <p className="text-green-400 text-sm md:text-base">
          Home &gt; Pages &gt; About Us
        </p>
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold my-6 text-white">
        About Us
      </h1>

      {/* Statistics */}
      <div className="flex flex-wrap justify-center gap-8 my-10">
        <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-white">400+</h2>
          <p className="text-gray-400">Worldwide Delivery</p>
        </div>
        <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-white">200+</h2>
          <p className="text-gray-400">Products</p>
        </div>
      </div>

      {/* Section: Making History Together */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold text-green-400">
          Making History Together
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Over worldwide delivery expert team members and smooth gaming product
          quality provide the best customer experience and consistent growth.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Section 1 */}
        <div className="overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/ab2.webp"
            alt="Products headquarters"
            className="rounded-md w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-400 mt-6 md:mt-24">
            Your One-Stop Online Shop
          </h3>
          <p className="text-gray-300 mt-3">
            Discover a seamless shopping experience with cutting-edge technology
            and a user-friendly interface. From gadgets to daily essentials, we
            provide the best products tailored to your needs.
          </p>
        </div>

        {/* Section 2 */}
        <div className="md:order-2 overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/boy3.webp"
            alt="Expert team members"
            className="rounded-md w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:order-1">
          <h3 className="text-3xl font-bold text-green-400 mt-6 md:mt-24">
            High-Quality Products
          </h3>
          <p className="text-gray-300 mt-3">
            Our products are designed for reliability and performance ensuring
            top-notch quality for every customer.
          </p>
        </div>

        {/* Section 3 */}
        <div className="overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/boy.webp"
            alt="Smooth gaming experience"
            className="rounded-md w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-400 mt-6 md:mt-24">
            Expert Team Behind Every Purchase
          </h3>
          <p className="text-gray-300 mt-3">
            Our dedicated team works tirelessly to ensure every product is
            delivered with care and precision, making your shopping experience
            smooth and delightful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
