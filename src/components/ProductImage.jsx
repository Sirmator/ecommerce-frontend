export default function ProductImage({ product }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-ink-800 border border-white/[0.07] aspect-square">
      {product.imageUrl ? (
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-8xl opacity-10">🏷️</div>
      )}
    </div>
  );
}
