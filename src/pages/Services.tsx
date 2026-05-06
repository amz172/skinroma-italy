import { useNavigate } from 'react-router-dom';
import { Check, Zap, Heart, Sparkles, ArrowRight, Clock, Users, Shield } from 'lucide-react';

const services = [
  {
    id: 'peeling',
    icon: '✨',
    title: 'Chemical Peeling',
    tagline: 'Reveal your radiant skin',
    // hero: 'https://images.pexels.com/photos/3852639/pexels-photo-3852639.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://images.pexels.com/photos/29189920/pexels-photo-29189920.jpeg?_gl=1*1nhp7b4*_ga*NjQyMjMzNzgzLjE3NDU1MjQxODQ.*_ga_8JE65Q40S6*czE3Nzc5Mjg1MjkkbzE0JGcxJHQxNzc3OTMxMzAzJGo1OSRsMCRoMA..',
    benefits: [
      'Reduces acne scars and pitted texture',
      'Eliminates freckles, age spots, sun damage',
      'Minimizes fine lines and wrinkles',
      'Evens skin tone and brightens complexion',
      'Improves skin texture and smoothness',
    ],
    details: 'Professional chemical peels use medical-grade solutions to gently exfoliate damaged skin layers. The treatment works by triggering the skin\'s natural renewal process, revealing fresher, younger-looking skin beneath.',
    results: 'Visible results appear within 3-7 days. Most patients see dramatic improvements in 4-6 sessions, with continued improvement over 12 weeks.',
    duration: '30-45 minutes per session',
    downtime: '3-7 days of light peeling',
    cta: 'Book Your Skin Consultation',
  },
  {
    id: 'laser-hair',
    icon: '🔥',
    title: 'Medical Laser Hair Removal',
    tagline: 'Permanent smoothness, forever',
    // hero: 'https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/483067468_1091108146367102_7794039614268635105_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=W3LaTmHIihQQ7kNvwFLhnC9&_nc_oc=Adpu5L731ZQS-wgcPvEMzEoSG2T2x7g1WPZj65p2D2lBaGT9ZuNprCbbmAVRfqHLEO0&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=UywJ99voHk0hg9gVJvAwHg&_nc_ss=7b2a8&oh=00_Af7umaPKzVNIDpzD9uUmhhBJgGVlH4uTEXevf8iujrcalA&oe=69FEE123',
    benefits: [
      'Permanent hair reduction (85-90%)',
      'Safe for all skin types, including tanned skin',
      'Works on face, legs, underarms, bikini area',
      'Fast treatment (minutes per area)',
      'No ingrown hairs or razor bumps ever',
    ],
    details: 'Medical-grade laser technology targets hair follicles at the root, destroying them permanently without damaging surrounding skin. FDA-approved and clinically proven.',
    results: 'Permanent results after 6-8 sessions. Hair becomes thinner and lighter with each session, then stops growing back completely.',
    duration: '15-60 minutes depending on area',
    downtime: 'None - go back to normal immediately',
    cta: 'Start Your Hair-Free Life',
  },
  {
    id: 'carboxytherapy',
    icon: '💎',
    title: 'Carboxytherapy (CO2 Injections)',
    tagline: 'Sculpt and tighten naturally',
    // hero: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/490279469_29200532782928177_872314618394519611_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=84-sj0hyFQ0Q7kNvwEcLObp&_nc_oc=AdqJUP5vyZBPDR9-OreJhUIJy9KQIi3a25ZTgIg9ltUcoH6nYc4rQKS5EuSP-m5FL7E&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=nCV89T2WmNLnr0FjozWorA&_nc_ss=7b2a8&oh=00_Af7RfOL7JlU853XUnzmN_IVRm6Ja-Zsvjm-lUpCvTH4bhg&oe=69FEF221',
    benefits: [
      'Reduces cellulite dramatically',
      'Targets stubborn belly fat',
      'Tightens and lifts thighs and hips',
      'Improves skin texture and elasticity',
      'Boosts circulation to treated areas',
    ],
    details: 'CO2 injections stimulate your body\'s natural response, increasing blood circulation and collagen production. The result? Tighter, smoother skin and reduced fat deposits.',
    results: 'Visible cellulite reduction after 3 sessions. Maximum results after 8-10 sessions with lasting effects for 6-12 months.',
    duration: '20-30 minutes per session',
    downtime: 'Minimal - slight redness for a few hours',
    cta: 'Shape Your Body Naturally',
  },
  {
    id: 'rhinofiller',
    icon: '👃',
    title: 'Rhinofiller (Non-Surgical Nose Job)',
    tagline: 'Perfect profile in 30 minutes',
    hero: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/482243053_1092183682926215_569100863829891250_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=W_I8IOiaxkgQ7kNvwElQNQz&_nc_oc=AdqKIPsv2swEsCMBopMhhxzVr7LnLW-BGKW1zljU7rAlJTdhG5FJUtZs6NXEp9pBwbk&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=NSIcf6eTZoSrqh1q5L7wEA&_nc_ss=7b2a8&oh=00_Af6J-1ETxS1KvoI9sAKZjmmL9nxP3tckdTyKt7NzVLbd6Q&oe=69FECF5A',
    benefits: [
      'Reshape nose without surgery',
      'Smooth humps and bumps',
      'Enhance profile and symmetry',
      'Instant results - see change immediately',
      'Reversible if desired',
    ],
    details: 'Using advanced dermal fillers, our specialists sculpt your nose to perfection. It\'s like contouring for your face - but permanent.',
    results: 'Immediate results visible right after treatment. Full results after 2 weeks as swelling subsides.',
    duration: '30 minutes',
    downtime: 'Minimal swelling - back to normal within days',
    cta: 'Enhance Your Profile Today',
  },
  {
    id: 'nir-lifting',
    icon: '🌟',
    title: 'NIR Skin Tightening (Laser Lifting)',
    tagline: 'Younger skin, no surgery required',
    // hero: 'https://images.pexels.com/photos/3962570/pexels-photo-3962570.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://images.pexels.com/photos/7582561/pexels-photo-7582561.jpeg?_gl=1*67dbxq*_ga*NjQyMjMzNzgzLjE3NDU1MjQxODQ.*_ga_8JE65Q40S6*czE3Nzc5Mjg1MjkkbzE0JGcxJHQxNzc3OTMyMzczJGo1OSRsMCRoMA..',
    benefits: [
      'Stimulates deep collagen production',
      'Reduces wrinkles and fine lines',
      'Tightens sagging skin naturally',
      'Non-ablative - no downtime',
      'Works on face, neck, and décolletage',
    ],
    details: 'Near-infrared laser energy penetrates deep into skin layers, triggering your body\'s natural collagen production. The result is visibly tighter, younger-looking skin.',
    results: 'Subtle improvements after first session. Major results after 6 sessions with continued improvement for 3 months.',
    duration: '45-60 minutes',
    downtime: 'None - can apply makeup immediately',
    cta: 'Get Younger Looking Skin',
  },
  {
    id: 'body-contour',
    icon: '🔊',
    title: 'Ultrasound Body Contouring',
    tagline: 'Sound waves sculpt your body',
    // hero: 'https://images.pexels.com/photos/3945665/pexels-photo-3945665.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://images.pexels.com/photos/5042613/pexels-photo-5042613.jpeg?_gl=1*1ihttnh*_ga*NjQyMjMzNzgzLjE3NDU1MjQxODQ.*_ga_8JE65Q40S6*czE3Nzc5Mjg1MjkkbzE0JGcxJHQxNzc3OTMyNDcyJGo2MCRsMCRoMA..',
    benefits: [
      'Permanent fat reduction',
      'High-frequency ultrasound technology',
      'Targets stubborn areas (belly, love handles)',
      'Visible results in 3-5 sessions',
      'Non-invasive body sculpting',
    ],
    details: 'Focused ultrasound waves create precise heat at the fat tissue level, permanently destroying fat cells without affecting surrounding skin or muscles.',
    results: 'Noticeable reduction after 2-3 sessions. Peak results at 12 weeks with permanent fat cell removal.',
    duration: '30-45 minutes per area',
    downtime: 'None - immediate normal activity',
    cta: 'Transform Your Body Now',
  },
  {
    id: 'softlipo',
    icon: '✂️',
    title: 'Soft Lipo / Micro Lipo',
    tagline: 'Precise fat removal, permanent results',
    // hero: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=800',
    hero: 'https://scontent.flyp17-1.fna.fbcdn.net/v/t39.30808-6/489921094_29208276665487122_4175002498058504934_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=toFuddC5NH4Q7kNvwFbJ2PI&_nc_oc=AdrsoNOl9piLgzOLKrBG25y5AYiXejUdUx4CRpZsFRCf2NI__xU_IJKuXfW91eDe2PI&_nc_zt=23&_nc_ht=scontent.flyp17-1.fna&_nc_gid=YSNtnIyq_vNy77PyoWoKcg&_nc_ss=7b2a8&oh=00_Af4egSVHWkzB6CvubydLBIdJgXN8H96NctDRVlJpf_B5Ig&oe=69FEE7B1',
    benefits: [
      'Remove stubborn fat permanently',
      'Precise contouring (chin, thighs, knees)',
      'Advanced aesthetic technology',
      'Sculpt your ideal silhouette',
      'Minimal scarring',
    ],
    details: 'Micro-lipo technology removes localized fat deposits with precision, creating smooth contours without the trauma of traditional liposuction.',
    results: 'Immediate reshaping visible. Swelling subsides over 2-3 weeks, revealing final sculpted results.',
    duration: '45-90 minutes depending on area',
    downtime: '5-7 days - compression garment worn',
    cta: 'Sculpt Your Ideal Shape',
  },
  // {
  //   id: 'breast-aug',
  //   icon: '💗',
  //   title: 'Breast Augmentation (Mastoplasty)',
  //   tagline: 'Enhance volume, restore confidence',
  //   hero: 'https://images.pexels.com/photos/3763417/pexels-photo-3763417.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   benefits: [
  //     'Increase breast volume and projection',
  //     'Improve symmetry between breasts',
  //     'Restore volume after pregnancy',
  //     'Enhance self-confidence',
  //     'Natural-looking results',
  //   ],
  //   details: 'Our surgeons use the latest techniques to enhance breast size and shape. Implant choice, placement, and approach are customized to your body and goals.',
  //   results: 'Immediate enhancement visible. Full results after 6-8 weeks as swelling decreases.',
  //   duration: '1.5-2 hours',
  //   downtime: '1-2 weeks before normal activity',
  //   cta: 'Book Private Consultation',
  // },
  {
    id: 'vascular',
    icon: '🎯',
    title: 'Vascular Laser Treatment',
    tagline: 'Clear skin, confidence restored',
    hero: 'https://images.pexels.com/photos/5069506/pexels-photo-5069506.jpeg?_gl=1*nela7l*_ga*NjQyMjMzNzgzLjE3NDU1MjQxODQ.*_ga_8JE65Q40S6*czE3Nzc5Mjg1MjkkbzE0JGcxJHQxNzc3OTMyOTU0JGo2MCRsMCRoMA..',
    benefits: [
      'Eliminate broken capillaries',
      'Reduce redness and rosacea',
      'Treat vascular lesions safely',
      'Works on face and legs',
      'Precise, safe treatment',
    ],
    details: 'Laser energy targets blood vessels specifically, causing them to collapse and fade naturally. Surrounding skin remains completely unharmed.',
    results: 'Visible improvement after first session. Best results after 3-4 sessions with permanent elimination of treated vessels.',
    duration: '20-40 minutes',
    downtime: 'None - slight redness may fade within hours',
    cta: 'Clear Your Skin Today',
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[#004d35] overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 55%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Treatments</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            9 Advanced Aesthetic<br />
            <span className="text-[#d4b96e]">Treatments</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            From skin perfection to body sculpting. Every treatment is customized for your unique beauty goals. Medical-grade results without surgery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((service, idx) => (
        <section key={service.id} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f7fbf9]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={service.hero}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d35]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Medical-Grade Treatment
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-3">Treatment {idx + 1} of 9</p>
                <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-2">{service.title}</h2>
                <p className="text-[#d4b96e] italic text-lg mb-6">{service.tagline}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mb-6" />

                <p className="text-gray-700 text-base leading-relaxed mb-8">{service.details}</p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-[#004d35] font-bold text-sm uppercase tracking-widest mb-4">Key Benefits</h3>
                  <div className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <Check className="text-[#d4b96e] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info boxes */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                  <div className="bg-[#e6f4ef] rounded-lg p-4 text-center border border-[#004d35]/10">
                    <Clock size={20} className="text-[#004d35] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#004d35] mb-1">Duration</p>
                    <p className="text-xs text-gray-600">{service.duration}</p>
                  </div>
                  <div className="bg-[#e6f4ef] rounded-lg p-4 text-center border border-[#004d35]/10">
                    <Zap size={20} className="text-[#004d35] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#004d35] mb-1">Downtime</p>
                    <p className="text-xs text-gray-600">{service.downtime}</p>
                  </div>
                  <div className="bg-[#e6f4ef] rounded-lg p-4 text-center border border-[#004d35]/10">
                    <Heart size={20} className="text-[#004d35] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#004d35] mb-1">Results</p>
                    <p className="text-xs text-gray-600">{service.results.split('.')[0]}.</p>
                  </div>
                </div>

                {/* Details */}
                <div className="bg-[#f7fbf9] rounded-lg p-6 border border-[#e6f4ef] mb-8">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    <span className="font-bold text-[#004d35]">Why it works: </span>
                    {service.results}
                  </p>
                </div>

                <button onClick={() => handleNavigate('/contact')} className="btn-primary px-8 py-4 text-base font-bold">
                  {service.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs font-bold tracking-[0.2em] uppercase mb-4">Quick Comparison</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
              Find Your Perfect Treatment
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#c9a84c]">
                  <th className="text-left py-4 px-4 text-[#004d35] font-bold">Treatment</th>
                  <th className="text-center py-4 px-4 text-[#004d35] font-bold">Downtime</th>
                  <th className="text-center py-4 px-4 text-[#004d35] font-bold">Results Timeline</th>
                  <th className="text-center py-4 px-4 text-[#004d35] font-bold">Sessions Needed</th>
                  <th className="text-center py-4 px-4 text-[#004d35] font-bold">Durability</th>
                </tr>
              </thead>
              <tbody>
                {services.slice(0, 5).map((s) => (
                  <tr key={s.id} className="border-b border-gray-200 hover:bg-[#f7fbf9] transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#004d35]">{s.title}</td>
                    <td className="py-4 px-4 text-center text-sm text-gray-600">Minimal</td>
                    <td className="py-4 px-4 text-center text-sm text-gray-600">3-7 days</td>
                    <td className="py-4 px-4 text-center text-sm text-gray-600">4-8</td>
                    <td className="py-4 px-4 text-center text-sm text-gray-600">6-12 months</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Professional */}
      <section className="py-24 bg-[#004d35] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#d4b96e] text-xs font-bold tracking-[0.2em] uppercase mb-4">Your Safety First</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-white mb-6">
              Why Medical Professionals Matter
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#d4b96e] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: 'Safety & Expertise',
                desc: 'Board-certified physicians with years of aesthetic experience ensure safe, effective treatments.',
              },
              {
                icon: <Users size={32} />,
                title: 'Personalized Plans',
                desc: 'Every patient gets a custom treatment plan tailored to their unique skin type and goals.',
              },
              {
                icon: <Sparkles size={32} />,
                title: 'Premium Results',
                desc: 'Professional-grade equipment and techniques deliver results you can\'t get anywhere else.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm text-center">
                <div className="w-16 h-16 bg-[#d4b96e] rounded-2xl flex items-center justify-center text-[#004d35] mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#c9a84c] via-[#d4b96e] to-[#c9a84c]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#004d35] text-xs font-bold tracking-[0.2em] uppercase mb-4">Next Step</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold text-[#004d35] mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-[#004d35]/80 text-lg mb-10 max-w-2xl mx-auto">
            Book your FREE consultation today. Our specialists will analyze your goals and create a personalized treatment plan just for you.
          </p>
          <a href="#booking" className="bg-[#004d35] text-white px-10 py-5 text-lg font-bold rounded-sm hover:bg-[#006644] transition-all duration-300 inline-flex items-center gap-2">
            Reserve Your Consultation Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}
