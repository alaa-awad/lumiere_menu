import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Moon, Sun, ShoppingBag, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.offers'), path: '/offers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass dark:bg-gray-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary font-sans">
              LUMIÈRE
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="mx-10 flex items-baseline space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 font-medium"
            >
              <Globe className="w-5 h-5" />
              {t('nav.language')}
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {/* <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform rtl:-translate-x-1/4 translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                3
              </span>
            </button> */}
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-2">
            <button className="p-2 rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                <span className="text-base font-medium">{t('nav.language')}</span>
                <button
                  onClick={() => { toggleLanguage(); setIsOpen(false); }}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <Globe className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-base font-medium">{t('nav.darkMode')}</span>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
