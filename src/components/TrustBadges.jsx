export default function TrustBadges() {
  const badges = [
    { icon: '🚚', text: 'Livraison gratuite' },
    { icon: '↩️', text: 'Retours de 30 jours' },
    { icon: '🔒', text: 'Paiement sécurisé' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {badges.map(b => (
        <div key={b.text} className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-ink-800/60 border border-white/[0.05] text-center">
          <span className="text-lg">{b.icon}</span>
          <span className="text-[11px] text-ink-500 font-medium">{b.text}</span>
        </div>
      ))}
    </div>
  );
}
