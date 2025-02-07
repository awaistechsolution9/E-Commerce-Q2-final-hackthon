// src/app/components/ProductDetails.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: { asset: { _ref: string } }[];
  description?: string;
}

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: urlFor(product.image[0]).url(),
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Image
            src={urlFor(product.image[0]).url()}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-green-500">{product.name}</h1>
          <p className="text-gray-300 mt-4">{product.description}</p>
          <button onClick={handleAddToCart} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
