import { Link } from 'react-router-dom';

export default function CheckoutSummary({ items, total, submitting, handleSubmit }) {
  return (
    <div className="bg-ink-800 border border-white/[0.07] rounded-2xl p-6 space-y-5 sticky top-24">
      <h2 className="font-display font-semibold text-lg text-ink-100">Résumé</h2>
      <div className="space-y-3">
        {items.map(i => (
          <div key={i.id} className="flex justify-between items-center gap-3 text-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-ink-500 shrink-0">×{i.quantity}</span>
              <span className="text-ink-300 truncate">{i.product?.name}</span>
            </div>
            <span className="font-mono text-ink-400 shrink-0">${(Number(i.product?.price || 0) * i.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.06] pt-4 flex justify-between items-baseline">
        <span className="font-semibold text-ink-100">Total</span>
        <span className="font-mono font-bold text-2xl text-amber-400">${total.toFixed(2)}</span>
      </div>
      <button
        className="btn-amber w-full justify-center py-3.5 rounded-xl text-sm"
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? 'Passage de la commande…' : 'Passer la commande →'}
      </button>
      <Link to="/cart" className="btn-ghost w-full justify-center text-xs block text-center">← Retour au panier</Link>
    </div>
  );
}
