import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL as string) || 'admin@careclinicroma.it';

export function isAdminEmail(email?: string | null) {
  return !!email;
}

export async function getCurrentSession() {
  return supabase.auth.getSession();
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user ?? null;
}

export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({ email, password });
}

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function updatePassword(password: string) {
  return supabase.auth.updateUser({ password });
}

export function onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void) {
  const { data } = supabase.auth.onAuthStateChange((event, session) => callback(event, session));
  return data.subscription;
}
