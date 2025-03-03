import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface DealCardProps {
  id: string
  title: string
  image: string
  price: number
  originalPrice: number
  discount: number
  className?: string
}

export function DealCard({ id, title, image, price, originalPrice, discount, className }: DealCardProps) {
  return (
    <div className={cn("bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow", className)}>
      <Link href={`/product/${id}`} className="block p-3">
        <div className="relative">
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-md">
            {discount}% OFF
          </div>
          <div className="relative h-40 mb-3">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
          </div>
        </div>
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold">
            <span className="text-sm">$</span>
            <span className="text-lg">{price.toFixed(2)}</span>
          </span>
          <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Deal ends in {Math.floor(Math.random() * 24)}h {Math.floor(Math.random() * 60)}m
        </div>
      </Link>
    </div>
  )
}

