import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, ArrowRight, ChevronRight, Check, Zap, Heart } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const treatments = [
  {
    icon: <Sparkles size={24} />,
    title: 'Chemical Peeling',
    subtitle: 'Radiant, flawless skin',
    desc: 'Erase acne scars, freckles, and sun damage. Reveal luminous, refined skin in just a few sessions.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Laser Hair Removal',
    subtitle: 'Permanent, smooth skin',
    desc: 'Say goodbye to razors and waxing. Medical-grade laser removes hair from face and body for good.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Carboxytherapy',
    subtitle: 'Sculpt and tighten',
    desc: 'Reduce cellulite and stubborn fat with CO2 injections. Shape your belly, thighs, and hips naturally.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Rhinofiller',
    subtitle: 'Perfect your profile',
    desc: 'Reshape your nose in 30 minutes. Non-surgical, instant results. No downtime, full confidence.',
  },
];

const benefits = [
  'Zero to minimal downtime',
  'Visible results in 3-5 sessions',
  'FDA-approved technology',
  'Medical professionals only',
  'Personalized treatment plans',
  'Premium clinic atmosphere',
];

const stats = [
  { value: '2,500+', label: 'Satisfied Patients' },
  { value: '98%', label: 'Results Satisfaction' },
  { value: '0', label: 'Surgical Procedures' },
  { value: '100%', label: 'Non-Invasive Focus' },
];

const testimonials = [
  {
    name: 'Giulia M.',
    age: '34',
    treatment: 'Chemical Peeling & Laser Hair Removal',
    text: 'My skin has never looked better. The team made me feel completely comfortable. I look 5 years younger!',
    stars: 5,
    emoji: '✨',
  },
  {
    name: 'Sophie D.',
    age: '28',
    treatment: 'Carboxytherapy & NIR Lifting',
    text: 'I was skeptical about non-invasive treatments, but the results are incredible. My body shape changed visibly.',
    stars: 5,
    emoji: '💎',
  },
  {
    name: 'Isabella L.',
    age: '41',
    treatment: 'Rhinofiller & Laser Resurfacing',
    text: 'Professional, discreet, and the results speak for themselves. Already booked my next appointment!',
    stars: 5,
    emoji: '👑',
  },
];

