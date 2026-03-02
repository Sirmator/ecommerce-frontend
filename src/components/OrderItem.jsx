const STATUS_OPTIONS = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

const getStatusLabel = (status) => {
  switch (status) {
    case 'pending': return 'En attente';
    case 'confirmed': return 'Confirmée';
    case 'shipped': return 'Expédiée';
    case 'delivered': return 'Livrée';
    case 'cancelled': return 'Annulée';
    default: return status;
  }
};

export default function OrderItem({ order, isExpanded, onToggle, onStatusChange }) {
  return (
    <div className="bg-ink-800 border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-200">
      {/* Row */}
      <button
        className="w-full flex items-center gap-4 p-5 hover:bg-white/[0.02] transition-colors text-left"
        onClick={() => onToggle(order.id)}
      >
        <div className="w-10 h-10 rounded-xl bg-ink-900 border border-white/[0.06] flex items-center justify-center shrink-0">
          <span className="font-mono text-xs text-ink-500">#{order.id}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm text-ink-100 truncate">{order.customerName}</p>
          <p className="text-xs text-ink-500 mt-0.5 truncate">{order.customerEmail}</p>
        </div>
        <div className="hidden sm:block text-xs text-ink-600">
          {new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="font-mono font-semibold text-amber-400 text-sm">
          ${Number(order.total).toFixed(2)}
        </div>
        <span className={`badge badge-${order.status} hidden sm:inline-flex`}>{order.status}</span>
        <svg
          className={`w-4 h-4 text-ink-600 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Expanded */}
      {isExpanded && (
        <div className="border-t border-white/[0.06] p-5 bg-ink-900/30">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-3">Articles</p>
              <div className="space-y-2">
                {order.items?.map(i => (
                  <div key={i.id} className="flex justify-between text-sm">
                    <span className="text-ink-300">{i.product?.name} <span className="text-ink-600">×{i.quantity}</span></span>
                    <span className="font-mono text-ink-400">${(Number(i.unitPrice) * i.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              {order.shippingAddress && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1">Livrer à</p>
                  <p className="text-sm text-ink-400">{order.shippingAddress}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-3">Mettre à jour le statut</p>
              <select
                className="input text-sm"
                value={order.status}
                onChange={e => onStatusChange(order.id, e.target.value)}
              >
                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{getStatusLabel(s)}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
