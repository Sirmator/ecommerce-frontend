import { Link } from 'react-router-dom';

export default function CategoriesSection({ categories }) {
  if (categories.length === 0) return null;

  return (
    <section>
      <h2 className="font-display font-semibold text-2xl text-ink-100 mb-6">Parcourir par catégorie</h2>
      <div className="flex gap-3 flex-wrap">
        {categories.map(c => (
          <Link
            key={c.id}
            to={`/products?categoryId=${c.id}`}
            className="px-5 py-2.5 rounded-xl bg-ink-800 border border-white/[0.07] text-sm font-medium text-ink-300 hover:text-amber-400 hover:border-amber-500/30 hover:bg-ink-700 transition-all duration-150"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
