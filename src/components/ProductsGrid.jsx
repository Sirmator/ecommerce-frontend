import { Link } from 'react-router-dom';

export default function ProductsGrid({ products, addingId, onAdd }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-24 text-ink-600">
        <p className="text-4xl mb-4">🔍</p>
        <p className="font-display text-xl text-ink-400">Aucun produit trouvé</p>
        <p className="text-sm mt-2">Essayez d'ajuster vos filtres.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs text-ink-600 mb-5">{products.length} produit{products.length !== 1 ? 's' : ''}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map(p => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
            className="group flex flex-col bg-ink-800 border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
          >
            <div className="aspect-[4/3] overflow-hidden bg-ink-700">
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">🏷️</div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              {p.category && <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-500">{p.category.name}</span>}
              <h3 className="font-display font-semibold text-sm text-ink-100 line-clamp-2 group-hover:text-amber-100 transition-colors leading-snug">{p.name}</h3>
              {p.description && <p className="text-ink-500 text-xs line-clamp-2 leading-relaxed">{p.description}</p>}
              <div className="mt-auto pt-3 flex items-center justify-between border-t border-white/[0.06]">
                <span className="font-mono font-medium text-amber-400">${Number(p.price).toFixed(2)}</span>
                <button
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    p.stock === 0 ? 'bg-ink-700 text-ink-600 cursor-not-allowed' :
                    addingId === p.id ? 'bg-amber-500/20 text-amber-400 cursor-wait' :
                    'bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-ink-950'
                  }`}
                  disabled={p.stock === 0 || addingId === p.id}
                  onClick={e => { e.preventDefault(); onAdd(p.id); }}
                >
                  {addingId === p.id ? '…' : p.stock > 0 ? '+ Ajouter' : 'Rupture de stock'}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
