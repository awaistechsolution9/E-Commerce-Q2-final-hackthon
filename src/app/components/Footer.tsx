/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

const DangerousFooter: React.FC = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Mail, href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
              <span className="text-2xl font-bold text-green-500">Media Mart</span>
            </Link>
            <p className="text-gray-400">
              Pushing the boundaries of technology. Explore our cutting-edge products and innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-500">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "FAQs", href: "/faqs" },
                { name: "Wishlist", href: "/wishlist" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-green-500 transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-green-500">Newsletter</h4>
            <p className="text-gray-400">Stay updated with our latest tech breakthroughs.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111] text-white px-4 py-2 flex-grow rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 transition-all"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 MediaMart. All rights reserved.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                className="text-gray-400 hover:text-green-500 transition-all duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <SVGBackground />
    </footer>
  );
};

const SVGBackground: React.FC = () => {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-32 text-green-500 opacity-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        fill="currentColor"
        fillOpacity="1"
        d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></motion.path>
    </svg>
  );
};

export default DangerousFooter;
