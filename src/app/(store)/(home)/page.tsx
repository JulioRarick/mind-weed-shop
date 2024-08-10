import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/data/@types/product'
import { api } from '@/data/api'

async function getFeatured(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [mainFeaturedProduct, ...othersProducts] = await getFeatured()

  return (
    <main className="grid max-h-[880px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${mainFeaturedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-stone-300 shadow-sm"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src={mainFeaturedProduct.image}
          alt="T-shirt Colorado Weed"
          width={800}
          height={800}
          quality={100}
        />
        <div className="absolute bottom-28 right-28 flex h-14 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-300 bg-white/50 p-1 pl-3">
          <span className="truncate text-sm font-semibold">
            {mainFeaturedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-lg bg-emerald-500 px-4 font-semibold">
            {`US$ ${mainFeaturedProduct.price}`}
          </span>
        </div>
      </Link>
      {othersProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-stone-300 shadow-sm"
          >
            <Image
              className="transition-transform duration-500 group-hover:scale-105"
              src={product.image}
              alt="OG Kush"
              width={250}
              height={250}
              quality={100}
            />
            <div className="absolute bottom-10 right-10 flex h-14 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-300 bg-white/50 p-1 pl-3">
              <span className="truncate text-sm font-semibold">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-lg bg-emerald-500 px-4 font-semibold">
                {`US$ ${product.price}`}
              </span>
            </div>
          </Link>
        )
      })}
    </main>
  )
}
