import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthDecorativePanel from '../components/AuthDecorativePanel';
import AuthFormPanel from '../components/AuthFormPanel';
import SignUpForm from '../components/SignUpForm';

export default function SignUpPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async () => {
    setError('');
    if (form.password !== form.confirm) { setError('Les mots de passe ne correspondent pas'); return; }
    if (form.password.length < 6) { setError('Le mot de passe doit contenir au moins 6 caractères'); return; }
    setLoading(true);
    try { await signUp({ firstName: form.firstName, lastName: form.lastName, email: form.email, password: form.password }); navigate('/'); }
    catch (err) { setError(err.message || 'Sign up failed'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen pt-16 flex">
      <AuthDecorativePanel 
        title="Rejoignez ShopNest."
        description="Créez votre compte gratuit et commencez à découvrir les produits premium sélectionnés rien que pour vous."
        contentType="features"
      />

      <AuthFormPanel
        heading="Créer un compte"
        subtext="Vous en avez déjà un ?"
        altLink={{ text: "Vous en avez déjà un ?", href: "/sign-in", linkText: "Se connecter" }}
        error={error}
      >
        <SignUpForm 
          form={form} 
          set={set} 
          loading={loading}
          onSubmit={handleSubmit}
        />
      </AuthFormPanel>
    </div>
  );
}
