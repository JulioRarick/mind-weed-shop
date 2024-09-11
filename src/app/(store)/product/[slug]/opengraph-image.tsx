/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { Product } from '@/data/@types/product'
import { api } from '@/data/api'
import { env } from '@/env'
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProductItem(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getProductItem(params.slug)

  const productUrlImage = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: colors.stone[200],
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <img src={productUrlImage} alt="" style={{ width: '100%' }} />
      </div>
    ),
  )
}
