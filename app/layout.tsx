import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'BookEvent.ro',
  description: 'Platformă de booking pentru prestatori de evenimente din România',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className="bg-slate-50">
      <body className={cn('min-h-screen antialiased text-slate-900 bg-slate-50')}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
