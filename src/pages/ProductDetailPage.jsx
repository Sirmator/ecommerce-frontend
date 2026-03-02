import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { getProduct } from '../services/api';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import AddToCartSection from '../components/AddToCartSection';
import TrustBadges from '../components/TrustBadges';

export async function productDetailLoader({ params }) {
    const product = await getProduct(params.id);
    return { product };
}

export default function ProductDetailPage() {
  const { product } = useLoaderData();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const handleAdd = async () => {
    setAdding(true);
    try {
      await add(product.id, qty);
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    } finally { setAdding(false); }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/products" className="btn-ghost text-xs mb-8 inline-flex">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Retour aux produits
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <ProductImage product={product} />

          {/* Details */}
          <div className="flex flex-col gap-6 py-4">
            <ProductInfo product={product} />

            {/* Qty + Add */}
            <AddToCartSection 
              product={product} 
              qty={qty} 
              setQty={setQty} 
              adding={adding} 
              added={added} 
              onAdd={handleAdd}
            />

            {/* Trust badges */}
            <TrustBadges />
          </div>
        </div>
      </div>
    </div>
  );
}
