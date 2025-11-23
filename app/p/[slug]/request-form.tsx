'use client'

import { useState } from 'react'
import { offerRequestSchema, OfferRequestFormValues } from '@/lib/validations/requestSchema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const eventOptions = ['Nuntă', 'Botez', 'Corporate', 'Petrecere privată', 'Alt tip de eveniment']

export function RequestForm({ providerId }: { providerId: string }) {
  const [values, setValues] = useState<OfferRequestFormValues>({
    providerId,
    numeClient: '',
    emailClient: '',
    telefonClient: '',
    tipEveniment: 'Nuntă',
    dataEveniment: '',
    localitateEveniment: '',
    numarInvitati: null,
    bugetEstimativ: null,
    mesajClient: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  function handleChange(field: keyof OfferRequestFormValues, value: any) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const parse = offerRequestSchema.safeParse(values)
    if (!parse.success) {
      toast({ title: 'Formular incomplet', description: 'Verifică datele introduse', variant: 'destructive' })
      return
    }
    setSubmitting(true)
    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    setSubmitting(false)
    if (res.ok) {
      toast({ title: 'Cererea ta a fost trimisă.', description: 'Prestatorul te va contacta în cel mai scurt timp.' })
      setValues((prev) => ({
        ...prev,
        numeClient: '',
        emailClient: '',
        telefonClient: '',
        dataEveniment: '',
        localitateEveniment: '',
        numarInvitati: null,
        bugetEstimativ: null,
        mesajClient: '',
      }))
    } else {
      toast({ title: 'A apărut o eroare. Te rugăm să încerci din nou.', variant: 'destructive' })
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label>Nume client</Label>
        <Input value={values.numeClient} onChange={(e) => handleChange('numeClient', e.target.value)} required className="mt-1" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Email</Label>
          <Input value={values.emailClient} onChange={(e) => handleChange('emailClient', e.target.value)} required className="mt-1" />
        </div>
        <div>
          <Label>Telefon</Label>
          <Input value={values.telefonClient} onChange={(e) => handleChange('telefonClient', e.target.value)} required className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Tip eveniment</Label>
          <select
            className="w-full h-10 rounded-lg border border-slate-200 px-3 text-sm"
            value={values.tipEveniment}
            onChange={(e) => handleChange('tipEveniment', e.target.value as OfferRequestFormValues['tipEveniment'])}
          >
            {eventOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <Label>Data evenimentului</Label>
          <Input type="date" value={values.dataEveniment} onChange={(e) => handleChange('dataEveniment', e.target.value)} required className="mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Localitate</Label>
          <Input value={values.localitateEveniment} onChange={(e) => handleChange('localitateEveniment', e.target.value)} required className="mt-1" />
        </div>
        <div>
          <Label>Număr invitați (opțional)</Label>
          <Input
            type="number"
            value={values.numarInvitati ?? ''}
            onChange={(e) => handleChange('numarInvitati', e.target.value ? Number(e.target.value) : null)}
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <Label>Buget estimativ (EUR)</Label>
        <Input
          type="number"
          value={values.bugetEstimativ ?? ''}
          onChange={(e) => handleChange('bugetEstimativ', e.target.value ? Number(e.target.value) : null)}
          className="mt-1"
        />
      </div>
      <div>
        <Label>Mesaj</Label>
        <Textarea value={values.mesajClient} onChange={(e) => handleChange('mesajClient', e.target.value)} required rows={4} className="mt-1" />
      </div>
      <Button type="submit" disabled={submitting} className="w-full">
        {submitting ? 'Se trimite...' : 'Trimite cerere de ofertă'}
      </Button>
    </form>
  )
}
