import { Footer } from '@/components/layout/Footer'
import { MainNavbar } from '@/components/layout/MainNavbar'
import { ForClientsSection } from '@/components/marketing/ForClientsSection'
import { ForProvidersSection } from '@/components/marketing/ForProvidersSection'
import { Hero } from '@/components/marketing/Hero'
import { HowItWorks } from '@/components/marketing/HowItWorks'

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <ForClientsSection />
        <ForProvidersSection />
        <section className="py-6 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              MVP în dezvoltare – ne pregătim să lansăm BookEvent.ro pentru întreaga Românie.
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
