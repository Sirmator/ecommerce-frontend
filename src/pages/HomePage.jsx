import { useLoaderData } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';

export async function homeLoader() {
    const [products, categories] = await Promise.all([
      getProducts({ active: true }),
      getCategories(),
    ]);
    return {
      products: products.slice(0, 8),
      categories,
    };
}

export default function HomePage() {
  const { products, categories } = useLoaderData();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Stats bar */}
      <StatsBar />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Categories */}
        <CategoriesSection categories={categories} />

        {/* Featured Products */}
        <FeaturedProducts products={products} />
      </div>
    </div>
  );
}
