import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Offers() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const offers = [
    {
      id: 1,
      title: lang === 'ar' ? 'عرض الغداء' : 'Lunch Special',
      description: lang === 'ar' ? 'احصل على خصم 20٪ على جميع الأطباق الرئيسية من 12 مساءً إلى 3 مساءً.' : 'Get 20% off on all main courses from 12 PM to 3 PM.',
      code: 'LUNCH20',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: lang === 'ar' ? 'وليمة العائلة' : 'Family Feast',
      description: lang === 'ar' ? 'حلوى مجانية مع كل شراء لباقة عائلية.' : 'Free dessert with every family bundle purchase.',
      code: 'SWEETFAMILY',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: lang === 'ar' ? 'برانش نهاية الأسبوع' : 'Weekend Brunch',
      description: lang === 'ar' ? 'عصائر لامحدودة مع أي طبق برانش في عطلات نهاية الأسبوع.' : 'Unlimited drinks with any brunch item on weekends.',
      code: 'BRUNCHLOVE',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('offers.title')}</h1>
        <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
          {t('offers.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl overflow-hidden flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-primary text-white p-2 rounded-full">
                <Tag className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
                {offer.description}
              </p>

              <div className="mt-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex justify-between items-center mb-4 border border-gray-200 dark:border-gray-700 border-dashed">
                  <span className="text-sm font-medium text-gray-500">{t('offers.promoCode')}</span>
                  <span className="font-bold font-mono tracking-wider text-primary">{offer.code}</span>
                </div>

                <Link to="/menu" className="block text-center w-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-3 rounded-xl font-bold hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors">
                  {t('offers.orderNow')}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
