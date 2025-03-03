import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { DealCard } from "@/components/deal-card"
import { products } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white">
        <div className="container mx-auto p-2">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Amazon"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-1 text-sm">
              <div className="text-gray-300">Deliver to</div>
              <div className="flex items-center font-bold">
                <MapIcon className="h-4 w-4 mr-1" />
                Select location
              </div>
            </div>

            <div className="flex-1 flex">
              <div className="hidden md:flex items-center bg-white rounded-l-md px-3 text-black">
                <span className="text-sm">All</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              <Input
                type="search"
                placeholder="Search Amazon"
                className="flex-1 rounded-l-none md:rounded-l-none rounded-r-none h-10 focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
              />
              <Button size="icon" className="h-10 w-10 rounded-l-none bg-amber-300 hover:bg-amber-400 text-black">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-1 text-sm">
              <div className="text-gray-300">Hello, sign in</div>
              <div className="flex items-center font-bold">
                Account & Lists
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1 text-sm">
              <div className="text-gray-300">Returns</div>
              <div className="font-bold">& Orders</div>
            </div>

            <Link href="/cart" className="flex items-center">
              <div className="relative">
                <ShoppingCart className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <span className="hidden md:inline font-bold ml-1">Cart</span>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-700 p-2">
          <div className="container mx-auto flex items-center gap-4 text-sm">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Menu className="h-4 w-4" />
              All
            </Button>
            <Link href="#" className="hover:underline whitespace-nowrap">
              Today's Deals
            </Link>
            <Link href="#" className="hover:underline whitespace-nowrap">
              Customer Service
            </Link>
            <Link href="#" className="hover:underline whitespace-nowrap hidden md:inline">
              Registry
            </Link>
            <Link href="#" className="hover:underline whitespace-nowrap hidden md:inline">
              Gift Cards
            </Link>
            <Link href="#" className="hover:underline whitespace-nowrap hidden md:inline">
              Sell
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-100">
        <div className="relative">
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100"></div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <CategoryCard
              title="Electronics"
              image="/placeholder.svg?height=200&width=200"
              href="/category/electronics"
            />
            <CategoryCard
              title="Home & Kitchen"
              image="/placeholder.svg?height=200&width=200"
              href="/category/home-kitchen"
            />
            <CategoryCard title="Books" image="/placeholder.svg?height=200&width=200" href="/category/books" />
            <CategoryCard title="Fashion" image="/placeholder.svg?height=200&width=200" href="/category/fashion" />
          </div>

          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Today's Deals</h2>
              <Link href="/deals" className="text-blue-500 hover:underline text-sm">
                See all deals
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.slice(0, 5).map((product) => (
                <DealCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                />
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recommended for you</h2>
              <Link href="/recommendations" className="text-blue-500 hover:underline text-sm">
                See more
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.slice(5, 10).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              ))}
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Best Sellers</h2>
              <Link href="/best-sellers" className="text-blue-500 hover:underline text-sm">
                See more
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {products.slice(10, 15).map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-slate-800 text-white">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Investor Relations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Sell products on Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sell on Amazon Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Advertise Your Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Business Card
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop with Points
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Reload Your Balance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Currency Converter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Returns & Replacements
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Amazon"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400">
              &copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MapIcon(props) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}

