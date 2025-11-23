import { Button } from '@/components/ui/button'

export function ForClientsSection() {
  return (
    <section className="py-16 bg-slate-50" id="pentru-clienti">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-8">
        <div className="card p-6 space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Pentru clienți</h3>
          <ul className="text-slate-700 space-y-2">
            <li>• Timp salvat cu o singură cerere către toți prestatorii relevanți</li>
            <li>• Comparație clară a ofertelor, în același format</li>
            <li>• Feedback real de la alți clienți</li>
            <li>• Comunicare și documente într-un singur loc</li>
          </ul>
          <Button className="mt-2">Începe o cerere de ofertă</Button>
        </div>
        <div className="card p-6 space-y-4" id="pentru-prestatori">
          <h3 className="text-xl font-bold text-slate-900">Pentru prestatori</h3>
          <ul className="text-slate-700 space-y-2">
            <li>• Leaduri calificate, cu detalii clare</li>
            <li>• Calendar inteligent cu status LIBER / REZERVAT / OPTIONAT</li>
            <li>• Scoring de industrie (în curând)</li>
            <li>• Profil profesionist care inspiră încredere</li>
          </ul>
          <Button variant="secondary" className="mt-2">
            Creează profil de prestator
          </Button>
        </div>
      </div>
    </section>
  )
}
