import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ products }) {
  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">En vedette</p>
          <h2 className="font-display font-semibold text-2xl text-ink-100">Dernières arrivées</h2>
        </div>
        <Link to="/products" className="btn-ghost text-sm">Voir tout →</Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-24 text-ink-600">
          <p className="text-4xl mb-4">📦</p>
          <p className="font-display text-lg">Aucun produit pour le moment</p>
          <p className="text-sm mt-2">Ajoutez des produits dans le panneau d'administration pour commencer.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 50} />)}
        </div>
      )}
    </section>
  );
}
