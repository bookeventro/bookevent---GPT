import { NextResponse } from 'next/server'
import { listAvailabilityByProvider, upsertAvailabilitySlots } from '@/lib/db/fakeDb'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const providerId = searchParams.get('providerId')
  if (!providerId) return NextResponse.json([], { status: 400 })
  const data = await listAvailabilityByProvider(providerId)
  return NextResponse.json(data)
}

export async function PUT(request: Request) {
  const body = await request.json()
  const { providerId, slots } = body as { providerId: string; slots: any[] }
  const data = await upsertAvailabilitySlots(providerId, slots)
  return NextResponse.json(data)
}

export const PATCH = PUT
