import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Clock, Flame, ShieldCheck, ShoppingBag } from 'lucide-react';
import { menuItems, categories } from '../data';
import { useTranslation } from 'react-i18next';

export default function FoodDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const item = menuItems.find((p) => p.id === parseInt(id));

  const lang = i18n.language;
  const ArrowIcon = lang === 'ar' ? ArrowRight : ArrowLeft;

  if (!item) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('menu.notFound')}</h2>
        <Link to="/menu" className="text-primary hover:underline">{t('menu.returnToMenu')}</Link>
      </div>
    );
  }

  const itemName = lang === 'ar' && item.nameAr ? item.nameAr : item.name;
  const itemDesc = lang === 'ar' && item.descriptionAr ? item.descriptionAr : item.description;
  const itemBadge = item.badge ? (lang === 'ar' ? item.badge.ar : item.badge.en) : null;
  const categoryObj = categories.find(c => c.en === item.category);
  const itemCategory = categoryObj ? (lang === 'ar' ? categoryObj.ar : categoryObj.en) : item.category;

  return (
    <div className="py-8 max-w-6xl mx-auto">
      <Link to="/menu" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8">
        <ArrowIcon className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
        {t('menu.backToMenu')}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px] relative"
        >
          <img
            src={item.image}
            alt={itemName}
            className="w-full h-full object-cover"
          />
          {itemBadge && (
            <div className="absolute top-6 ltr:left-6 rtl:right-6 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {itemBadge}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              {itemCategory}
            </span>
            <div className="flex items-center gap-1 text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full text-sm font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>{item.rating}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{itemName}</h1>
          <p className="text-3xl font-bold text-primary mb-6">${item.price.toFixed(2)}</p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {itemDesc}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
              <Clock className="w-6 h-6 text-gray-500 mb-2" />
              <span className="text-sm font-medium">15-20 Min</span>
            </div>
            <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
              <Flame className="w-6 h-6 text-red-500 mb-2" />
              <span className="text-sm font-medium">450 Kcal</span>
            </div>
            <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
              <ShieldCheck className="w-6 h-6 text-green-500 mb-2" />
              <span className="text-sm font-medium">Halal</span>
            </div>
          </div>

          {/* <button className="w-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all flex items-center justify-center gap-2 shadow-xl shadow-gray-200 dark:shadow-none transform active:scale-[0.98]">
            <ShoppingBag className="w-5 h-5" />
            {t('menu.addToOrder')}
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}
