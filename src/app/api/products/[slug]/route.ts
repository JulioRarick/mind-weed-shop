import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return NextResponse.json(product)
}
