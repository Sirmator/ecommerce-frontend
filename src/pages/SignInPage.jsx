import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthDecorativePanel from '../components/AuthDecorativePanel';
import AuthFormPanel from '../components/AuthFormPanel';
import SignInForm from '../components/SignInForm';

export default function SignInPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setError(''); setLoading(true);
    try { await signIn(form.email, form.password); navigate(from, { replace: true }); }
    catch (err) { setError(err.message || 'Invalid credentials'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen pt-16 flex">
      <AuthDecorativePanel 
        title="Bienvenue."
        description="Connectez-vous pour accéder à vos commandes, articles enregistrés et recommandations personnalisées."
        contentType="categories"
      />

      <AuthFormPanel
        heading="Se connecter"
        subtext="Vous n'avez pas de compte ?"
        altLink={{ text: "Vous n'avez pas de compte ?", href: "/sign-up", linkText: "S'inscrire" }}
        error={error}
      >
        <SignInForm 
          form={form} 
          set={set} 
          loading={loading}
          onSubmit={handleSubmit}
        />
      </AuthFormPanel>
    </div>
  );
}
