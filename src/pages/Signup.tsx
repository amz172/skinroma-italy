import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../lib/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    const { data, error } = await signUp(email, password);
    setLoading(false);

    if (error) {
      setMessage(error.message || 'Unable to create account. Please try again.');
      return;
    }

    if (data.user) {
      setMessage('Account created successfully. You can now log in.');
      navigate('/login');
      return;
    }

    setMessage('A confirmation email has been sent. Please check your inbox.');
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 bg-[#f7fbf9]">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-[#e6f4ef] p-10">
        <h1 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#004d35] mb-4">Create Your Account</h1>
        <p className="text-gray-600 mb-8">Sign up with an email and password to book appointments, manage your account, and access admin features if authorized.</p>

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
              minLength={8}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Choose a strong password"
            />
          </div>

          {message && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-xl px-4 py-3">{message}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#004d35] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#003a29] transition-colors disabled:opacity-60"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#c9a84c] font-semibold hover:text-[#a78b3f]">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
