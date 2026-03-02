export default function SignInForm({ form, set, loading, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Email</label>
          <input className="input" type="email" placeholder="vous@example.com" value={form.email} onChange={e => set('email', e.target.value)} required autoComplete="email" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider">Mot de passe</label>
          <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => set('password', e.target.value)} required autoComplete="current-password" />
        </div>
        <button type="submit" className="btn-amber w-full justify-center py-3.5 rounded-xl text-sm mt-6" disabled={loading}>
          {loading ? 'Connexion…' : 'Se connecter →'}
        </button>
      </form>

      <div className="mt-8 p-4 rounded-xl bg-ink-800/50 border border-white/[0.06] space-y-2">
        <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Comptes de démonstration</p>
        <div className="text-xs text-ink-600 space-y-1 font-mono">
          <p><span className="text-amber-500">Admin :</span> admin@shopnest.com / Admin1234!</p>
          <p><span className="text-ink-500">Client :</span> customer@example.com / Customer123!</p>
        </div>
      </div>
    </>
  );
}
