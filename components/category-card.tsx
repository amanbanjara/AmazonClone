import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <Link href={href} className="block">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <div className="relative h-40 mb-3">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <span className="text-blue-500 text-sm">Shop now</span>
      </Link>
    </div>
  )
}

