import OrderItem from './OrderItem';

export default function OrdersList({ orders, expandedId, onToggle, onStatusChange }) {
  return (
    <div className="space-y-3">
      {orders.map(order => (
        <OrderItem
          key={order.id}
          order={order}
          isExpanded={expandedId === order.id}
          onToggle={onToggle}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
