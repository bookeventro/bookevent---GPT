'use client'

import { useState } from 'react'
import { ProviderSidebar } from '@/components/provider/ProviderSidebar'
import { ProviderProfileForm } from '@/components/provider/ProviderProfileForm'
import { ProviderCalendar } from '@/components/provider/ProviderCalendar'
import { ProviderRequestsTable } from '@/components/provider/ProviderRequestsTable'
import { Badge } from '@/components/ui/badge'

const providerId = 'prov-1'

export default function DashboardPage() {
  const [active, setActive] = useState('profil')

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex h-screen">
        <ProviderSidebar active={active} onChange={setActive} />
        <main className="flex-1 overflow-y-auto p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Bun venit, Formația Aurora</p>
              <h1 className="text-2xl font-bold text-slate-900">Tablou de bord</h1>
            </div>
            <Badge className="bg-primary/10 text-primary">MVP – datele sunt mock, nu live încă</Badge>
          </div>
          {active === 'profil' && <ProviderProfileForm providerId={providerId} />}
          {active === 'calendar' && <ProviderCalendar providerId={providerId} />}
          {active === 'cereri' && <ProviderRequestsTable providerId={providerId} />}
        </main>
      </div>
    </div>
  )
}
