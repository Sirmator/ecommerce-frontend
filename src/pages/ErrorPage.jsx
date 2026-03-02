import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const is404 = error?.status === 404;

  return (
    <div className="min-h-screen bg-ink-950 flex items-center justify-center px-6 py-16 pt-32">
      <div className="w-full max-w-md">
        <div className="glass rounded-2xl p-8">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
          </div>

          {/* Status Code */}
          <h1 className="font-display font-bold text-5xl text-center text-ink-50 mb-3">
            {is404 ? '404' : 'Erreur'}
          </h1>

          {/* Title */}
          <p className="text-center text-lg font-semibold text-ink-200 mb-3">
            {is404 ? 'Page non trouvée' : 'Une erreur s\'est produite'}
          </p>

          {/* Description */}
          <p className="text-center text-ink-400 mb-8">
            {is404
              ? "La page que vous recherchez n'existe pas."
              : error?.statusText ||
                'Une erreur inattendue s\'est produite. Veuillez réessayer.'}
          </p>

          {/* Error Details (Development Only) */}
          {error?.data && (
            <details className="mb-6 p-4 rounded-xl bg-ink-800/60 border border-rose-500/20">
              <summary className="cursor-pointer font-semibold text-rose-400 text-sm">
                Détails de l'erreur
              </summary>
              <pre className="mt-3 text-xs text-ink-400 overflow-auto max-h-48">
                {error.data}
              </pre>
            </details>
          )}

          {/* Back Button */}
          <Link
            to="/"
            className="btn-amber w-full justify-center py-3.5 rounded-xl"
          >
            Retour à l'accueil →
          </Link>
        </div>
      </div>
    </div>
  );
}
