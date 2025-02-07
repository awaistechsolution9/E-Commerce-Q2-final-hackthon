'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    images: ProductImage[];
    description: string;
    slug: {
      current: string;
    };
    quantity?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: urlFor(product.images[0]).url(), // Use the first image URL
      discountPercentage: undefined, // Set to a value or undefined
      quantity: 1,
    });
  };

  const toggleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product._id);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-b from-black to-gray-900 rounded-lg overflow-hidden border border-green-500/20 
                shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
    >
      <div className="relative group">
        <Link href={`/products/${product.slug.current}`}>
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={urlFor(product.images[0]).url()}
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>
        
        <motion.button
          onClick={toggleWishlist}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-4 right-4 p-2 rounded-full 
            ${isInWishlist(product._id)
              ? 'bg-green-500 text-white'
              : 'bg-black/50 backdrop-blur-sm border border-green-500/50 text-green-500'
            } transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20`}
        >
          <Heart
            className={`w-5 h-5 ${
              isInWishlist(product._id)
                ? 'fill-white'
                : 'hover:fill-green-500'
            }`}
          />
        </motion.button>
      </div>

      <div className="p-4 space-y-3">
        <Link href={`/products/${product.slug.current}`}>
          <h3 className="text-lg font-semibold text-green-500 font-orbitron hover:text-green-400 
                        transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-xl font-bold text-green-500">
            ${product.price.toFixed(2)}
          </span>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold 
                      hover:bg-green-600 transition-colors duration-300"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
