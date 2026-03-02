import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-500/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-amber-600/[0.06] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          Nouvelles arrivées chaque semaine
        </div>
        <h1 className="font-display font-bold text-5xl md:text-7xl text-ink-50 leading-[1.05] tracking-tight mb-6 animate-fade-up">
          Découvrez les produits
          <br />
          <span className="text-gradient italic">qui méritent d'être gardés</span>
        </h1>
        <p className="text-ink-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 animate-fade-up animate-delay-100">
          Collections sélectionnées de produits premium, livrés à votre porte avec soin.
        </p>
        <div className="flex items-center justify-center gap-3 animate-fade-up animate-delay-200">
          <Link to="/products" className="btn-amber px-7 py-3 text-sm rounded-2xl">
            Acheter maintenant
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link to="/sign-up" className="btn-outline px-7 py-3 text-sm rounded-2xl">Créer un compte</Link>
        </div>
      </div>
    </section>
  );
}
