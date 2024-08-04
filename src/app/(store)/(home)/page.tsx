import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-stone-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/tshirt.png"
          alt="T-shirt Colorado Weed"
          width={880}
          height={880}
          quality={100}
        />
        <div className="absolute bottom-28 right-28 flex h-14 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-600 bg-black/60 p-1 pl-3">
          <span className="truncate text-sm font-semibold">
            T-shirt Colorado Weed
          </span>
          <span className="flex h-full items-center justify-center rounded-lg bg-emerald-700 px-4 font-semibold">
            US$ 50
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-stone-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/ogKush.png"
          alt="OG Kush"
          width={300}
          height={300}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 flex h-14 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-600 bg-black/60 p-1 pl-3">
          <span className="truncate text-sm font-semibold">OG Kush</span>
          <span className="flex h-full items-center justify-center rounded-lg bg-emerald-700 px-4 font-semibold">
            US$ 40
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-stone-900"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src="/oil.png"
          alt="CBD Oil"
          width={300}
          height={300}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 flex h-14 max-w-72 items-center gap-2 rounded-lg border-2 border-stone-600 bg-black/60 p-1 pl-3">
          <span className="truncate text-sm font-semibold">CBD Oil</span>
          <span className="flex h-full items-center justify-center rounded-lg bg-emerald-700 px-4 font-semibold">
            US$ 20
          </span>
        </div>
      </Link>
    </main>
  )
}
