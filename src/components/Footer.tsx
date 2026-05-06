import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Services', path: '/services' },
  { label: 'About Us', path: '/about' },
  { label: 'Book Appointment', path: '/contact' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#004d35] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/image.png" alt="Care Clinic Roma" className="h-12 w-12 object-contain rounded-sm bg-white/10 p-1" />
              <div>
                <div className="font-['Cormorant_Garamond'] text-xl font-bold leading-tight">Care Clinic Roma</div>
                <div className="text-[10px] text-[#c9a84c] tracking-widest uppercase mt-0.5">Skincare Med</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Professional medical, aesthetic, and wellness treatments in the heart of Rome.
              <em className="text-[#c9a84c]"> La tua salute, la nostra priorità.</em>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/careclinicroma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-[#c9a84c] hover:text-[#004d35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.facebook.com/skincaremed.it"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-[#c9a84c] hover:text-[#004d35] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#c9a84c] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.path + item.label}>
                  <Link
                    to={item.path}
                    className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#c9a84c] mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                'Medical Consultations',
                'Aesthetic Treatments',
                'Skin Rejuvenation',
                'Body Contouring',
                'Wellness & Prevention',
                'Dermatology',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors text-left"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#c9a84c] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Via Tommaso Gulli, 3<br />Roma, Italia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+393496763014" className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">
                  +39 349 676 3014
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:info@careclinicroma.it" className="text-gray-300 text-sm hover:text-[#c9a84c] transition-colors">
                  info@careclinicroma.it
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon–Sat: 9:00–19:00<br />Lun–Sab: 9:00–19:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Care Clinic Roma – Skincare Med. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Via Tommaso Gulli 3, Roma, Rome, Lazio, Italy
          </p>
        </div>
      </div>
    </footer>
  );
}
