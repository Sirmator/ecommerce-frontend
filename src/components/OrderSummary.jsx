import { Link } from 'react-router-dom';

export default function OrderSummary({ total, itemCount }) {
  return (
    <div className="bg-ink-800 border border-white/[0.07] rounded-2xl p-6 space-y-5 sticky top-24">
      <h2 className="font-display font-semibold text-lg text-ink-100">Résumé de la commande</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-ink-400">
          <span>Sous-total ({itemCount} article{itemCount !== 1 ? 's' : ''})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-ink-400">
          <span>Livraison</span>
          <span className="text-jade-400 font-medium">Gratuit</span>
        </div>
        <div className="flex justify-between text-ink-400">
          <span>Taxe</span>
          <span>Calculée à la caisse</span>
        </div>
      </div>
      <div className="border-t border-white/[0.07] pt-4 flex justify-between items-baseline">
        <span className="font-semibold text-ink-100">Total</span>
        <span className="font-mono font-bold text-2xl text-amber-400">${total.toFixed(2)}</span>
      </div>
      <Link to="/checkout" className="btn-amber w-full justify-center py-3.5 rounded-xl text-sm block text-center">
        Procéder à la caisse →
      </Link>
      <Link to="/products" className="btn-ghost w-full justify-center text-xs block text-center">
        Continuer vos achats
      </Link>
    </div>
  );
}
