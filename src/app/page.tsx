import React from "react";

import Hero from "./components/Hero";
import SpecialOfferSection from "./components/Special";
import PopularProducts from "./components/Popular";
import BestProducts from "./components/Best";

// async function getProducts() {
//   const query = groq`
//     *[_type == "product"]{
//       _id,
//       name,
//       price,
//       discountPercentage,
//       "imageUrl": image.asset->url,
//       slug
//     }
//   `;

//   const products = await client.fetch(query);
//   return products;
// }

export default async function Home() {
  // const products = await getProducts();

  return (
    <div>
      <Hero />
      <BestProducts />
      <SpecialOfferSection />
      <PopularProducts />
    </div>
  );
}
 