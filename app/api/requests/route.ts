import { NextResponse } from 'next/server'
import { createOfferRequest, getRequestById, listRequestsByProvider } from '@/lib/db/fakeDb'
import { offerRequestSchema } from '@/lib/validations/requestSchema'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const providerId = searchParams.get('providerId')
  const requestId = searchParams.get('requestId')

  if (requestId) {
    const found = await getRequestById(requestId)
    return NextResponse.json(found)
  }

  if (!providerId) {
    return NextResponse.json({ error: 'providerId lipsă' }, { status: 400 })
  }

  const data = await listRequestsByProvider(providerId)
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()
  const parsed = offerRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const newRequest = await createOfferRequest(parsed.data)
  return NextResponse.json(newRequest, { status: 201 })
}
