export default function ProductsFilter({ categories, search, categoryId, onSearchChange, onCategoryChange, onClear, hasFilters }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8 p-4 bg-ink-800/50 border border-white/[0.06] rounded-2xl">
      <div className="flex-1 min-w-[200px]">
        <input
          className="input text-sm"
          placeholder="Rechercher des produits…"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="input text-sm w-auto min-w-[180px]"
        value={categoryId}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      {hasFilters && (
        <button className="btn-ghost text-xs" onClick={onClear}>
          ✕ Effacer
        </button>
      )}
    </div>
  );
}
