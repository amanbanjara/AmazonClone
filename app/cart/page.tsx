import Link from "next/link"
import Image from "next/image"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/data"

export default function CartPage() {
  // Sample cart items
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[5], quantity: 2 },
    { product: products[10], quantity: 1 },
  ]

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.length > 0 ? (
            <div className="bg-white rounded-md shadow-sm p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Cart ({cartItems.length} items)</h2>
                <span className="text-right">Price</span>
              </div>

              <Separator className="mb-6" />

              {cartItems.map((item, index) => (
                <div key={item.product.id} className="mb-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <Link href={`/product/${item.product.id}`} className="text-lg font-medium hover:text-blue-600">
                        {item.product.title}
                      </Link>

                      <div className="text-sm text-green-600 mb-2">In Stock</div>

                      <div className="text-sm mb-2">{item.product.features[0]}</div>

                      <div className="flex flex-wrap gap-4 items-center">
                        <Select defaultValue={item.quantity.toString()}>
                          <SelectTrigger className="w-20 h-8">
                            <SelectValue placeholder="Qty" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Separator orientation="vertical" className="h-6" />

                        <Button variant="ghost" size="sm" className="h-8 text-xs text-blue-600 p-0">
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>

                        <Separator orientation="vertical" className="h-6" />

                        <Button variant="ghost" size="sm" className="h-8 text-xs text-blue-600 p-0">
                          Save for later
                        </Button>
                      </div>
                    </div>

                    <div className="text-lg font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                  </div>

                  {index < cartItems.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}

              <div className="text-right text-lg font-medium">
                Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):
                <span className="font-bold"> ${subtotal.toFixed(2)}</span>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-md shadow-sm p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Your Amazon Cart is empty</h2>
              <p className="mb-4">
                Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies,
                electronics, and more.
              </p>
              <Button asChild>
                <Link href="/">Continue shopping</Link>
              </Button>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recommended based on your shopping trends</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(11, 16).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/product/${product.id}`} className="block p-3">
                    <div className="relative h-32 mb-2">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-sm line-clamp-2 mb-1">{product.title}</h3>
                    <div className="font-bold text-sm">${product.price.toFixed(2)}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Checkout */}
        {cartItems.length > 0 && (
          <div className="lg:w-80">
            <div className="bg-white rounded-md shadow-sm p-6 sticky top-8">
              <div className="text-lg mb-4">
                Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):
                <span className="font-bold"> ${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center mb-4">
                <input type="checkbox" id="gift" className="mr-2" />
                <label htmlFor="gift" className="text-sm">
                  This order contains a gift
                </label>
              </div>

              <Button className="w-full bg-amber-300 hover:bg-amber-400 text-black mb-3">Proceed to checkout</Button>

              <div className="border rounded-md p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Secure transaction</span>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs">
                  <span className="text-gray-500">Shipping:</span>
                  <span>FREE Prime Delivery</span>

                  <span className="text-gray-500">Sold by:</span>
                  <span>Amazon.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Lock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

