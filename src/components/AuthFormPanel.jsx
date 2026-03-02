import { Link } from 'react-router-dom';

export default function AuthFormPanel({ heading, subtext, error, children, altLink }) {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-10">
          <h1 className="font-display font-bold text-3xl text-ink-50 mb-2">{heading}</h1>
          <p className="text-ink-500 text-sm">{subtext}</p>
          {altLink && (
            <p className="text-ink-500 text-sm">
              {altLink.text} <Link to={altLink.href} className="text-amber-400 hover:text-amber-300 font-medium transition-colors">{altLink.linkText}</Link>
            </p>
          )}
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            {error}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
