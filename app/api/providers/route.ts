import { NextResponse } from 'next/server'
import { getProviderById, getProviderBySlug, listProviders } from '@/lib/db/fakeDb'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const judet = searchParams.get('judet')
  const categorie = searchParams.get('categorie')
  const slug = searchParams.get('slug')
  const providerId = searchParams.get('providerId')

  if (slug) {
    const provider = await getProviderBySlug(slug)
    return NextResponse.json(provider)
  }

  if (providerId) {
    const provider = await getProviderById(providerId)
    return NextResponse.json(provider)
  }

  let providers = await listProviders()
  if (judet) {
    providers = providers.filter((p) => p.judet === judet)
  }
  if (categorie) {
    providers = providers.filter((p) => p.categorie === categorie)
  }

  return NextResponse.json(providers)
}
