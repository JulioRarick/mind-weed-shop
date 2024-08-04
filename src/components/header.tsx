import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Mind<span className="text-emerald-500">Weed</span>
        </Link>
        <form className="flex w-80 items-center gap-3 rounded-md bg-stone-900 px-5 py-3 ring-stone-600">
          <Search className="h-5 w-5 text-stone-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-stone-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-white" />
          <span className="text-sm">Cart (0)</span>
        </div>
        <div className="h-8 w-px bg-stone-600" />
        <Link href="/" className="flex items-center gap-3 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/JulioRarick.png"
            alt=" "
            width={36}
            height={36}
            className="h-8 w-8 rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}
