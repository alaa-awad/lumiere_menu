import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categories } from '../data';

export default function FoodCard({ item }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const itemName = lang === 'ar' && item.nameAr ? item.nameAr : item.name;
  const itemDesc = lang === 'ar' && item.descriptionAr ? item.descriptionAr : item.description;
  const itemBadge = item.badge ? (lang === 'ar' ? item.badge.ar : item.badge.en) : null;

  const categoryObj = categories.find(c => c.en === item.category);
  const itemCategory = categoryObj ? (lang === 'ar' ? categoryObj.ar : categoryObj.en) : item.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl overflow-hidden group flex flex-col"
    >
      <Link to={`/menu/${item.id}`} className="block relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={itemName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {itemBadge && (
          <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {itemBadge}
          </div>
        )}
        <div className="absolute bottom-4 ltr:right-4 rtl:left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-medium shadow-lg text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-gray-900 dark:text-white">{item.rating}</span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to={`/menu/${item.id}`}>
            <h3 className="text-xl font-bold hover:text-primary transition-colors line-clamp-1">
              {itemName}
            </h3>
          </Link>
          <span className="text-lg font-bold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-muted dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {itemDesc}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {itemCategory}
          </span>
          {/* <button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-2 rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors transform active:scale-95">
            <Plus className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}
