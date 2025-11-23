'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Provider } from '@/lib/types'
import { Button } from '@/components/ui/button'

const categories = [
  'FORMAȚIE',
  'DJ',
  'SOLIST',
  'FOTOGRAF',
  'VIDEOGRAF',
  'SAXOFONIST',
  'ALTE SERVICII',
]

export function ProviderProfileForm({ providerId }: { providerId: string }) {
  const [provider, setProvider] = useState<Provider | null>(null)

  useEffect(() => {
    fetch(`/api/providers?providerId=${providerId}`)
      .then((res) => res.json())
      .then((data) => setProvider(data))
  }, [providerId])

  if (!provider) {
    return <p className="text-sm text-slate-600">Se încarcă profilul...</p>
  }

  return (
    <div className="card p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Nume</Label>
          <Input value={provider.nume} readOnly className="mt-1" />
        </div>
        <div>
          <Label>Categorie</Label>
          <Select value={provider.categorie} options={categories.map((c) => ({ label: c, value: c }))} disabled className="mt-1" />
        </div>
        <div>
          <Label>Județ</Label>
          <Input value={provider.judet} readOnly className="mt-1" />
        </div>
        <div>
          <Label>Localitate</Label>
          <Input value={provider.localitate} readOnly className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Descriere scurtă</Label>
          <Textarea value={provider.descriereScurta} readOnly className="mt-1" rows={3} />
        </div>
        <div>
          <Label>Descriere detaliată</Label>
          <Textarea value={provider.descriereDetaliata} readOnly className="mt-1" rows={3} />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label>Preț de pornire</Label>
          <Input value={`${provider.pretStart} EUR`} readOnly className="mt-1" />
        </div>
        <div>
          <Label>Interval orientativ</Label>
          <Input
            value={provider.intervalPret ? `${provider.intervalPret.min} - ${provider.intervalPret.max} EUR` : 'Nespecificat'}
            readOnly
            className="mt-1"
          />
        </div>
        <div>
          <Label>Disponibilitate zile</Label>
          <Input value={provider.disponibilitateZile.join(', ')} readOnly className="mt-1" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label>Telefon</Label>
          <Input value={provider.telefonContact} readOnly className="mt-1" />
        </div>
        <div>
          <Label>Email</Label>
          <Input value={provider.emailContact} readOnly className="mt-1" />
        </div>
        <div>
          <Label>Website</Label>
          <Input value={provider.website || 'Nu este setat'} readOnly className="mt-1" />
        </div>
      </div>
      <div>
        <Label>Tags</Label>
        <Input value={provider.tags.join(', ')} readOnly className="mt-1" />
      </div>
      <Button variant="secondary" disabled>
        Editare disponibilă în curând
      </Button>
    </div>
  )
}
