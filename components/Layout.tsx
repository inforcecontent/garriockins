import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS, PHONE_NUMBER, COMPANY_NAME } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar - Trust & Quick Contact */}
      <div className="bg-brand-dark text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-brand-accent" /> Trusted Insurance Brokers Since 1950</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-brand-accent transition-colors flex items-center">
              <Phone className="w-3 h-3 mr-1" /> {PHONE_NUMBER}
            </a>
            <span className="text-gray-400">|</span>
            <Link to="/contact" className="hover:text-brand-accent transition-colors">Claims Support</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-dark transition-colors">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">{COMPANY_NAME.split(' ')[0]}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Insurance</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-brand-blue font-bold' 
                      : 'text-gray-600 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-accent hover:bg-amber-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-0.5"
              >
                Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-brand-blue focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-brand-light text-brand-blue'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-brand-accent text-white px-4 py-3 rounded-md font-bold text-lg"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">{COMPANY_NAME}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                Providing trusted insurance solutions to families and businesses across Manitoba for over 70 years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Home Insurance</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Auto Insurance</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Business Insurance</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Farm Insurance</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Life Insurance</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Report a Claim</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 text-brand-accent shrink-0" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-2 text-brand-accent shrink-0 flex items-center justify-center font-serif italic">@</span>
                  <a href="mailto:info@garriock.ca" className="hover:text-white transition-colors">info@garriock.ca</a>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 mr-2 text-brand-accent shrink-0 flex items-center justify-center">L</span>
                  <span>396 Main St,<br/>Winnipeg, MB R3B 1A6</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for conversion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;