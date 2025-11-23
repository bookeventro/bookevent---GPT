'use client'

import { cn } from '@/lib/utils'

interface ProviderSidebarProps {
  active: string
  onChange: (key: string) => void
}

const links = [
  { key: 'profil', label: 'Profil' },
  { key: 'calendar', label: 'Calendar' },
  { key: 'cereri', label: 'Cereri de ofertă' },
]

export function ProviderSidebar({ active, onChange }: ProviderSidebarProps) {
  return (
    <aside className="w-60 bg-white border-r border-slate-200 h-full p-6 space-y-6">
      <div className="text-lg font-bold">BookEvent.ro</div>
      <div className="space-y-2">
        {links.map((link) => (
          <button
            key={link.key}
            onClick={() => onChange(link.key)}
            className={cn(
              'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              active === link.key ? 'bg-primary text-white shadow' : 'hover:bg-slate-100 text-slate-700',
            )}
          >
            {link.label}
          </button>
        ))}
      </div>
    </aside>
  )
}
