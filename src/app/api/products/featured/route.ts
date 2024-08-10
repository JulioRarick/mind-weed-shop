import data from '../data.json'

export async function GET() {
  const featuredItems = data.products.filter((product) => product.featured)

  return Response.json(featuredItems)
}
