'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { BadgeStatus } from '@/components/shared/BadgeStatus'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { OfferRequest, RequestStatus } from '@/lib/types'
import { Select } from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { formatDate, formatMoney } from '@/lib/utils'

interface RequestDetailsDrawerProps {
  requestId: string | null
  onClose: () => void
  onUpdated: (request: OfferRequest) => void
}

const statusOptions: RequestStatus[] = ['NOU', 'ÎN DISCUȚIE', 'ACCEPTAT', 'RESPINS']

export function RequestDetailsDrawer({ requestId, onClose, onUpdated }: RequestDetailsDrawerProps) {
  const [request, setRequest] = useState<OfferRequest | null>(null)
  const [note, setNote] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    if (requestId) {
      fetch(`/api/requests?requestId=${requestId}`)
        .then((res) => res.json())
        .then((data) => {
          setRequest(data)
          setNote(data.noteInterne || '')
        })
    }
  }, [requestId])

  async function updateRequest(payload: Partial<OfferRequest>) {
    if (!request) return
    const res = await fetch(`/api/requests/${request.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const updated = await res.json()
    setRequest(updated)
    onUpdated(updated)
    toast({ title: 'Cererea a fost actualizată' })
  }

  return (
    <Dialog open={!!requestId} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg right-0 sm:right-auto">
        {request && (
          <div className="space-y-4">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>Cerere de la {request.numeClient}</span>
                <BadgeStatus status={request.status} />
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-slate-500">Data cererii</p>
                <p className="font-semibold">{formatDate(request.dataCerere)}</p>
              </div>
              <div>
                <p className="text-slate-500">Eveniment</p>
                <p className="font-semibold">{request.tipEveniment}</p>
              </div>
              <div>
                <p className="text-slate-500">Data eveniment</p>
                <p className="font-semibold">{formatDate(request.dataEveniment)}</p>
              </div>
              <div>
                <p className="text-slate-500">Localitate</p>
                <p className="font-semibold">{request.localitateEveniment}</p>
              </div>
              <div>
                <p className="text-slate-500">Buget</p>
                <p className="font-semibold">{request.bugetEstimativ ? formatMoney(request.bugetEstimativ) : 'Nespecificat'}</p>
              </div>
            </div>
            <div className="space-y-1">
              <Label>Mesajul clientului</Label>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg">{request.mesajClient}</p>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={request.status}
                options={statusOptions.map((s) => ({ label: s, value: s }))}
                onChange={(e) => updateRequest({ status: e.target.value as RequestStatus })}
              />
            </div>
            <div className="space-y-2">
              <Label>Note interne</Label>
              <Textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} />
              <Button variant="secondary" onClick={() => updateRequest({ noteInterne: note })}>
                Salvează notele
              </Button>
            </div>
            <div>
              <Button variant="outline" onClick={() => updateRequest({ esteFavorit: !request.esteFavorit })}>
                {request.esteFavorit ? 'Scoate din favorite' : 'Marchează favorit'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
