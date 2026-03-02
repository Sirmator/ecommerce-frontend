import { Link } from 'react-router-dom';

export default function EmptyCartCheckout() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-xl text-ink-400 mb-4">Votre panier est vide</p>
        <Link to="/products" className="btn-amber px-8 py-3 rounded-2xl">Acheter maintenant</Link>
      </div>
    </div>
  );
}
