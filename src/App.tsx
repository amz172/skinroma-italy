import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Admin from './pages/Admin';
import { supabase } from './lib/supabase';
import { isAdminEmail } from './lib/auth';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

type ProtectedRouteProps = {
  children: JSX.Element;
  requireAdmin?: boolean;
};

function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user ?? null;
      if (!mounted) return;

      if (!user) {
        setAllowed(false);
        return;
      }

      if (requireAdmin && !isAdminEmail(user.email)) {
        setAllowed(false);
        return;
      }

      setAllowed(true);
    };

    checkSession();

    return () => {
      mounted = false;
    };
  }, [requireAdmin]);

  if (allowed === null) {
    return <div className="min-h-[60vh] flex items-center justify-center">Loading…</div>;
  }

  if (!allowed) {
    return <Navigate to={requireAdmin ? '/account' : '/login'} replace />;
  }

  return children;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
