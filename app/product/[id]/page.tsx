"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, Truck } from "lucide-react"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Product Images */}
        <div className="w-full lg:w-2/5">
          <div className="sticky top-8">
            <div className="bg-white p-4 rounded-md">
              <div className="relative h-[400px]">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-xl md:text-2xl font-medium mb-2">{product.title}</h1>

          <Link href="#" className="text-blue-500 hover:underline text-sm mb-3 inline-block">
            Visit the {product.brand} Store
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <Link href="#reviews" className="text-blue-500 hover:underline text-sm">
              {product.reviewCount} ratings
            </Link>
          </div>

          <div className="border-b pb-4 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-red-600 text-sm">-{product.discount}%</span>
              <span className="text-red-600">
                <span className="text-sm">$</span>
                <span className="text-2xl font-medium">{product.price.toFixed(2)}</span>
              </span>
            </div>
            <div className="text-sm">
              List Price: <span className="line-through">${product.originalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
              <span className="text-sm font-medium">Brand:</span>
              <span className="text-sm">{product.brand}</span>

              <span className="text-sm font-medium">Color:</span>
              <div className="flex gap-2">
                {["Black", "Silver", "Blue"].map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 border rounded-full cursor-pointer ${color === "Black" ? "bg-black" : color === "Silver" ? "bg-gray-300" : "bg-blue-500"} ${color === "Black" ? "ring-2 ring-blue-500 ring-offset-1" : ""}`}
                    title={color}
                  />
                ))}
              </div>

              <span className="text-sm font-medium">Size:</span>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className={`w-8 h-8 border rounded-md flex items-center justify-center cursor-pointer text-sm ${size === "M" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-medium mb-2">About this item</h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Buy Box */}
        <div className="w-full lg:w-1/5">
          <div className="bg-white p-4 rounded-md border">
            <div className="text-xl font-medium mb-2">
              <span className="text-sm">$</span>
              <span>{product.price.toFixed(2)}</span>
            </div>

            <div className="text-sm mb-3">
              FREE delivery <span className="font-bold">Tomorrow</span> if you order within{" "}
              <span className="text-green-600 font-medium">12 hrs 30 mins</span>
            </div>

            <div className="flex items-center gap-2 text-sm mb-4">
              <Truck className="h-4 w-4 text-gray-500" />
              <span>
                Delivery to <span className="font-bold">New York 10001</span>
              </span>
              <button className="text-blue-500 hover:underline text-xs">Update</button>
            </div>

            <div className="text-lg font-medium text-green-600 mb-4">In Stock</div>

            <div className="mb-4">
              <Select value={quantity.toString()} onValueChange={(val) => setQuantity(Number.parseInt(val))}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Qty: 1" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      Qty: {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 mb-4">
              <Button className="w-full bg-amber-300 hover:bg-amber-400 text-black">Add to Cart</Button>
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-black">Buy Now</Button>
            </div>

            <div className="text-sm">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-gray-500" />
                <span>Secure transaction</span>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                <span>Ships from:</span>
                <span>Amazon.com</span>
                <span>Sold by:</span>
                <span>Amazon.com</span>
                <span>Returns:</span>
                <span>Returnable until Jan 31, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 px-4"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 px-4"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              id="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 px-4"
            >
              Customer Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="prose max-w-none">
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,
                mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
              </p>
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Technical Details</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Brand</td>
                      <td className="py-2">{product.brand}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Model</td>
                      <td className="py-2">{product.model}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Color</td>
                      <td className="py-2">Black</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Material</td>
                      <td className="py-2">{product.material}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Weight</td>
                      <td className="py-2">{product.weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Additional Information</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">ASIN</td>
                      <td className="py-2">
                        B0
                        {Math.floor(Math.random() * 10000000)
                          .toString()
                          .padStart(8, "0")}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Customer Reviews</td>
                      <td className="py-2">
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <Link href="#reviews" className="text-blue-500 hover:underline text-xs">
                            {product.reviewCount} ratings
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Best Sellers Rank</td>
                      <td className="py-2">#12,345 in Electronics</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Date First Available</td>
                      <td className="py-2">January 15, 2023</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Warranty</td>
                      <td className="py-2">1 year limited warranty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating} out of 5</span>
                </div>
                <div className="space-y-2 mb-6">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <Link href="#" className="text-blue-500 hover:underline text-sm">
                        {star} star
                      </Link>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{
                            width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Write a customer review
                </Button>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Top reviews from the United States</h3>
                  <Select defaultValue="helpful">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="helpful">Top reviews</SelectItem>
                      <SelectItem value="recent">Most recent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                          {["JD", "SK", "MP"][review - 1]}
                        </div>
                        <span className="font-medium">{["John Doe", "Sarah K.", "Mike P."][review - 1]}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < (review === 1 ? 5 : review === 2 ? 4 : 5) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="font-medium text-sm">
                          {["Excellent product!", "Great value for money", "Highly recommended"][review - 1]}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Reviewed in the United States on{" "}
                        {["March 15, 2023", "February 28, 2023", "April 2, 2023"][review - 1]}
                      </div>
                      <div className="text-sm mb-3">
                        {
                          [
                            "This product exceeded my expectations. The quality is outstanding and it works perfectly for what I needed. Battery life is impressive and the design is sleek.",
                            "I've been using this for about a month now and I'm very satisfied with my purchase. It's durable, well-made, and performs exactly as described.",
                            "After researching several options, I decided on this one and I couldn't be happier. The setup was easy and the performance is top-notch. Definitely worth the price!",
                          ][review - 1]
                        }
                      </div>
                      <div className="text-sm">
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          Helpful
                        </Button>
                        <span className="text-xs text-gray-500">
                          {[42, 18, 27][review - 1]} people found this helpful
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4">
                  See all reviews
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">Customers who bought this item also bought</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.slice(0, 6).map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              id={relatedProduct.id}
              title={relatedProduct.title}
              image={relatedProduct.image}
              price={relatedProduct.price}
              rating={relatedProduct.rating}
              reviewCount={relatedProduct.reviewCount}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

