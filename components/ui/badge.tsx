import * as React from 'react'
import { cn } from '@/lib/utils'

const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700', className)}>
      {children}
    </span>
  )
}

export { Badge }
