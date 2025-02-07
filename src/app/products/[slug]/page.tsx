// app/products/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import ProductDetails from "@/app/components/ProductDetails";
// import Header from "@/app/components/Header";

// Async function to fetch product data
async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    discountPercentage,
    description,
    keyFeatures,
    image,
    "slug": slug.current
  }`;
  return client.fetch(query, { slug });
}

// Type definitions for Params and SearchParams
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// The page component
export default async function ProductPage(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<React.JSX.Element | null> {
  try {
    // Extract the slug from the params
    const { slug } = await props.params;

    // Fetch the product based on the slug
    const product = await getProduct(slug);

    // If product not found, show a message
    if (!product) {
      return <main>Product not found</main>;
    }

    // Render the product details if found
    return (
      <main>
{/* <Header/> */}
        <ProductDetails product={product} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
