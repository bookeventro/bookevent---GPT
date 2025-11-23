import { NextResponse } from 'next/server'
import { getRequestById, toggleFavoriteRequest, updateRequestStatus } from '@/lib/db/fakeDb'
import { RequestStatus } from '@/lib/types'

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json()
  const { status, esteFavorit, noteInterne } = body as {
    status?: RequestStatus
    esteFavorit?: boolean
    noteInterne?: string
  }

  let updated = null
  if (typeof esteFavorit !== 'undefined') {
    updated = await toggleFavoriteRequest(params.id, esteFavorit)
  }
  if (status) {
    updated = await updateRequestStatus(params.id, status, noteInterne)
  }
  if (noteInterne && !status) {
    const existing = updated || (await getRequestById(params.id))
    updated = await updateRequestStatus(params.id, existing?.status || 'NOU', noteInterne)
  }

  return NextResponse.json(updated)
}
