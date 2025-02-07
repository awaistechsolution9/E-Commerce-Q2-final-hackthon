"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Lady Press and Dress",
    price: 99,
    originalPrice: 124.75,
    discountPercentage: 20,
    rating: 4,
    reviews: 4,
    imageUrl: "/assets/lady.png",
  },
  {
    id: "2",
    name: "Women's Jewelry",
    price: 300,
    originalPrice: 428.57,
    discountPercentage: 30,
    rating: 5,
    reviews: 5,
    imageUrl: "/assets/ju.png",
  },
  {
    id: "3",
    name: "Table Decor",
    price: 89,
    originalPrice: 98.89,
    discountPercentage: 10,
    rating: 5,
    reviews: 5,
    imageUrl: "/assets/homee.png",
  },
  {
    id: "4",
    name: "Cap",
    price: 90,
    originalPrice: 98.89,
    discountPercentage: 10,
    rating: 5,
    reviews: 5,
    imageUrl: "/assets/media.png",
  },
  {
    id: "5",
    name: "Cricket Kit",
    price: 150,
    originalPrice: 175.89,
    discountPercentage: 10,
    rating: 5,
    reviews: 5,
    imageUrl: "/assets/bad.png",
  },
  {
    id: "6",
    name: "Watch",
    price: 150,
    originalPrice: 175.89,
    discountPercentage: 10,
    rating: 5,
    reviews: 5,
    imageUrl: "/assets/watch.png",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Best() {
  useEffect(() => {
    if (typeof window !== "undefined" && "Snipcart" in window) {
      (window as unknown as { Snipcart: { refresh: () => void } }).Snipcart.refresh();
    }
  }, []);

  return (
    <div id="product">
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-white font-orbitron">
              Best Seller <span className="text-green-500">Products</span>
            </h2>
            <Link
              href="/products"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#111] rounded-lg overflow-hidden relative group hover:transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.discountPercentage > 0 && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                      {product.discountPercentage}% OFF
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-bold">
                      ${product.price}
                    </span>
                    {product.discountPercentage > 0 && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <StarRating rating={product.rating} />
                    <span className="text-gray-400 text-sm">
                      ({product.reviews})
                    </span>
                  </div>
                  <button
                    className="snipcart-add-item w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors active:scale-[0.98] transform"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`/products/${product.id}`}
                    data-item-image={product.imageUrl}
                    data-item-name={product.name}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
