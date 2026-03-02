import { useLoaderData, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { getProducts, getCategories } from '../services/api';
import ProductsFilter from '../components/ProductsFilter';
import ProductsGrid from '../components/ProductsGrid';

export async function productsLoader({ request }) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const categoryId = url.searchParams.get('categoryId') || '';

    const [products, categories] = await Promise.all([
      getProducts({ search, categoryId, active: true }),
      getCategories(),
    ]);

    return { products, categories, search, categoryId };
}

export default function ProductsPage() {
  const { products, categories } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const { add } = useCart();
  const [addingId, setAddingId] = useState(null);

  const search = searchParams.get('search') || '';
  const categoryId = searchParams.get('categoryId') || '';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value); else next.delete(key);
    setSearchParams(next);
  };

  const handleAdd = async (productId) => {
    setAddingId(productId);
    try { await add(productId, 1); } finally { setAddingId(null); }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-2">Catalogue</p>
          <h1 className="font-display font-bold text-4xl text-ink-50">Tous les produits</h1>
        </div>

        {/* Filters */}
        <ProductsFilter 
          categories={categories}
          search={search}
          categoryId={categoryId}
          onSearchChange={(value) => setFilter('search', value)}
          onCategoryChange={(value) => setFilter('categoryId', value)}
          onClear={() => setSearchParams({})}
          hasFilters={search || categoryId}
        />

        {/* Grid */}
        <ProductsGrid 
          products={products}
          addingId={addingId}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}
