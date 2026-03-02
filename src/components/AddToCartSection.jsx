export default function AddToCartSection({ product, qty, setQty, adding, added, onAdd }) {
  if (product.stock === 0) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-0 bg-ink-800 border border-white/[0.08] rounded-xl overflow-hidden">
        <button
          className="w-10 h-10 flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-white/[0.06] transition-colors text-lg font-light"
          onClick={() => setQty(q => Math.max(1, q - 1))}
        >−</button>
        <span className="w-10 text-center text-sm font-semibold text-ink-100">{qty}</span>
        <button
          className="w-10 h-10 flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-white/[0.06] transition-colors text-lg font-light"
          onClick={() => setQty(q => Math.min(product.stock, q + 1))}
        >+</button>
      </div>
      <button
        className={`flex-1 btn-amber py-3 rounded-xl text-sm justify-center ${added ? 'bg-jade-500 hover:bg-jade-500 shadow-none' : ''}`}
        onClick={onAdd}
        disabled={adding}
      >
        {added ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Ajouté au panier !
          </>
        ) : adding ? 'Ajout…' : 'Ajouter au panier'}
      </button>
    </div>
  );
}
