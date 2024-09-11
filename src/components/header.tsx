import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from './cart-widget'
import { SearchProduct } from './search-product'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-black"
        >
          Mind<span className="text-emerald-500">Weed</span>
        </Link>
        <SearchProduct />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
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
