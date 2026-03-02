import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../services/api';
import { useCart } from '../contexts/CartContext';
import EmptyCartCheckout from '../components/EmptyCartCheckout';
import ShippingForm from '../components/ShippingForm';
import CheckoutSummary from '../components/CheckoutSummary';
import ErrorAlert from '../components/ErrorAlert';

export default function CheckoutPage() {
  const { cart, total, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ customerName: '', customerEmail: '', shippingAddress: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const items = cart?.items || [];
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    if (!form.customerName || !form.customerEmail) { setError('Name and email are required.'); return; }
    setSubmitting(true); setError('');
    try {
      await createOrder({ ...form, items: items.map(i => ({ productId: i.productId, quantity: i.quantity })) });
      await clear();
      navigate('/orders');
    } catch (e) { setError(e.message); } finally { setSubmitting(false); }
  };

  return (
    items.length === 0 ?
      <EmptyCartCheckout />
      :
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">Dernière étape</p>
            <h1 className="font-display font-bold text-4xl text-ink-50">Paiement</h1>
          </div>

          <ErrorAlert message={error} />

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* Form */}
            <ShippingForm form={form} set={set} error={error} />

            {/* Summary */}
            <CheckoutSummary items={items} total={total} submitting={submitting} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
  );
}
