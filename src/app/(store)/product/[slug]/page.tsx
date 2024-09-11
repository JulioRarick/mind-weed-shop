import { Metadata } from 'next'
import Image from 'next/image'

import { ButtonAddToCart } from '@/components/button-add-to-cart'
import { Product } from '@/data/@types/product'
import { api } from '@/data/api'

interface ProductPageProps {
  params: {
    slug: string
  }
}

async function getProductItem(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return {
      slug: product.slug,
    }
  })
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductItem(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductItem(params.slug)

  return (
    <main className="relative grid max-h-[880px] grid-cols-3">
      <figure className="col-span-2 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={700}
          height={700}
          quality={100}
        />
      </figure>
      <article className="flex flex-col justify-center px-14">
        <h1 className="text-4xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-stone-600">
          {product.description}
        </p>
        <section className="mt-4 flex flex-col items-start gap-3">
          <span className="inline-block self-center rounded-lg bg-amber-600/70 px-5 py-2.5 font-bold text-white">
            US$ {product.price}
          </span>
          {product.variant === 'smoke' && (
            <span className="text-sm text-stone-500">
              per gram - 100% Pure - 99.9% THC
            </span>
          )}
          <span className="text-sm text-stone-500">
            No Interest if paid in full in 6 months on $99+
          </span>
        </section>
        <section className="mt-8 flex flex-row items-center justify-between">
          {product.variant === 'clothing' && (
            <div className="flex flex-1 items-center justify-center gap-2">
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                S
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                M
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                L
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                XL
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                XXL
              </button>
            </div>
          )}
          {product.variant === 'smoke' && (
            <div className="flex flex-1 items-center justify-center gap-2">
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                5g
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                10g
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                25g
              </button>
            </div>
          )}
          {product.variant === 'natural' && (
            <div className="flex flex-1 items-center justify-center gap-2">
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                50ml
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                100ml
              </button>
              <button
                className="flex h-9 w-14 items-center justify-center rounded-lg bg-stone-300 font-semibold hover:bg-stone-400"
                type="button"
              >
                300ml
              </button>
            </div>
          )}
        </section>
        <ButtonAddToCart idProduct={product.id} />
      </article>
    </main>
  )
}
