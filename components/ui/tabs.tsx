import * as React from 'react'
import { cn } from '@/lib/utils'

interface TabsProps {
  tabs: { key: string; label: string; content: React.ReactNode }[]
  current: string
  onChange: (key: string) => void
}

export function Tabs({ tabs, current, onChange }: TabsProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 bg-white rounded-xl p-2 border border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              current === tab.key ? 'bg-primary text-white shadow' : 'text-slate-700 hover:bg-slate-100',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.key === current)?.content}</div>
    </div>
  )
}
