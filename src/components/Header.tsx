import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { isAdminEmail } from '../lib/auth';
import type { User } from '@supabase/supabase-js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Treatments', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);

    const loadUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };
    loadUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  const authLink = user ? { label: 'Account', path: '/account' } : { label: 'Login', path: '/login' };

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-[#004d35] to-[#006644] text-white text-xs py-2.5 px-4 hidden md:flex items-center justify-between">
        <span className="text-[#d4b96e] font-semibold">Via Tommaso Gulli, 3 — Roma • Free Consultation Available</span>
        <div className="flex items-center gap-4">
          <a href="tel:+393496763014" className="flex items-center gap-1 hover:text-[#d4b96e] transition-colors">
            +39 349 676 3014
          </a>
          <span className="text-white/30">|</span>
          <span>Mon–Sat: 9:00–19:00</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white border-b border-[#e6f4ef]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <img
                  src="/image.png"
                  alt="Care Clinic Roma"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <div className="text-left hidden sm:block">
                <div className="font-['Cormorant_Garamond'] text-base md:text-lg font-bold text-[#004d35] leading-tight">
                  Care Clinic
                </div>
                <div className="text-[9px] text-[#d4b96e] tracking-[0.15em] uppercase font-bold">
                  Aesthetic Medicine
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link text-sm font-semibold transition-colors pb-1 ${
                      isActive ? 'text-[#d4b96e] active' : 'text-gray-700 hover:text-[#004d35]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleNavigate('/contact')}
                className="btn-primary text-xs px-6 py-3 font-bold flex items-center gap-2"
              >
                <Sparkles size={14} />
                Free Consultation
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 text-[#004d35]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-left px-4 py-3 rounded font-semibold transition-colors text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <button
                type="button"
                onClick={() => handleNavigate('/contact')}
                className="btn-primary w-full justify-center py-3 font-bold"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
