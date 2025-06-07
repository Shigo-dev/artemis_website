import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#hero" className="flex items-center">
                <Logo />
                <span className={`ml-3 text-xl font-bold ${isScrolled ? 'text-blue-700' : 'text-blue-600'}`}>
                  Artemis
                </span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#sns" 
                className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:text-blue-600 transition-colors duration-200`}
              >
                SNS
              </a>
              <a 
                href="#activities" 
                className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:text-blue-600 transition-colors duration-200`}
              >
                活動内容
              </a>
              <a 
                href="#location" 
                className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:text-blue-600 transition-colors duration-200`}
              >
                活動場所
              </a>
              <a 
                href="#sponsors" 
                className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:text-blue-600 transition-colors duration-200`}
              >
                スポンサー
              </a>
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                お問い合わせ
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:text-blue-600 focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#sns"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              SNS
            </a>
            <a
              href="#activities"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              活動内容
            </a>
            <a
              href="#location"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              活動場所
            </a>
            <a
              href="#sponsors"
              className="block px-3 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              スポンサー
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;