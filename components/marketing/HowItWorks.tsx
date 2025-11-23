import { Calendar, Inbox, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Sparkles,
    title: 'Completezi câteva detalii despre eveniment',
    description: 'Ne spui tipul evenimentului, data, orașul și așteptările tale.',
  },
  {
    icon: Inbox,
    title: 'Primești oferte de la prestatori verificați',
    description: 'Trimitem cererea către prestatori disponibili și primești oferte clare.',
  },
  {
    icon: Calendar,
    title: 'Alegi varianta potrivită și confirmi rezervarea',
    description: 'Compari, setezi preferințe și confirmi direct din platformă.',
  },
]

export function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold text-primary">Proces simplu</p>
          <h2 className="text-3xl font-bold text-slate-900">Cum funcționează</h2>
          <p className="text-slate-600">3 pași clari pentru clienți</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="card p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
