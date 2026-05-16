import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        menu: 'Menu',
        offers: 'Offers',
        contact: 'Contact',
        darkMode: 'Dark Mode',
        language: 'عربي',
      },
      home: {
        welcome: 'Welcome to Lumière',
        titlePart1: 'Taste the ',
        titlePart2: 'Extraordinary',
        subtitle: 'Experience culinary excellence with our carefully crafted menu. Every dish is a masterpiece, designed to delight your senses.',
        viewMenu: 'View Menu',
        bookTable: 'Book a Table',
        elegantAtmosphere: 'Elegant Atmosphere',
        perfectOccasions: 'Perfect for your special occasions',
      },
      menu: {
        title: 'Our Menu',
        subtitle: 'Discover our carefully curated selection of dishes, made with the freshest ingredients and culinary passion.',
        searchPlaceholder: 'Search menu...',
        allCategories: 'All',
        noItems: 'No items found matching your search.',
        addToOrder: 'Add to Order',
        backToMenu: 'Back to Menu',
        returnToMenu: 'Return to Menu',
        notFound: 'Item not found',
      },
      offers: {
        title: 'Special Offers',
        subtitle: 'Take advantage of our exclusive deals and make your dining experience even more special.',
        promoCode: 'Promo Code',
        orderNow: 'Order Now',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We\'d love to hear from you. Get in touch for reservations, private events, or any inquiries.',
        getInTouch: 'Get in Touch',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message',
        location: 'Location',
        phone: 'Phone',
        openingHours: 'Opening Hours',
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        menu: 'القائمة',
        offers: 'العروض',
        contact: 'اتصل بنا',
        darkMode: 'الوضع الليلي',
        language: 'English',
      },
      home: {
        welcome: 'مرحباً بكم في لوميير',
        titlePart1: 'تذوق ',
        titlePart2: 'الاستثنائي',
        subtitle: 'استمتع بالتميز في الطهي من خلال قائمتنا المعدة بعناية. كل طبق هو تحفة فنية مصممة لإسعاد حواسك.',
        viewMenu: 'عرض القائمة',
        bookTable: 'احجز طاولة',
        elegantAtmosphere: 'أجواء أنيقة',
        perfectOccasions: 'مثالي لمناسباتك الخاصة',
      },
      menu: {
        title: 'قائمتنا',
        subtitle: 'اكتشف مجموعتنا المختارة بعناية من الأطباق، والمصنوعة من أجود المكونات وشغف الطهي.',
        searchPlaceholder: 'ابحث في القائمة...',
        allCategories: 'الكل',
        noItems: 'لم يتم العثور على عناصر تطابق بحثك.',
        addToOrder: 'أضف للطلب',
        backToMenu: 'العودة للقائمة',
        returnToMenu: 'العودة للقائمة',
        notFound: 'لم يتم العثور على العنصر',
      },
      offers: {
        title: 'عروض خاصة',
        subtitle: 'استفد من صفقاتنا الحصرية واجعل تجربة تناول الطعام الخاصة بك أكثر تميزاً.',
        promoCode: 'رمز الخصم',
        orderNow: 'اطلب الآن',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'نود أن نسمع منك. تواصل معنا للحجوزات أو المناسبات الخاصة أو أي استفسارات.',
        getInTouch: 'تواصل معنا',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        sendMessage: 'إرسال الرسالة',
        location: 'الموقع',
        phone: 'الهاتف',
        openingHours: 'ساعات العمل',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
