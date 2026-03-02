export default function SignUpForm({ form, set, loading, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Prénom</label>
            <input className="input" placeholder="Jane" value={form.firstName} onChange={e => set('firstName', e.target.value)} required autoComplete="given-name" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Nom</label>
            <input className="input" placeholder="Doe" value={form.lastName} onChange={e => set('lastName', e.target.value)} required autoComplete="family-name" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Email</label>
          <input className="input" type="email" placeholder="vous@example.com" value={form.email} onChange={e => set('email', e.target.value)} required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Mot de passe <span className="text-ink-600 normal-case tracking-normal font-normal">(min. 6 caractères)</span></label>
          <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => set('password', e.target.value)} required autoComplete="new-password" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Confirmer le mot de passe</label>
          <input className="input" type="password" placeholder="••••••••" value={form.confirm} onChange={e => set('confirm', e.target.value)} required autoComplete="new-password" />
        </div>
        <button type="submit" className="btn-amber w-full justify-center py-3.5 rounded-xl text-sm mt-2" disabled={loading}>
          {loading ? 'Création du compte…' : 'Créer un compte →'}
        </button>
      </form>

      <p className="text-xs text-ink-600 text-center mt-6">
        En créant un compte, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité.
      </p>
    </>
  );
}
