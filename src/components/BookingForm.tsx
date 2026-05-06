import { useState, FormEvent } from 'react';
import { Calendar, User, Phone, ChevronDown, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const services = [
  'Medical Consultation',
  'Aesthetic Treatment',
  'Skin Rejuvenation',
  'Botox & Fillers',
  'Body Contouring',
  'Dermatology',
  'Wellness & Prevention',
  'Other / Not sure yet',
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferred_date: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setError('Please fill in your name, phone, and service.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { error: dbError } = await supabase.from('appointments').insert([form]);
      if (dbError) throw dbError;
      setSuccess(true);
      setForm({ name: '', phone: '', email: '', service: '', preferred_date: '', message: '' });
    } catch {
      setError('Something went wrong. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-[#e6f4ef] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-[#004d35]" size={32} />
        </div>
        <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#004d35] mb-3">
          Appointment Request Received!
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          Thank you, <strong>{form.name || 'valued patient'}</strong>. We will contact you within 24 hours to confirm your appointment.
        </p>
        <p className="text-[#c9a84c] text-sm italic">
          Grazie! La contatteremo al più presto.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 btn-green text-xs px-6 py-2.5"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#004d35] mb-1">
        Book Your Visit
      </h3>
      <p className="text-gray-500 text-sm mb-6">Prenota il tuo appuntamento — it's quick and easy.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="sm:col-span-2 md:col-span-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Full Name *
          </label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mario Rossi"
              required
              className="w-full border border-gray-200 rounded pl-9 pr-4 py-2.5 text-sm transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="sm:col-span-2 md:col-span-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Phone Number *
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+39 349 676 3014"
              required
              className="w-full border border-gray-200 rounded pl-9 pr-4 py-2.5 text-sm transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Email (optional)
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="mario@example.com"
            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm transition-colors"
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2 md:col-span-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Service *
          </label>
          <div className="relative">
            <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm appearance-none transition-colors bg-white"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="sm:col-span-2 md:col-span-1">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              name="preferred_date"
              value={form.preferred_date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full border border-gray-200 rounded pl-9 pr-4 py-2.5 text-sm transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 tracking-wide uppercase">
            Additional Notes
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any specific concerns or questions..."
            className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm transition-colors resize-none"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-3 bg-red-50 border border-red-100 rounded px-3 py-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 btn-primary w-full justify-center py-3 text-sm"
      >
        {loading ? 'Sending...' : 'Book Your Visit — Prenota Ora'}
      </button>

      <p className="text-center text-xs text-gray-400 mt-3">
        We'll confirm within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