export default function Home() {
  const routerNavigate = useNavigate();

  const navigate = (path: string) => {
    routerNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // width: '100%',
            height: '100%',
            // backgroundImage: `url('https://images.pexels.com/photos/3759285/pexels-photo-3759285.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundImage: `url('https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/473565541_602089522800700_5989475250071244571_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=w-NPbPfQCPwQ7kNvwHSfO3X&_nc_oc=AdoJMm1pcta97SsARRp4St0lujhhC65Q7XDqg7oLfTtfKV-LZ_BeLWuHfnjs0O53jmk&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=exA6ilSo4AqKq2-lWbGfKA&_nc_ss=7b2a8&oh=00_Af724pGXDtRJp3rGWrbUKW0cBpFDPVs1wVFjUj1BonxVhw&oe=69FEF48B')`,
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-up">
              <div className="w-8 h-0.5 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase">
                Premium Aesthetic Medicine
              </span>
            </div>

            <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up animate-delay-100">
              Advanced Aesthetic<br />
              <span className="text-[#d4b96e]">Treatments in Rome</span>
            </h1>

            <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-2 animate-fade-up animate-delay-200">
              Achieve flawless skin and a sculpted body without surgery.
            </p>
            <p className="text-[#d4b96e] text-lg italic mb-8 animate-fade-up animate-delay-200">
              Non-invasive treatments. Visible results. Confidence restored.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <a href="#booking" className="btn-primary px-8 py-4 text-base font-semibold flex items-center gap-2">
                <span>Book Your Free Consultation</span>
                <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/393496763014?text=Ciao%20Care%20Clinic%20Roma!" target="_blank" rel="noopener noreferrer" className="btn-outline px-8 py-4 text-base font-semibold flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-fade-up animate-delay-400">
              {['FDA Approved', 'No Surgery', 'Visible Results', 'Zero Downtime'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                  <div className="w-1.5 h-1.5 bg-[#d4b96e] rounded-full flex-shrink-0" />
                  <span className="text-white text-xs font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden sm:flex">
          <div className="w-px h-6 bg-white/50 animate-pulse" />
          <span className="text-white text-[10px] tracking-widest uppercase">Scroll to explore</span>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-[#004d35] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#d4b96e] mb-2">{s.value}</div>
                <div className="text-white/70 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TREATMENTS ── */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Most Popular Treatments</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-4 leading-tight">
              Transform Your Look in<br />
              <span className="text-[#d4b96e]">Just a Few Sessions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced non-invasive treatments performed by medical professionals. See visible results without surgery, no downtime required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {treatments.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#e6f4ef]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e6f4ef] to-[#f0faf6] rounded-xl flex items-center justify-center text-[#004d35] mb-6 group-hover:scale-110 transition-transform">
                  {t.icon}
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#004d35] mb-1">{t.title}</h3>
                <p className="text-[#c9a84c] text-sm font-semibold italic mb-3">{t.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => navigate('/services')} className="btn-green px-8 py-4 text-base font-semibold flex items-center gap-2 mx-auto">
              Explore All 9 Treatments
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY WE'RE DIFFERENT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Why Choose Care Clinic</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-8 leading-tight">
                Premium Non-Invasive<br />
                <span className="text-[#d4b96e]">Aesthetic Excellence</span>
              </h2>

              <div className="space-y-4 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 p-4 bg-[#f7fbf9] rounded-lg border border-[#e6f4ef] hover:border-[#c9a84c] transition-colors">
                    <div className="w-6 h-6 bg-[#004d35] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-[#d4b96e]" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => navigate('/about')} className="btn-primary px-8 py-4 text-base font-semibold">
                About Our Clinic
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative">
              <img
                // src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                src="https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/484868604_1091107906367126_4557586506116979252_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=pMw8ZP6sKi0Q7kNvwFrCGud&_nc_oc=AdqPks3GMCDDQPY3gbJE2ZtbntZgw9Vwz76zGt-_GG1FoaNpkOXQDH9ESWR_n3gOXe8&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=hiVYbAtJUf4QqKSoMuzebg&_nc_ss=7b2a8&oh=00_Af4ZHw49NfVoFOVUTZOvonvgGI-h6qGHAVDAi1ythUpv0Q&oe=69FEED6B"
                alt="Premium clinic interior"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#004d35] rounded-2xl p-8 shadow-2xl text-white hidden md:block">
                <div className="font-['Cormorant_Garamond'] text-5xl font-bold text-[#d4b96e] mb-2">98%</div>
                <div className="text-sm font-semibold">Results Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER GALLERY ── */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Real Results</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-4">
              See the Transformation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Chemical Peeling',
                subtitle: 'Before & After',
                desc: '8 weeks of sessions - visible skin transformation',
                imageUrl: 'https://media.istockphoto.com/id/533939861/photo/womans-face-before-and-after-makeup-horizontal.jpg?b=1&s=612x612&w=0&k=20&c=-_4jSWdfJWbCASGVDkewbwqYHGKG7h6uZ6cxhi4aZo0=',
              },
              {
                title: 'Laser Hair Removal',
                subtitle: 'Permanent Results',
                desc: '6 sessions - smooth skin for life',
                imageUrl: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/473565541_602089522800700_5989475250071244571_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=w-NPbPfQCPwQ7kNvwHSfO3X&_nc_oc=AdoJMm1pcta97SsARRp4St0lujhhC65Q7XDqg7oLfTtfKV-LZ_BeLWuHfnjs0O53jmk&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=exA6ilSo4AqKq2-lWbGfKA&_nc_ss=7b2a8&oh=00_Af724pGXDtRJp3rGWrbUKW0cBpFDPVs1wVFjUj1BonxVhw&oe=69FEF48B',
              },
              {
                title: 'Carboxytherapy',
                subtitle: 'Body Sculpting',
                desc: '4 sessions - visible cellulite reduction',
                imageUrl: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t1.6435-9/117808551_4251688344905966_8783592285417994089_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0327a3&_nc_ohc=MvwLnKTgiQgQ7kNvwGysMgB&_nc_oc=AdoFvAfxVTR4hZOliOAm2bszH168393nDTcU6QUKgsEtBPa9jbKZvbofGlbS5tBwsv4&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=wZqHhutiUisZ8wq_21mRGg&_nc_ss=7b2a8&oh=00_Af4ln6EDdyZcZYT8wAnbM2_lNaqhpMYsRwm8u4uOj_NzCw&oe=6A20991C',
              },
            ].map((result) => (
              <div key={result.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                
                <img src={result.imageUrl} alt={result.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                {/* <div className="relative h-72 bg-gradient-to-br from-[#c9a84c] to-[#d4b96e] flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white">
                    <div className="font-['Cormorant_Garamond'] text-5xl font-bold mb-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      ✨
                    </div>
                    
                    <p className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Before & After Gallery</p>
                  </div>
                </div> */}
                <div className="p-6">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#004d35] mb-1">{result.title}</h3>
                  <p className="text-[#c9a84c] text-sm font-semibold mb-2">{result.subtitle}</p>
                  <p className="text-gray-600 text-sm">{result.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Patient Stories</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-4">
              Real Patients, Real Confidence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f7fbf9] rounded-2xl p-8 shadow-lg border border-[#e6f4ef] hover:border-[#c9a84c] transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#d4b96e" className="text-[#d4b96e]" />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c9a84c] to-[#d4b96e] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {t.emoji}
                  </div>
                  <div>
                    <div className="font-semibold text-[#004d35]">{t.name}, {t.age}</div>
                    <div className="text-[#c9a84c] text-xs font-semibold">{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <section id="booking" className="py-24 bg-[#004d35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #c9a84c 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-white">
              <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Take the Next Step</p>
              <h2 className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Free<br />
                <span className="text-[#d4b96e]">Consultation Awaits</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mb-8" />
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Book a free 30-minute consultation with our aesthetic medicine specialists. We'll analyze your goals and create a personalized treatment plan just for you.
              </p>
              <p className="text-[#d4b96e] italic text-lg mb-10">
                Prenota la tua consulenza gratuita oggi.
              </p>

              <div className="space-y-4">
                {['Free expert analysis', 'Personalized treatment plan', 'No obligations', 'Confidential consultation'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="text-[#d4b96e] flex-shrink-0" size={20} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-r from-[#004d35] via-[#006644] to-[#004d35]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Limited Time Offer</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Join hundreds of satisfied patients who've regained their confidence through our advanced aesthetic treatments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#booking" className="btn-primary px-10 py-5 text-lg font-bold">
              Book Free Consultation Now
            </a>
            <button onClick={() => navigate('/services')} className="px-10 py-5 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#004d35] transition-all duration-300 inline-flex items-center gap-2">
              View All Treatments
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
