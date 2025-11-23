import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg pt-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-primary">MVP BookEvent.ro</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Platforma care organizează evenimentele în locul tău.
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            BookEvent.ro conectează rapid clienții cu formații, DJ, fotografi, videografi și furnizori de top din România –
            transparent, simplu și profesionist.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Caută prestatori</Button>
            <Button variant="outline" size="lg">
              Înscrie-te ca prestator
            </Button>
          </div>
          <p className="text-sm text-slate-600">Creat de un om din industrie, pentru toți cei din industria evenimentelor.</p>
        </div>
        <div className="bg-white/80 border border-slate-200 rounded-2xl p-8 shadow-lg space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">De ce BookEvent.ro?</h3>
          <ul className="space-y-3 text-slate-700">
            <li>• Proces clar de cerere ofertă, cu răspunsuri rapide</li>
            <li>• Prestatori verificați și profilați pe județe</li>
            <li>• Calendar de disponibilitate centralizat</li>
            <li>• Comunicare și documente într-un singur loc</li>
          </ul>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-full">
            MVP în dezvoltare – pregătim lansarea națională
          </div>
        </div>
      </div>
    </section>
  )
}
