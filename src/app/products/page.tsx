import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Products from "@/app/components/Products"

async function getAllProducts() {
  const query = groq`
    *[_type == "product"]{
      _id,
      name,
      slug,
      description,
      price,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      ratingCount,
      tags,
      sizes,
      "imageUrl": image.asset->url,
      keyFeatures
    }
  `

  const products = await client.fetch(query)
  return products
}

export const revalidate = 10 // Revalidate every 10 seconds

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div>
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8 font-orbitron">All Products</h1>
          <Products products={products} />
        </div>
      </div>
    </div>
  )
}

