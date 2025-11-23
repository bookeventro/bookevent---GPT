export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
        <div>BookEvent.ro © {new Date().getFullYear()}</div>
        <div className="flex gap-4">
          <span>Termeni & condiții</span>
          <span>Confidențialitate</span>
        </div>
      </div>
    </footer>
  )
}
