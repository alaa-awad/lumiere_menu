import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
        <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t('contact.name')}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder={lang === 'ar' ? "أحمد محمد" : "John Doe"} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t('contact.email')}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t('contact.message')}</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder={lang === 'ar' ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}></textarea>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors">
                {t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{t('contact.location')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {lang === 'ar' ? '123 شارع الطهي' : '123 Culinary Avenue'}<br/>
                {lang === 'ar' ? 'حي الطعام، نيويورك 10012' : 'Food District, NY 10012'}
              </p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{t('contact.phone')}</h3>
              <p className="text-gray-600 dark:text-gray-300 ltr" style={{ direction: 'ltr' }}>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{t('contact.email')}</h3>
              <p className="text-gray-600 dark:text-gray-300">hello@lumiere.com<br/>reservations@lumiere.com</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{t('contact.openingHours')}</h3>
              <div className="text-gray-600 dark:text-gray-300 flex flex-col gap-1">
                <div className="flex justify-between w-56"><span>{lang === 'ar' ? 'الاثنين - الخميس:' : 'Mon - Thu:'}</span> <span>{lang === 'ar' ? '11 ص - 10 م' : '11 AM - 10 PM'}</span></div>
                <div className="flex justify-between w-56"><span>{lang === 'ar' ? 'الجمعة - السبت:' : 'Fri - Sat:'}</span> <span>{lang === 'ar' ? '11 ص - 11 م' : '11 AM - 11 PM'}</span></div>
                <div className="flex justify-between w-56"><span>{lang === 'ar' ? 'الأحد:' : 'Sunday:'}</span> <span>{lang === 'ar' ? '10 ص - 9 م' : '10 AM - 9 PM'}</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
