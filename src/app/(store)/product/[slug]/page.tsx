import Image from 'next/image'

export default function ProductPage() {
  return (
    <main className="relative grid max-h-[880px] grid-cols-3">
      <figure className="col-span-2 flex items-center justify-center overflow-hidden">
        <Image
          src="/tshirt.png"
          alt="T-shirt Colorado Weed"
          width={800}
          height={800}
          quality={100}
        />
      </figure>
      <article className="flex flex-col justify-center px-14">
        <h1 className="text-4xl font-bold leading-tight">
          T-shirt Colorado Weed
        </h1>
        <p className="mt-2 leading-relaxed text-stone-600">
          T-shirt 100% cotton, with a unique design.
        </p>
        <section className="mt-4 flex flex-col items-start gap-3">
          <span className="inline-block self-center rounded-lg bg-amber-600/70 px-5 py-2.5 font-bold text-white">
            US$ 50
          </span>
          <span className="text-sm text-stone-500">
            No Interest if paid in full in 6 months on $99+
          </span>
        </section>
        <section className="mt-8 flex flex-row items-center justify-between">
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
        </section>
        <button className="mt-8 flex h-12 items-center justify-center rounded-lg bg-emerald-600 font-semibold text-white hover:bg-emerald-700">
          Add to cart
        </button>
      </article>
    </main>
  )
}
