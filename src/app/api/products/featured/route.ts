import { NextResponse } from 'next/server'

import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const featuredItems = data.products.filter((product) => product.featured)

  return NextResponse.json(featuredItems)
}
