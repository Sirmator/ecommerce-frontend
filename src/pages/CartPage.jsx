import { useCart } from '../contexts/CartContext';
import { getCart } from '../services/api';
import EmptyCart from '../components/EmptyCart';
import CartItemsList from '../components/CartItemsList';
import OrderSummary from '../components/OrderSummary';

export async function cartLoader() {
    const cart = await getCart();
    return { cart };
}

export default function CartPage() {
  const { cart, loading, update, remove, clear, total, itemCount } = useCart();
  const items = cart?.items || [];

  if (loading) return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-ink-700 border-t-amber-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">Votre sélection</p>
          <div className="flex items-end justify-between">
            <h1 className="font-display font-bold text-4xl text-ink-50">Panier</h1>
            {items.length > 0 && (
              <button className="btn-ghost text-xs text-rose-400 hover:text-rose-300" onClick={clear}>Tout effacer</button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* Items */}
            <CartItemsList items={items} update={update} remove={remove} />

            {/* Summary */}
            <OrderSummary total={total} itemCount={itemCount} />
          </div>
        )}
      </div>
    </div>
  );
}
