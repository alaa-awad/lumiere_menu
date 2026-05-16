import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { categories, menuItems } from '../data';
import FoodCard from '../components/FoodCard';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t, i18n } = useTranslation();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const lang = i18n.language;

  const filteredItems = menuItems.filter((item) => {
    const activeCategoryName = categories[activeCategoryIndex].en;
    const matchesCategory = activeCategoryName === 'All' || item.category === activeCategoryName;
    const itemName = lang === 'ar' && item.nameAr ? item.nameAr : item.name;
    const itemDesc = lang === 'ar' && item.descriptionAr ? item.descriptionAr : item.description;
    
    const matchesSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          itemDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('menu.title')}</h1>
        <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
          {t('menu.subtitle')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategoryIndex(index)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all font-medium ${
                activeCategoryIndex === index
                  ? 'bg-primary text-white shadow-md'
                  : 'glass hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {lang === 'ar' ? category.ar : category.en}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 ltr:pl-3 rtl:pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={t('menu.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full ltr:pl-10 rtl:pr-10 ltr:pr-3 rtl:pl-3 py-2 border border-gray-200 dark:border-gray-700 rounded-full leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-xl text-gray-500">{t('menu.noItems')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
