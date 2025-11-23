// components/marketing/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-wrap gap-2">
          <span>© {new Date().getFullYear()} BookEvent.ro – MVP.</span>
          <span>Creat de un om din industrie, pentru industrie.</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="hover:text-sky-300">
            Cum funcționează
          </a>
          <a href="#" className="hover:text-sky-300">
            Termeni și condiții
          </a>
          <a href="#" className="hover:text-sky-300">
            Politica de confidențialitate
          </a>
        </div>
      </div>
    </footer>
  );
}
