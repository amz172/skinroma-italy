import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, CheckCircle, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    lines: ['Via Tommaso Gulli, 3', 'Roma, Italia'],
    link: 'https://www.google.com/maps?q=Via+Tommaso+Gulli+3+Roma',
    linkText: 'Get Directions',
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    lines: ['+39 349 676 3014'],
    link: 'tel:+393496763014',
    linkText: 'Call Now',
  },
  {
    icon: <Mail size={24} />,
    title: 'Email',
    // lines: ['info@careclinicroma.it'],
    // link: 'mailto:info@careclinicroma.it',
    linkText: 'Send Email',
  },
  {
    icon: <Clock size={24} />,
    title: 'Hours',
    lines: ['Mon–Sat: 9:00 – 19:00', 'Sun: Closed'],
    link: null,
    linkText: null,
  },
];

export default function Contact() {
  const whatsappMsg = encodeURIComponent(
    'Ciao! Vorrei prenotare una consulenza gratuita presso Care Clinic Roma.\nHello! I\'d like to book a free consultation at Care Clinic Roma.'
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-[#004d35] overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #c9a84c 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Book Your Free<br />
            <span className="text-[#d4b96e]">Consultation Today</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            30 minutes of personalized expert analysis. Let's discuss your beauty goals and create your custom treatment plan.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c) => (
              <div key={c.title} className="bg-[#f7fbf9] rounded-2xl p-7 border border-[#e6f4ef] hover:border-[#c9a84c] transition-colors group">
                <div className="w-12 h-12 bg-[#004d35] rounded-xl flex items-center justify-center text-[#d4b96e] mb-5 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-bold text-[#004d35] text-base mb-2">{c.title}</h3>
                {c.lines?.map((line) => (
                  <p key={line} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                ))}
                {c.link && c.linkText && (
                  <a
                    href={c.link}
                    target={c.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[#d4b96e] text-xs font-bold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {c.linkText} <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Text */}
            <div>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Book Now</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6 leading-tight">
                Your Free<br />
                <span className="text-[#d4b96e]">Aesthetic Consultation</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mb-8" />

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                During your 30-minute consultation, our board-certified specialists will:
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Analyze your skin and body',
                  'Discuss your beauty goals',
                  'Recommend personalized treatments',
                  'Explain results and timeline',
                  'Answer all your questions',
                  'Create your custom plan',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-[#d4b96e] flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#e6f4ef] border-l-4 border-[#d4b96e] rounded-lg p-6 mb-8">
                <p className="text-[#004d35] font-bold text-sm mb-1">Why Book Now?</p>
                <p className="text-gray-700 text-sm">
                  Limited consultation slots available. New patients receive a personalized treatment plan worth €150 at no cost.
                </p>
              </div>

              <p className="text-[#d4b96e] italic font-semibold text-base">
                Prenota la tua consulenza gratuita oggi.
              </p>
            </div>

            {/* Form */}
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Visit Us</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              Find Our Premium Clinic
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#e6f4ef]">
            <iframe
              title="Care Clinic Roma Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3!2d12.4964!3d41.8902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b1d1f5e6a7%3A0x0!2sVia+Tommaso+Gulli+3%2C+Roma%2C+Italy!5e0!3m2!1sen!2sit!4v1700000000000"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              Reach Out Today
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/393496763014?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/30 transition-colors">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm mb-4">Quick response, fast booking</p>
              <p className="text-sm font-semibold">Chat now →</p>
            </a>

            {/* Call */}
            <a
              href="tel:+393496763014"
              className="bg-[#004d35] text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/30 transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-white/80 text-sm mb-4">Mon–Sat 9:00–19:00</p>
              <p className="text-sm font-semibold">Call now →</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@careclinicroma.it"
              className="bg-[#d4b96e] text-[#004d35] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 bg-[#004d35]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#004d35]/20 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-[#004d35]/70 text-sm mb-4">We reply within 24 hours</p>
              <p className="text-sm font-semibold">Send email →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-6">Follow Us</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/careclinicroma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.facebook.com/skincaremed.it"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#004d35] text-[#d4b96e] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Common Questions</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              Before Your Consultation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is the consultation really free?',
                a: 'Absolutely. Your 30-minute consultation includes expert skin analysis and a personalized treatment plan at no cost.',
              },
              {
                q: 'What should I bring?',
                a: 'Just yourself! Wear comfortable clothing and avoid heavy makeup if possible. We\'ll provide everything else.',
              },
              {
                q: 'How long does a consultation take?',
                a: '30 minutes. We discuss your goals, analyze your needs, recommend treatments, and answer all questions.',
              },
              {
                q: 'Do I have to book a treatment after?',
                a: 'No. The consultation is zero-pressure. We present options and let you decide in your own time.',
              },
              {
                q: 'Are results guaranteed?',
                a: 'We\'re honest about what\'s achievable. Most patients see excellent results, with individual outcomes varying.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-[#e6f4ef] hover:border-[#c9a84c] transition-colors">
                <h3 className="font-bold text-[#004d35] mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#004d35] via-[#006644] to-[#004d35]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Ready?</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-white mb-6">
            Your Beauty Transformation Begins Today
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Book your free 30-minute consultation. Expert analysis. Personalized plan. Zero pressure.
          </p>
          <a href="#booking" className="bg-[#d4b96e] text-[#004d35] px-10 py-5 text-lg font-bold rounded-sm hover:bg-[#c9a84c] transition-all duration-300 inline-flex items-center gap-2">
            Reserve Your Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
