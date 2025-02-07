// schema.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { 
        name: 'slug', 
        type: 'slug', 
        title: 'Slug', 
        options: { source: 'name', maxLength: 96 },
        description: 'Unique identifier for the product, used in the URL'
      },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'price', type: 'number', title: 'Product Price' },
      { name: 'discountPercentage', type: 'number', title: 'Discount Percentage' },
      { name: 'priceWithoutDiscount', type: 'number', title: 'Price Without Discount' },
      { name: 'rating', type: 'number', title: 'Rating' },
      { name: 'ratingCount', type: 'number', title: 'Rating Count' },
      { 
        name: 'tags', 
        type: 'array', 
        title: 'Tags', 
        of: [{ type: 'string' }],
        options: { layout: 'tags' }
      },
      { 
        name: 'sizes', 
        type: 'array', 
        title: 'Sizes', 
        of: [{ type: 'string' }],
        options: { layout: 'tags' }
      },
      { 
        name: 'image', 
        type: 'image', 
        title: 'Product Image', 
        options: { hotspot: true }
      },
      { 
        name: 'keyFeatures', 
        type: 'array', 
        title: 'Key Features', 
        of: [{ type: 'string' }]
      },
    ],
};