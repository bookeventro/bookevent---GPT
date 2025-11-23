import { notFound } from 'next/navigation'
import { ProviderCalendar } from '@/components/provider/ProviderCalendar'
import { getProviderBySlug } from '@/lib/db/fakeDb'
import { formatMoney } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { RequestForm } from './request-form'

export default async function ProviderPublicPage({ params }: { params: { slug: string } }) {
  const provider = await getProviderBySlug(params.slug)
  if (!provider) return notFound()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-12 space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary">{provider.categorie}</p>
          <h1 className="text-3xl font-bold text-slate-900">{provider.nume}</h1>
          <p className="text-slate-600">
            {provider.judet} · {provider.localitate}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-700">
              {provider.rating ? `${provider.rating} / 5` : 'Fără review-uri încă'}
            </span>
            <Badge className="bg-primary/10 text-primary">Profil public</Badge>
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">Trimite cerere de ofertă</button>
              </DialogTrigger>
              <DialogContent>
                <RequestForm providerId={provider.id} />
              </DialogContent>
            </Dialog>
            <a href="#disponibilitate" className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold">
              Vezi disponibilitatea
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10 space-y-10">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Despre</h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-line">{provider.descriereDetaliata}</p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">Servicii & interval de preț</h3>
          <p className="text-slate-700">
            Preț de pornire de la <span className="font-semibold">{formatMoney(provider.pretStart)}</span>
          </p>
          {provider.intervalPret && (
            <p className="text-slate-700">
              De la {formatMoney(provider.intervalPret.min)} până la {formatMoney(provider.intervalPret.max)} (orientativ)
            </p>
          )}
        </section>

        <section id="disponibilitate" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Calendar disponibilitate</h3>
            <span className="text-sm text-slate-600">Vizualizare pentru următoarele luni</span>
          </div>
          <ProviderCalendar providerId={provider.id} editable={false} />
        </section>

        {provider.galleryUrls.length > 0 && (
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">Galerie</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {provider.galleryUrls.map((url) => (
                <img key={url} src={url} alt={provider.nume} className="rounded-lg object-cover h-32 w-full" />
              ))}
            </div>
          </section>
        )}

        <section className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
          <p className="text-slate-700">
            Trimite o cerere de ofertă prin platformă pentru a primi detalii și disponibilitate. Datele de contact sunt partajate
            după acceptare.
          </p>
        </section>
      </div>
    </div>
  )
}
