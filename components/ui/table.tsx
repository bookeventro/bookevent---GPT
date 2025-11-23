import * as React from 'react'
import { cn } from '@/lib/utils'

const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <table className={cn('w-full text-sm text-left border-collapse', className)} {...props} />
)

const TableHeader = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn('text-xs uppercase text-slate-500 bg-slate-50', className)} {...props} />
)

const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn('divide-y divide-slate-100', className)} {...props} />
)

const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn('hover:bg-slate-50 transition-colors', className)} {...props} />
)

const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={cn('px-4 py-3 font-semibold', className)} {...props} />
)

const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn('px-4 py-3 align-top', className)} {...props} />
)

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
