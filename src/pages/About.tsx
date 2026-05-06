import { useNavigate } from 'react-router-dom';
import { Check, Award, Heart, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: <Heart size={28} />,
    title: 'Beauty Beyond Surface',
    desc: 'We believe beauty comes from confidence. Our goal is to enhance what nature gave you, not change who you are.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Medical Excellence',
    desc: 'Board-certified physicians. FDA-approved technology. Rigorous safety protocols. Your wellbeing is non-negotiable.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Personalized Artistry',
    desc: 'Every face, every body is unique. We don\'t follow templates—we create custom beauty solutions.',
  },
  {
    icon: <Users size={28} />,
    title: 'Confidential Care',
    desc: 'Your privacy is sacred. Discreet consultations. Confidential records. Complete peace of mind.',
  },
];

const team = [
  {
    name: 'Dr. Marco Rossini',
    role: 'Medical Director & Aesthetic Specialist',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: '15+ years in aesthetic medicine. Specializes in laser treatments and body contouring. Over 3,000 satisfied patients.',
    credentials: 'MD, Board-Certified Aesthetic Medicine',
  },
  {
    name: 'Dr. Sofia Benedetti',
    role: 'Skin Specialist & Laser Expert',
    image: 'https://images.pexels.com/photos/5214999/pexels-photo-5214999.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialist in chemical peeling and skin rejuvenation. Pioneer in NIR lifting technology. Perfectionist with results.',
    credentials: 'MD, Dermatology & Aesthetic Surgery',
  },
  {
    name: 'Dr. Giovanni Fabbri',
    role: 'Surgical Specialist & Body Contouring',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in breast augmentation and micro-lipo. Creates natural-looking results. Focuses on body harmony.',
    credentials: 'MD, Plastic & Aesthetic Surgery',
  },
];

export default function About() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-[#004d35] overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Philosophy</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Premium Aesthetic<br />
            <span className="text-[#d4b96e]">Medicine in Rome</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            We're not just a clinic. We're your partner in rediscovering the confident, beautiful you.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium aesthetic clinic"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#c9a84c] to-[#d4b96e] rounded-2xl p-8 shadow-2xl text-white hidden lg:block">
                <div className="font-['Cormorant_Garamond'] text-5xl font-bold mb-2">2,500+</div>
                <div className="text-sm font-semibold">Transformed Patients</div>
              </div>
            </div>

            <div>
              <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Mission</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6 leading-tight">
                Beauty Redefined
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mb-8" />

              <p className="text-gray-700 text-base leading-relaxed mb-5">
                At Care Clinic Roma, we believe that true beauty comes from confidence. We're not here to change you—we're here to help you become the best version of yourself.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-5">
                With advanced non-invasive treatments and a team of board-certified physicians, we deliver visible, transformative results. No scalpels. No long recoveries. Just gorgeous skin and a sculpted body you'll love.
              </p>

              <p className="text-[#004d35] italic text-base font-semibold mb-8">
                "We don't create artificial beauty. We enhance your natural radiance."
              </p>

              <div className="space-y-3">
                {['Premium Italian clinic', 'Discreet consultations', '2,500+ satisfied patients', '98% results satisfaction'].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <Check className="text-[#d4b96e] flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Core Values</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              What Guides Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e6f4ef] hover:border-[#c9a84c]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#c9a84c] to-[#d4b96e] rounded-xl flex items-center justify-center text-white mb-6">
                  {v.icon}
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#004d35] mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Meet the Experts</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              Board-Certified Specialists
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Your beauty is in the hands of Italy's finest aesthetic medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d35]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#004d35] mb-1">{member.name}</h3>
                  <p className="text-[#c9a84c] text-sm font-bold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs italic mb-3">{member.credentials}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aesthetic Medicine */}
      <section className="py-24 bg-[#004d35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #c9a84c 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">The Future of Beauty</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Why Choose<br />
              Non-Invasive Treatments?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mb-10" />

            <div className="space-y-6">
              {[
                {
                  title: 'No Surgery, No Scars',
                  desc: 'Advanced technology delivers surgical-grade results without any cutting, stitching, or permanent marks.',
                },
                {
                  title: 'Zero to Minimal Downtime',
                  desc: 'Treatments typically take 20-60 minutes. Back to work, to dinner, to life—immediately.',
                },
                {
                  title: 'Natural-Looking Results',
                  desc: 'Professional expertise ensures enhancements look beautiful and natural, not overdone.',
                },
                {
                  title: 'Reversible & Adjustable',
                  desc: 'Most treatments can be adjusted or reversed if desired. It\'s your beauty on your terms.',
                },
                {
                  title: 'Cost Effective',
                  desc: 'Significant savings compared to invasive surgery while achieving comparable or superior results.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <Award className="text-[#d4b96e] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="py-20 bg-[#f7fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2,500+', label: 'Satisfied Patients', icon: '😊' },
              { number: '98%', label: 'Results Satisfaction', icon: '⭐' },
              { number: '9', label: 'Advanced Treatments', icon: '✨' },
              { number: '15+', label: 'Years Experience', icon: '🏆' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-[#004d35] via-[#006644] to-[#004d35] rounded-3xl px-8 md:px-12 py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 50%)' }} />
            <div className="relative">
              <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Ready to Begin</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-white mb-6">
                Your Beauty Transformation Starts Here
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Book your free consultation today. Let's discuss your goals and create your personalized treatment plan.
              </p>
              <button onClick={() => handleNavigate('/contact')} className="bg-[#d4b96e] text-[#004d35] px-10 py-5 text-lg font-bold rounded-sm hover:bg-[#c9a84c] transition-all duration-300 inline-flex items-center gap-2">
                Book Your Free Consultation
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
