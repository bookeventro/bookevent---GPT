'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useToastStore } from './use-toast'

export function Toaster() {
  const { toasts, removeToast } = useToastStore()

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), toast.duration ?? 3500),
    )
    return () => {
      timers.forEach((t) => clearTimeout(t))
    }
  }, [toasts, removeToast])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`min-w-[280px] rounded-xl border px-4 py-3 shadow-lg bg-white border-slate-200 ${toast.variant === 'destructive' ? 'border-red-200 bg-red-50' : ''}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              {toast.title && <p className="text-sm font-semibold text-slate-900">{toast.title}</p>}
              {toast.description && <p className="text-sm text-slate-600">{toast.description}</p>}
            </div>
            <button className="text-slate-400 hover:text-slate-600" onClick={() => removeToast(toast.id)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
