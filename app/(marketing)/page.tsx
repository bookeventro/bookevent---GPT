// app/(marketing)/page.tsx
import Navbar from '@/components/marketing/Navbar';
import HeroSection from '@/components/marketing/HeroSection';
import CategoriesSection from '@/components/marketing/CategoriesSection';
import RecommendedSection from '@/components/marketing/RecommendedSection';
import Footer from '@/components/marketing/Footer';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Neon gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.55),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.75),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.7),_transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/95 to-slate-950" />
      </div>

      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-24 lg:px-8 lg:pt-32">
        <HeroSection />
        <CategoriesSection />
        <RecommendedSection />
      </main>

      <Footer />
    </div>
  );
}
