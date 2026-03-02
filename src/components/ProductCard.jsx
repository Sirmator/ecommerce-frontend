import { Link } from 'react-router-dom';

export default function ProductCard({ product, delay = 0 }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative flex flex-col bg-ink-800 border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-ink-700">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">🏷️</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        {product.category && (
          <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">
            {product.category.name}
          </span>
        )}
        <h3 className="font-display font-semibold text-ink-100 text-base leading-snug line-clamp-2 group-hover:text-amber-100 transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-ink-500 text-xs leading-relaxed line-clamp-2">{product.description}</p>
        )}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/[0.06]">
          <span className="font-mono font-medium text-amber-400 text-base">
            ${Number(product.price).toFixed(2)}
          </span>
          <span className={`text-xs font-medium ${product.stock > 0 ? 'text-jade-400' : 'text-rose-400'}`}>
            {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
          </span>
        </div>
      </div>
    </Link>
  );
}
