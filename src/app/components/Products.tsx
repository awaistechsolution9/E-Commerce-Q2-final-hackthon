"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useSearch } from "../context/SearchContext"
import { useCart } from "../context/CartContext"
import type React from "react"

interface Product {
  _id: string
  name: string
  price: number
  discountPercentage: number
  imageUrl: string
  slug: { current: string }
  description?: string
  rating?: number
  ratingCount?: number
  keyFeatures?: string[]
}

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { searchQuery } = useSearch()
  const { addToCart } = useCart()
  const [sortBy, setSortBy] = useState<string>("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])

  // Get min and max prices from products
  const maxPrice = Math.max(...products.map((p) => p.price), 0)
  const minPrice = Math.min(...products.map((p) => p.price), 0)

  // Initialize Snipcart safely
  useEffect(() => {
    setPriceRange([minPrice, maxPrice])

    if (typeof window !== "undefined" && window.Snipcart && window.Snipcart.refresh) {
      window.Snipcart.refresh()
    }
  }, [minPrice, maxPrice])

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return (b.rating || 0) - (a.rating || 0)
        case "popularity":
          return (b.ratingCount || 0) - (a.ratingCount || 0)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Filters Header */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">{filteredProducts.length} products found</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111] rounded-lg overflow-hidden relative group"
            >
              <Link href={`/products/${product.slug.current}`} className="block">
                <div className="aspect-square relative">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.discountPercentage > 0 && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                      {product.discountPercentage}% OFF
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <Link
                  href={`/products/${product.slug.current}`}
                  className="block hover:text-green-500 transition-colors"
                >
                  <h3 className="text-white font-semibold mb-2 truncate">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">${product.price}</span>
                  {product.discountPercentage > 0 && (
                    <span className="text-gray-400 line-through text-sm">
                      ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="snipcart-add-item w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                  data-item-id={product._id}
                  data-item-name={product.name}
                  data-item-price={product.price}
                  data-item-url={`/products/${product.slug.current}`}
                  data-item-image={product.imageUrl}
                  data-item-description={product.description || product.name}
                  onClick={() =>
                    addToCart({
                      _id: product._id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      imageUrl: product.imageUrl,
                      discountPercentage: product.discountPercentage,
                    })
                  }
                >
                  Add To Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
