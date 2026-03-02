export default function ProductInfo({ product }) {
  return (
    <div>
      {product.category && (
        <span className="text-xs font-bold tracking-widest uppercase text-amber-500">{product.category.name}</span>
      )}
      <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-50 leading-tight mt-3 mb-6">{product.name}</h1>

      {product.description && (
        <p className="text-ink-400 text-base leading-relaxed mb-6">{product.description}</p>
      )}

      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-mono font-bold text-4xl text-amber-400">${Number(product.price).toFixed(2)}</span>
      </div>

      {/* Stock indicator */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-jade-400' : 'bg-rose-400'}`} />
        <span className={`text-sm font-medium ${product.stock > 0 ? 'text-jade-400' : 'text-rose-400'}`}>
          {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
        </span>
      </div>
    </div>
  );
}
