import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../lib/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    const { data, error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      setMessage(error.message || 'Unable to sign in. Please try again.');
      return;
    }

    if (data.session) {
      navigate('/admin');
      return;
    }

    setMessage('Check your email for a sign-in link or verify your account.');
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 bg-[#f7fbf9]">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-[#e6f4ef] p-10">
        <h1 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#004d35] mb-4">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Log in with your Care Clinic account to view your dashboard, update your password, or access admin tools.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="mario@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your password"
            />
          </div>

          {message && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{message}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#004d35] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#003a29] transition-colors disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* <p className="text-center text-sm text-gray-500 mt-6">
          New here?{' '}
          <Link to="/signup" className="text-[#c9a84c] font-semibold hover:text-[#a78b3f]">
            Create an account
          </Link>
        </p> */}
      </div>
    </section>
  );
}
