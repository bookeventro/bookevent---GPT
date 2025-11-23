export function ForProvidersSection() {
  return (
    <section className="py-10 bg-white" id="pentru-prestatori">
      <div className="mx-auto max-w-6xl px-6 card grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3">
          <p className="text-sm font-semibold text-primary">Pentru prestatori</p>
          <h3 className="text-2xl font-bold text-slate-900">Construim un canal de leaduri predictibil</h3>
          <p className="text-slate-700 leading-relaxed">
            Primești cereri de ofertă bine structurate, poți marca disponibilitatea în calendar și gestionezi statusul fiecărui
            lead dintr-un singur tablou de bord.
          </p>
        </div>
        <div className="space-y-2 text-slate-700">
          <p>• Profil public cu galerii și descrieri clare</p>
          <p>• Notificări pentru cereri noi</p>
          <p>• Note interne și marcaj de favorite</p>
          <p>• Export viitor către contracte și facturi (roadmap)</p>
        </div>
      </div>
    </section>
  )
}
