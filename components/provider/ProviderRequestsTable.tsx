'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { BadgeStatus } from '@/components/shared/BadgeStatus'
import { EmptyState } from '@/components/shared/EmptyState'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { OfferRequest } from '@/lib/types'
import { formatDate, formatMoney } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'
import { RequestDetailsDrawer } from './RequestDetailsDrawer'

export function ProviderRequestsTable({ providerId }: { providerId: string }) {
  const [requests, setRequests] = useState<OfferRequest[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetch(`/api/requests?providerId=${providerId}`)
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => toast({ title: 'Eroare la încărcarea cererilor', variant: 'destructive' }))
  }, [providerId, toast])

  async function toggleFavorite(id: string) {
    const target = requests.find((req) => req.id === id)
    if (!target) return
    const res = await fetch(`/api/requests/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ esteFavorit: !target.esteFavorit }),
    })
    const updated = await res.json()
    setRequests((prev) => prev.map((req) => (req.id === id ? updated : req)))
  }

  function handleUpdated(updated: OfferRequest) {
    setRequests((prev) => prev.map((req) => (req.id === updated.id ? updated : req)))
  }

  if (requests.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="card p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data cererii</TableHead>
            <TableHead>Nume client</TableHead>
            <TableHead>Tip eveniment</TableHead>
            <TableHead>Data eveniment</TableHead>
            <TableHead>Localitate</TableHead>
            <TableHead>Buget</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Favorite</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((req) => (
            <TableRow key={req.id}>
              <TableCell>{formatDate(req.dataCerere)}</TableCell>
              <TableCell className="font-semibold">{req.numeClient}</TableCell>
              <TableCell>{req.tipEveniment}</TableCell>
              <TableCell>{formatDate(req.dataEveniment)}</TableCell>
              <TableCell>{req.localitateEveniment}</TableCell>
              <TableCell>{req.bugetEstimativ ? formatMoney(req.bugetEstimativ) : 'Nespecificat'}</TableCell>
              <TableCell>
                <BadgeStatus status={req.status} />
              </TableCell>
              <TableCell>
                <button onClick={() => toggleFavorite(req.id)} className="text-amber-500">
                  <Star className={req.esteFavorit ? 'fill-amber-400' : 'fill-none'} />
                </button>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline" onClick={() => setSelectedId(req.id)}>
                  Detalii
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <RequestDetailsDrawer requestId={selectedId} onClose={() => setSelectedId(null)} onUpdated={handleUpdated} />
    </div>
  )
}
