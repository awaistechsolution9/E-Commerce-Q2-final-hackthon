"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-500 text-white min-h-[90vh] z-10 overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/hom.png')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-0" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto flex flex-col items-center justify-center text-center min-h-[90vh] py-20 px-6 md:px-12 lg:px-20 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 tracking-wider text-white">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white inline-block"
          >
            Discover the Best Deals
          </motion.span>
          <br /> Shop Now & Save!
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-4 text-lg text-white font-poppins max-w-2xl"
        >
          Find unbeatable discounts on top-quality products! From the latest
          trends to everyday essentials, shop now and save big on your favorite
          brands. Limited-time offers—don’t miss out!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
        >
          {/* View Products Button */}
          <Link href={"#product"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-500 transition-colors duration-300 font-medium"
            >
              View Products
            </motion.button>
          </Link>

          {/* View Collections Button (Redirects to Product Page) */}
          <Link href={"/products"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              View Collections
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

