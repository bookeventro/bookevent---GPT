'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '#cum-functioneaza', label: 'Cum funcționează' },
  { href: '#pentru-prestatori', label: 'Pentru prestatori' },
  { href: '#login', label: 'Login' },
]

export function MainNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900">
          BookEvent.ro
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Creează cont
          </Button>
        </div>
      </div>
    </header>
  )
}
