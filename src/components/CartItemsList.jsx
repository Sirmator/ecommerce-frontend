export default function CartItemsList({ items, update, remove }) {
  return (
    <div className="bg-ink-800 border border-white/[0.07] rounded-2xl overflow-hidden">
      {items.map((item, idx) => (
        <div key={item.id} className={`flex items-center gap-4 p-5 ${idx !== items.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-ink-700 shrink-0">
            {item.product?.imageUrl ? (
              <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xl opacity-30">🏷️</div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-ink-100 truncate">{item.product?.name}</p>
            <p className="text-xs text-ink-500 mt-0.5">Unité : ${Number(item.product?.price || 0).toFixed(2)}</p>
          </div>
          {/* Qty control */}
          <div className="flex items-center gap-0 bg-ink-900 border border-white/[0.08] rounded-lg overflow-hidden">
            <button
              className="w-8 h-8 flex items-center justify-center text-ink-500 hover:text-ink-100 hover:bg-white/[0.06] transition-colors"
              onClick={() => item.quantity > 1 ? update(item.id, item.quantity - 1) : remove(item.id)}
            >−</button>
            <span className="w-8 text-center text-xs font-semibold text-ink-200">{item.quantity}</span>
            <button
              className="w-8 h-8 flex items-center justify-center text-ink-500 hover:text-ink-100 hover:bg-white/[0.06] transition-colors"
              onClick={() => update(item.id, item.quantity + 1)}
            >+</button>
          </div>
          <div className="text-right min-w-[64px]">
            <p className="font-mono font-semibold text-amber-400 text-sm">
              ${(Number(item.product?.price || 0) * item.quantity).toFixed(2)}
            </p>
          </div>
          <button
            className="text-ink-600 hover:text-rose-400 transition-colors ml-1"
            onClick={() => remove(item.id)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
