import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  rating: number
  reviewCount: number
  className?: string
}

export function ProductCard({ id, title, image, price, rating, reviewCount, className }: ProductCardProps) {
  return (
    <div className={cn("bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow", className)}>
      <Link href={`/product/${id}`} className="block p-3">
        <div className="relative h-40 mb-3">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{title}</h3>
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-3 w-3", i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
            />
          ))}
          <span className="text-xs text-blue-500 ml-1">{reviewCount}</span>
        </div>
        <div className="font-bold">
          <span className="text-sm">$</span>
          <span className="text-lg">{price.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500">{Math.random() > 0.5 ? "FREE Delivery" : "FREE Returns"}</div>
      </Link>
      <div className="p-3 pt-0">
        <Button className="w-full bg-amber-300 hover:bg-amber-400 text-black">Add to Cart</Button>
      </div>
    </div>
  )
}

