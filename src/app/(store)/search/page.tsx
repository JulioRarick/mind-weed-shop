import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Product } from '@/data/@types/product'
import { api } from '@/data/api'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()

  return products
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{query}</span>
      </p>
      <article className="grid grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative flex h-72 w-full items-center justify-center overflow-hidden rounded-lg bg-stone-300 shadow-sm"
            >
              <Image
                className="transition-transform duration-500 group-hover:scale-105"
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                quality={100}
              />
              <section className="absolute bottom-10 right-10 flex h-12 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-300 bg-white/50 p-1 pl-3">
                <h2 className="truncate text-sm font-semibold">
                  {product.title}
                </h2>
                <h3 className="flex h-full items-center justify-center rounded-lg bg-emerald-500 px-4 font-semibold">
                  {`US$ ${product.price}`}
                </h3>
              </section>
            </Link>
          )
        })}
      </article>
    </main>
  )
}
