'use client'

import { useEffect, useMemo, useState } from 'react'
import { addMonths, eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AvailabilitySlot } from '@/lib/types'
import { useToast } from '@/components/ui/use-toast'

const statusCycle: Array<AvailabilitySlot['status']> = ['LIBER', 'REZERVAT', 'OPTIONAT']

interface ProviderCalendarProps {
  providerId: string
  editable?: boolean
}

export function ProviderCalendar({ providerId, editable = true }: ProviderCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [slots, setSlots] = useState<AvailabilitySlot[]>([])
  const { toast } = useToast()

  useEffect(() => {
    fetch(`/api/availability?providerId=${providerId}`)
      .then((res) => res.json())
      .then((data) => setSlots(data))
      .catch(() => toast({ title: 'Eroare la încărcarea disponibilității', variant: 'destructive' }))
  }, [providerId, toast])

  const days = useMemo(() => {
    const start = startOfMonth(currentMonth)
    const end = endOfMonth(currentMonth)
    return eachDayOfInterval({ start, end })
  }, [currentMonth])

  function getStatus(date: Date) {
    const iso = date.toISOString()
    return slots.find((slot) => slot.date.slice(0, 10) === iso.slice(0, 10))?.status || 'LIBER'
  }

  function handleToggle(date: Date) {
    if (!editable) return
    const iso = date.toISOString()
    setSlots((prev) => {
      const existing = prev.find((slot) => slot.date.slice(0, 10) === iso.slice(0, 10))
      const currentStatus = existing?.status || 'LIBER'
      const nextStatus = statusCycle[(statusCycle.indexOf(currentStatus) + 1) % statusCycle.length]
      const filtered = prev.filter((slot) => slot.date.slice(0, 10) !== iso.slice(0, 10))
      return [...filtered, { providerId, date: iso, status: nextStatus }]
    })
  }

  const legend = [
    { label: 'Liber', className: 'bg-emerald-100 text-emerald-700' },
    { label: 'Rezervat', className: 'bg-rose-100 text-rose-700' },
    { label: 'Opționat', className: 'bg-amber-100 text-amber-700' },
  ]

  async function handleSave() {
    await fetch('/api/availability', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ providerId, slots }),
    })
    toast({ title: 'Disponibilitatea a fost salvată' })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-x-3">
          <Button variant="outline" size="sm" onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}>
            Luna anterioară
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            Luna următoare
          </Button>
        </div>
        <div className="text-lg font-semibold">{format(currentMonth, 'LLLL yyyy')}</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'].map((d) => (
          <div key={d} className="text-center text-xs font-semibold text-slate-500">
            {d}
          </div>
        ))}
        {days.map((day) => {
          const status = getStatus(day)
          return (
            <button
              key={day.toISOString()}
              onClick={() => handleToggle(day)}
              className={cn(
                'h-20 rounded-xl border text-sm flex flex-col items-center justify-center',
                status === 'LIBER' && 'bg-white border-slate-200 text-slate-800',
                status === 'REZERVAT' && 'bg-rose-50 border-rose-200 text-rose-700',
                status === 'OPTIONAT' && 'bg-amber-50 border-amber-200 text-amber-700',
              )}
            >
              <span className="font-semibold">{format(day, 'd')}</span>
              <span className="text-xs">{status}</span>
            </button>
          )
        })}
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-700">
        {legend.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            <span className={cn('w-3 h-3 rounded-full', item.className)} />
            {item.label}
          </span>
        ))}
      </div>
      {editable && (
        <Button onClick={handleSave} className="mt-2">
          Salvează disponibilitatea
        </Button>
      )}
    </div>
  )
}
