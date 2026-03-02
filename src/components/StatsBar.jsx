export default function StatsBar() {
  const stats = [
    { value: '12+', label: 'Produits' },
    { value: '5', label: 'Catégories' },
    { value: 'Gratuit', label: 'Livraison' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="border-y border-white/[0.06] bg-ink-900/50 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <div className="font-display font-bold text-2xl text-amber-400">{s.value}</div>
            <div className="text-ink-500 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
