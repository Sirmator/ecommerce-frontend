export default function ShippingForm({ form, set, error }) {
  return (
    <div className="bg-ink-800 border border-white/[0.07] rounded-2xl p-8 space-y-6">
      <h2 className="font-display font-semibold text-lg text-ink-100">Informations d'expédition</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Nom complet *</label>
          <input className="input" placeholder="Jane Doe" value={form.customerName} onChange={e => set('customerName', e.target.value)} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Email *</label>
          <input className="input" type="email" placeholder="jane@example.com" value={form.customerEmail} onChange={e => set('customerEmail', e.target.value)} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Adresse de livraison</label>
        <textarea className="input resize-none" rows={3} placeholder="123 Main St, Ville, Pays" value={form.shippingAddress} onChange={e => set('shippingAddress', e.target.value)} />
      </div>

      {/* Payment placeholder */}
      <div className="border-t border-white/[0.06] pt-6">
        <h2 className="font-display font-semibold text-lg text-ink-100 mb-4">Paiement</h2>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ink-900/50 border border-white/[0.05] text-ink-500 text-sm">
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Intégration de paiement prête — mode démo, aucun frais.
        </div>
      </div>
    </div>
  );
}
