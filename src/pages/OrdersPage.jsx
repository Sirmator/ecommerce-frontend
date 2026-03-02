import { useLoaderData, useRevalidator } from 'react-router-dom';
import { useState } from 'react';
import { updateOrderStatus, getOrders } from '../services/api';
import EmptyOrders from '../components/EmptyOrders';
import OrdersList from '../components/OrdersList';

export async function ordersLoader() {
    const orders = await getOrders();
    return { orders };
}

export default function OrdersPage() {
  const { orders } = useLoaderData();
  const [expanded, setExpanded] = useState(null);
  const revalidator = useRevalidator();

  const handleStatus = async (id, status) => {
    await updateOrderStatus(id, status);
    revalidator.revalidate();
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">Historique</p>
          <h1 className="font-display font-bold text-4xl text-ink-50">Commandes</h1>
        </div>

        {orders.length === 0 ? (
          <EmptyOrders />
        ) : (
          <OrdersList 
            orders={orders} 
            expandedId={expanded}
            onToggle={(id) => setExpanded(expanded === id ? null : id)}
            onStatusChange={handleStatus}
          />
        )}
      </div>
    </div>
  );
}
