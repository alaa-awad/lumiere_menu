import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const ArrowIcon = i18n.language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
          {t('home.welcome')}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {t('home.titlePart1')} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            {t('home.titlePart2')}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted dark:text-gray-400 mb-10 leading-relaxed">
          {t('home.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/menu"
            className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-red-600 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            {t('home.viewMenu')} <ArrowIcon className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all w-full sm:w-auto justify-center flex transform hover:-translate-y-1"
          >
            {t('home.bookTable')}
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative h-[400px]"
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{t('home.elegantAtmosphere')}</h3>
            <p className="text-gray-200">{t('home.perfectOccasions')}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
