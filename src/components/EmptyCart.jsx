import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className="text-center py-32">
      <div className="w-20 h-20 rounded-2xl bg-ink-800 border border-white/[0.07] flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-ink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </div>
      <h2 className="font-display text-2xl text-ink-400 mb-3">Votre panier est vide</h2>
      <p className="text-ink-600 text-sm mb-8">Parcourez notre collection et ajoutez des articles pour commencer.</p>
      <Link to="/products" className="btn-amber px-8 py-3 rounded-2xl">Parcourir les produits</Link>
    </div>
  );
}
