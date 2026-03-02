export default function AuthDecorativePanel({ title, description, contentType = 'categories' }) {
  const categories = ['Electronics', 'Clothing', 'Books'];
  const features = [
    '✓  Livraison gratuite et rapide sur toutes les commandes',
    '✓  Retours sans problème de 30 jours',
    '✓  Offres exclusives pour les membres',
  ];

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-ink-900 border-r border-white/[0.06] items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/[0.07] rounded-full blur-3xl" />
      <div className="relative text-center px-12">
        <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-glow-amber">
          <span className="text-ink-950 text-2xl font-bold font-display">S</span>
        </div>
        <h2 className="font-display font-bold text-3xl text-ink-50 mb-4">{title}</h2>
        <p className="text-ink-500 leading-relaxed">{description}</p>
        <div className={contentType === 'categories' ? 'mt-10 grid grid-cols-3 gap-4' : 'mt-10 space-y-3'}>
          {(contentType === 'categories' ? categories : features).map(item => (
            contentType === 'categories' ? (
              <div key={item} className="px-3 py-2 rounded-xl bg-ink-800/60 border border-white/[0.06] text-xs text-ink-500 font-medium">{item}</div>
            ) : (
              <p key={item} className="text-sm text-ink-500">{item}</p>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
