"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import { Menu, X } from "lucide-react"; // Stylish icons

interface Product {
  _id: string;
  name: string;
  price: number;
  discountPercentage: number;
  imageUrl: string;
  slug: { current: string };
}

export default function Header({ products = [] }: { products?: Product[] }) {
  const { searchQuery, setSearchQuery } = useSearch();
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  }, [searchQuery, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".search-container")) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <p className="text-sm text-center md:text-left w-full md:w-auto mb-2 md:mb-0 font-dmSans">
          Get special price up to{" "}
          <span className="text-green-500">50% off</span> our products
        </p>
        <div className="flex flex-wrap items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
          <div className="flex items-center space-x-2">
            <span>🌍</span>
            <select
              title="Select Language"
              className="bg-black text-green-500 text-sm outline-none cursor-pointer font-dmSans"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>💲</span>
            <select
              title="Select Currency"
              className="bg-black text-green-500 text-sm outline-none cursor-pointer font-dmSans"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black relative">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 relative">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-green-500 text-2xl md:text-3xl font-bold font-orbitron tracking-wider hover:text-green-400 transition-colors duration-300 font-dmSans">
              Media Mart
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "FAQs", href: "/faqs" }, // ✅ Fixed FAQs Link
              { name: "Wishlist", href: "/wishlist" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-green-500 transition duration-300 font-dmSans"
              >
                {item.name}
              </Link>
            ))}

            {/* Search Bar */}
            <div className="relative search-container">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white rounded px-3 py-1 outline-none focus:ring-2 focus:ring-green-500 transition-all font-dmSans"
                placeholder="Search..."
              />
              {isSearchOpen && searchQuery && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded w-72">
                  <ul>
                    {filteredProducts.map((product) => (
                      <li
                        key={product._id}
                        className="p-2 hover:bg-gray-200 cursor-pointer font-dmSans"
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-md transition-all duration-300 hover:bg-gray-800 font-dmSans"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white">
            <ul className="space-y-4 p-4">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "FAQs", href: "/faqs" }, // ✅ Fixed FAQs Link
                { name: "Wishlist", href: "/wishlist" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block hover:text-green-500 transition duration-300 font-dmSans"
                  >
                    {item.name} {item.name === "Cart" && `(${totalItems})`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
