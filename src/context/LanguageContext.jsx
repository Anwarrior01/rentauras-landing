import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    rentACar: 'Rent a Car',
    rentaurasX: 'RentaurasX',
    aboutUs: 'About Us',
    contact: 'Contact',
    downloadTheApp: 'Download the app',

    // Hero Section - Home
    heroTitle: 'Together, We Make a',
    heroTitleHighlight: 'Greater World',
    heroDescription: 'Whether you\'re commuting to work, meeting friends, or exploring new places, our service offers a smart, safe, and eco-friendly way to get around.',
    
    // Marketplace Hero
    marketplaceHeroTitle: 'Own your Dream',
    marketplaceHeroSubtitle: 'with Rentauras',
    marketplaceHeroDesc: 'With the Rentauras App, you\'re in control. Choose the way you rent and bring your dreams to drive.',
    marketplaceDescription: 'Rentauras makes car rental effortless. Built on trust, designed for simplicity, and available wherever your dreams take you.',
    
    // RentaurasX Hero
    rentaurasXHeroTitle: 'Your Ride, Your Way',
    rentaurasXHeroSubtitle: 'with RentaurasX',
    rentaurasXHeroDesc: 'Fast, reliable, and eco-friendly rides at your fingertips. Experience the future of urban mobility.',
    rentaurasXDescription: 'RentaurasX revolutionizes urban transportation. Safe rides, verified drivers, and sustainable mobility for the modern world.',
    
    // Stats
    cities: 'CITIES',
    citiesCount: '15+',
    countries: 'COUNTRIES',
    countriesCount: '1',
    downloads: 'APP DOWNLOAD',
    downloadsCount: '10K+',

    // Challenge Section
    challengeTitle1: 'Challenging injustice to',
    challengeHighlight: 'make the world a fairer',
    challengeTitle2: 'place for one billion people',
    challengeDescription: 'We challenge injustice and strive to create positive change in every community. Through our unwavering commitment, we aim to build a more inclusive and equitable world for all.',

    // Services Section
    servicesSubtitle: 'RENTAURAS APP',
    servicesTitle1: 'Our',
    servicesHighlight: 'Service',
    seeMore: 'See more',
    rentalServiceTitle: 'Rent a Car at Rentauras Marketplace',
    rentalServiceDesc: 'Discover premium vehicles from trusted hosts. Book instantly and enjoy flexible rental options for every journey.',
    rideServiceTitle: 'Get Your Ride at RentaurasX',
    rideServiceDesc: 'Fast, reliable rides at the tap of a button. Connect with professional drivers for comfortable city rides.',
    exploreRental: 'Passengers',
    requestRide: 'Passengers',
    learnMore: 'Learn more',

    // Safety Section
    safetySubtitle: 'SAFETY',
    safetyTitle1: 'Your safety is',
    safetyHighlight: 'our priority',
    safetySubtitleText: 'Stay on the safe side with Rentauras',
    safetyCardTitle: 'We want all of us to be on the same page about safety',
    safetyCardDescription: 'And so, we\'re calling this pact our safety pact - a 3-sided alliance between passengers, drivers and Rentauras, with mutual responsibilities for every single ride.',
    drivers: 'Drivers',
    users: 'Users',

    // Right Now Section
    featuresSubtitle: 'SAFETY',
    rightNowTitle1: 'Right now at',
    rightNowHighlight: 'Rentauras',
    womenToWomen: 'Women to Women',
    womenToWomenDesc: 'Safe rides exclusively for women, by women drivers. Creating a secure and comfortable environment for female passengers.',
    ecoFriendly: 'Green & Eco-Friendly',
    ecoFriendlyDesc: 'Electric and hybrid vehicles for environmentally conscious travelers. Reduce your carbon footprint with every ride.',
    trustedDrivers: 'Trusted Drivers',
    trustedDriversDesc: 'All our drivers are not strangers but part of our verified community. Background-checked and trained professionals.',

    // Journey Section
    journeyTitle1: 'From Startup to Global',
    journeyTitle2: 'Leader A Journey of Growth',
    journeyHighlight: 'and Innovation',
    journeyDescription: 'The true history of the technological phenomenon that is Rentauras, as told by its CEO.',
    
    // Marketplace Steps
    marketplaceStep1Title: 'Download & Sign Up',
    marketplaceStep1Desc: 'Create your account in seconds and join thousands of happy drivers.',
    marketplaceStep2Title: 'Choose Your Car',
    marketplaceStep2Desc: 'Browse our wide collection of premium vehicles from trusted hosts.',
    marketplaceStep3Title: 'Secure Payment',
    marketplaceStep3Desc: 'Pay securely and easily with our trusted payment system.',
    marketplaceStep4Title: 'Enjoy Your Ride',
    marketplaceStep4Desc: 'Hit the road and create unforgettable memories.',
    
    // RentaurasX Steps
    rentaurasXStep1Title: 'Download & Register',
    rentaurasXStep1Desc: 'Quick sign-up to start your electric journey.',
    rentaurasXStep2Title: 'Request Your Ride',
    rentaurasXStep2Desc: 'Book eco-friendly rides with verified professional drivers.',
    rentaurasXStep3Title: 'Track & Pay Securely',
    rentaurasXStep3Desc: 'Real-time tracking and cashless secure payments.',
    rentaurasXStep4Title: 'Arrive Comfortably',
    rentaurasXStep4Desc: 'Enjoy smooth rides in our electric and hybrid vehicles.',
    
    // Why Choose sections
    whyMarketplaceTitle: 'Why Choose Rentauras Marketplace?',
    whyRentaurasXTitle: 'Why Choose RentaurasX?',
    
    // Marketplace Features
    support247: '24/7 Active Support',
    support247Desc: 'Round-the-clock assistance for all your rental needs.',
    easyContact: 'Easy Contact',
    easyContactDesc: 'Reach us anytime through multiple channels.',
    fullInsurance: 'Full Insurance Coverage',
    fullInsuranceDesc: 'Drive with peace of mind with comprehensive coverage.',
    securePayments: 'Secure Payments',
    securePaymentsDesc: 'Your payment information is always protected.',
    verifiedProfiles: 'Verified Profiles',
    verifiedProfilesDesc: 'All hosts are verified for your safety and security.',
    
    // RentaurasX Features
    womenToWomenService: 'Women to Women Service',
    // womenToWomenDesc: 'Exclusive service where female passengers are driven by female drivers.',
    ecoFriendlyRides: 'Eco-Friendly Rides',
    ecoFriendlyRidesDesc: 'Electric and hybrid vehicles for sustainable transportation.',
    professionalDrivers: 'Professional Drivers',
    professionalDriversDesc: 'All our drivers are verified professionals, not strangers.',
    realTimeTracking: 'Real-time Tracking',
    realTimeTrackingDesc: 'Track your ride in real-time for complete peace of mind.',
    fairPricing: 'Fair & Transparent Pricing',
    fairPricingDesc: 'No surge pricing, no hidden fees. Fair rates for everyone.',
    
    // App Screenshots
    browseBookTitle: 'Browse & Book Instantly',
    browseBookDesc: 'Discover thousands of cars in your area. Filter by price, location, and features to find your perfect ride.',
    secureExperienceTitle: 'Secure & Simple Experience',
    secureExperienceDesc: 'Your safety is our priority. All transactions are secured and all hosts are verified before joining our platform.',
    bookTrackTitle: 'Book & Track Instantly',
    bookTrackDesc: 'Request rides instantly and track your driver in real-time. Know exactly where your ride is at all times.',
    safeExperienceTitle: 'Safe & Trusted Experience',
    safeExperienceDesc: 'Your safety is our priority. All drivers are verified professionals and all rides are tracked for maximum security.',
    
    // Security sections
    securityTitle: 'Your safety, always on',
    securityDesc: 'We monitor your transactions around the clock and secure your data with top-level protection. So you can rent, drive, and smile, stress-free.',
    journeySecurityTitle: 'Your journey, always secure',
    journeySecurityDesc: 'We\'re the first to introduce women-to-women service in Morocco. All rides are tracked, all drivers are professionals, and your safety is guaranteed.',
    downloadRentauras: 'Download Rentauras',
    downloadRentaurasX: 'Download RentaurasX',
    
    // FAQ
    faqTitle: 'Frequently asked questions',
    
    // Marketplace FAQ
    marketplaceFaq1Q: 'What is Rentauras Marketplace and how does it work?',
    marketplaceFaq1A: 'Rentauras Marketplace is a peer-to-peer car rental platform that connects car owners with renters. Simply browse available cars, book instantly, and enjoy your ride.',
    marketplaceFaq2Q: 'Where can I rent cars with Rentauras?',
    marketplaceFaq2A: 'Rentauras operates in major cities across Morocco. Check our app to see available cars in your area.',
    marketplaceFaq3Q: 'Is insurance included with my rental?',
    marketplaceFaq3A: 'Yes, all rentals include comprehensive insurance coverage for your peace of mind.',
    marketplaceFaq4Q: 'How do I become a host on Rentauras?',
    marketplaceFaq4A: 'Download our app, verify your identity and car documents, and start earning by renting out your vehicle.',
    marketplaceFaq5Q: 'What payment methods do you accept?',
    marketplaceFaq5A: 'We accept all major credit cards, debit cards, and digital payment methods for your convenience.',
    
    // RentaurasX FAQ
    rentaurasXFaq1Q: 'What is RentaurasX and how does it work?',
    rentaurasXFaq1A: 'RentaurasX is a ride-hailing service that connects passengers with verified professional drivers. Simply request a ride through our app and get picked up in minutes.',
    rentaurasXFaq2Q: 'What makes RentaurasX different from other ride services?',
    rentaurasXFaq2A: 'We\'re the first in Morocco to offer women-to-women service, use eco-friendly vehicles, and all our drivers are verified professionals, not strangers.',
    rentaurasXFaq3Q: 'Are your vehicles eco-friendly?',
    rentaurasXFaq3A: 'Yes! We prioritize electric and hybrid vehicles to reduce environmental impact and provide sustainable transportation.',
    rentaurasXFaq4Q: 'How does the women-to-women service work?',
    rentaurasXFaq4A: 'Female passengers can choose to be driven exclusively by female drivers, ensuring comfort and safety for women travelers.',
    rentaurasXFaq5Q: 'What payment methods do you accept?',
    rentaurasXFaq5A: 'We accept all major credit cards, debit cards, and digital payment methods. All payments are cashless and secure.',
    
    // Common
    getApp: 'Get the',
    app: 'app',
    instantBooking: 'Instant booking',
    noHiddenFees: 'No hidden fees',
    secureAndTrusted: 'Secure & Trusted',
    verifiedHosts: 'Verified hosts',
    verifiedDrivers: 'Verified drivers',
    cashlessPayments: 'Cashless payments',
    realTimeTrackingFeature: 'Real-time tracking',
    ecoFriendlyVehicles: 'Eco-friendly vehicles'
  },
  ar: {
    // Navigation
    rentACar: 'استأجر سيارة',
    rentaurasX: 'رينتوراس إكس',
    aboutUs: 'معلومات عنا',
    contact: 'اتصل بنا',
    downloadTheApp: 'حمل التطبيق',

    // Hero Section - Home
    heroTitle: 'معاً، نصنع عالماً',
    heroTitleHighlight: 'أفضل',
    heroDescription: 'سواء كنت تتنقل للعمل، أو تلتقي بالأصدقاء، أو تستكشف أماكن جديدة، تقدم خدمتنا طريقة ذكية وآمنة وصديقة للبيئة للتنقل.',
    
    // Marketplace Hero
    marketplaceHeroTitle: 'امتلك حلمك',
    marketplaceHeroSubtitle: 'مع رينتوراس',
    marketplaceHeroDesc: 'مع تطبيق رينتوراس، أنت المتحكم. اختر طريقتك في الاستئجار وحقق أحلامك في القيادة.',
    marketplaceDescription: 'رينتوراس يجعل استئجار السيارات أمراً سهلاً. مبني على الثقة، مصمم للبساطة، ومتاح أينما تأخذك أحلامك.',
    
    // RentaurasX Hero
    rentaurasXHeroTitle: 'رحلتك، بطريقتك',
    rentaurasXHeroSubtitle: 'مع رينتوراس إكس',
    rentaurasXHeroDesc: 'رحلات سريعة وموثوقة وصديقة للبيئة في متناول يدك. اكتشف مستقبل التنقل الحضري.',
    rentaurasXDescription: 'رينتوراس إكس يثور النقل الحضري. رحلات آمنة، سائقون موثقون، وتنقل مستدام للعالم الحديث.',
    
    // Stats
    cities: 'المدن',
    citiesCount: '15+',
    countries: 'البلدان',
    countriesCount: '1',
    downloads: 'تحميل التطبيق',
    downloadsCount: '10K+',

    // Challenge Section
    challengeTitle1: 'تحدي الظلم لجعل',
    challengeHighlight: 'العالم مكاناً أكثر عدالة',
    challengeTitle2: 'لمليار شخص',
    challengeDescription: 'نتحدى الظلم ونسعى لخلق تغيير إيجابي في كل مجتمع. من خلال التزامنا الثابت، نهدف لبناء عالم أكثر شمولية وعدالة للجميع.',

    // Services Section
    servicesSubtitle: 'تطبيق رينتوراس',
    servicesTitle1: 'خدماتنا',
    servicesHighlight: 'المتميزة',
    seeMore: 'شاهد المزيد',
    rentalServiceTitle: 'استأجر سيارة من سوق رينتوراس',
    rentalServiceDesc: 'اكتشف المركبات المتميزة من المضيفين الموثوقين. احجز فوراً واستمتع بخيارات إيجار مرنة لكل رحلة.',
    rideServiceTitle: 'احصل على رحلتك مع رينتوراس إكس',
    rideServiceDesc: 'رحلات سريعة وموثوقة بلمسة زر. تواصل مع سائقين محترفين لرحلات مريحة في المدينة.',
    exploreRental: 'المسافرون',
    requestRide: 'المسافرون',
    learnMore: 'تعرف أكثر',

    // Safety Section
    safetySubtitle: 'الأمان',
    safetyTitle1: 'أمانك هو',
    safetyHighlight: 'أولويتنا',
    safetySubtitleText: 'ابق في الجانب الآمن مع رينتوراس',
    safetyCardTitle: 'نريد من الجميع أن يكونوا على نفس الصفحة حول الأمان',
    safetyCardDescription: 'ولذلك، نطلق على هذا الاتفاق ميثاق الأمان الخاص بنا - تحالف ثلاثي بين المسافرين والسائقين ورينتوراس، مع مسؤوليات متبادلة لكل رحلة.',
    drivers: 'السائقون',
    users: 'المستخدمون',

    // Right Now Section
    featuresSubtitle: 'الأمان',
    rightNowTitle1: 'الآن في',
    rightNowHighlight: 'رينتوراس',
    womenToWomen: 'من النساء للنساء',
    womenToWomenDesc: 'رحلات آمنة حصرياً للنساء، من قبل سائقات. خلق بيئة آمنة ومريحة للمسافرات.',
    ecoFriendly: 'أخضر وصديق للبيئة',
    ecoFriendlyDesc: 'مركبات كهربائية وهجينة للمسافرين المهتمين بالبيئة. قلل من بصمتك الكربونية مع كل رحلة.',
    trustedDrivers: 'سائقون موثوقون',
    trustedDriversDesc: 'جميع سائقينا ليسوا غرباء بل جزء من مجتمعنا الموثق. محترفون تم فحص خلفياتهم وتدريبهم.',

    // Journey Section
    journeyTitle1: 'من شركة ناشئة إلى رائد',
    journeyTitle2: 'عالمي رحلة نمو',
    journeyHighlight: 'وابتكار',
    journeyDescription: 'التاريخ الحقيقي للظاهرة التكنولوجية التي هي رينتوراس، كما يرويها الرئيس التنفيذي.',
    
    // Marketplace Steps
    marketplaceStep1Title: 'التحميل والتسجيل',
    marketplaceStep1Desc: 'أنشئ حسابك في ثوانٍ وانضم إلى آلاف السائقين السعداء.',
    marketplaceStep2Title: 'اختر سيارتك',
    marketplaceStep2Desc: 'تصفح مجموعتنا الواسعة من المركبات المتميزة من المضيفين الموثوقين.',
    marketplaceStep3Title: 'دفع آمن',
    marketplaceStep3Desc: 'ادفع بأمان وسهولة مع نظام الدفع الموثوق الخاص بنا.',
    marketplaceStep4Title: 'استمتع برحلتك',
    marketplaceStep4Desc: 'انطلق في الطريق واخلق ذكريات لا تُنسى.',
    
    // RentaurasX Steps
    rentaurasXStep1Title: 'التحميل والتسجيل',
    rentaurasXStep1Desc: 'تسجيل سريع لبدء رحلتك الكهربائية.',
    rentaurasXStep2Title: 'اطلب رحلتك',
    rentaurasXStep2Desc: 'احجز رحلات صديقة للبيئة مع سائقين محترفين موثقين.',
    rentaurasXStep3Title: 'تتبع وادفع بأمان',
    rentaurasXStep3Desc: 'تتبع في الوقت الفعلي ومدفوعات آمنة بدون نقد.',
    rentaurasXStep4Title: 'وصل براحة',
    rentaurasXStep4Desc: 'استمتع برحلات سلسة في مركباتنا الكهربائية والهجينة.',
    
    // Why Choose sections
    whyMarketplaceTitle: 'لماذا تختار سوق رينتوراس؟',
    whyRentaurasXTitle: 'لماذا تختار رينتوراس إكس؟',
    
    // Marketplace Features
    support247: 'دعم نشط 24/7',
    support247Desc: 'مساعدة على مدار الساعة لجميع احتياجات الإيجار الخاصة بك.',
    easyContact: 'تواصل سهل',
    easyContactDesc: 'تواصل معنا في أي وقت من خلال قنوات متعددة.',
    fullInsurance: 'تغطية تأمين كاملة',
    fullInsuranceDesc: 'اقود براحة بال مع تغطية شاملة.',
    securePayments: 'مدفوعات آمنة',
    securePaymentsDesc: 'معلومات الدفع الخاصة بك محمية دائماً.',
    verifiedProfiles: 'ملفات شخصية موثقة',
    verifiedProfilesDesc: 'جميع المضيفين موثقون من أجل سلامتك وأمانك.',
    
    // RentaurasX Features
    womenToWomenService: 'خدمة من النساء للنساء',
    // womenToWomenDesc: 'خدمة حصرية حيث المسافرات يُقدن من قبل سائقات.',
    ecoFriendlyRides: 'رحلات صديقة للبيئة',
    ecoFriendlyRidesDesc: 'مركبات كهربائية وهجينة لنقل مستدام.',
    professionalDrivers: 'سائقون محترفون',
    professionalDriversDesc: 'جميع سائقينا محترفون موثقون، ليسوا غرباء.',
    realTimeTracking: 'تتبع في الوقت الفعلي',
    realTimeTrackingDesc: 'تتبع رحلتك في الوقت الفعلي لراحة بال كاملة.',
    fairPricing: 'تسعير عادل وشفاف',
    fairPricingDesc: 'لا توجد أسعار مرتفعة، لا توجد رسوم مخفية. أسعار عادلة للجميع.',
    
    // App Screenshots
    browseBookTitle: 'تصفح واحجز فوراً',
    browseBookDesc: 'اكتشف آلاف السيارات في منطقتك. صفي حسب السعر والموقع والميزات لتجد رحلتك المثالية.',
    secureExperienceTitle: 'تجربة آمنة وبسيطة',
    secureExperienceDesc: 'سلامتك هي أولويتنا. جميع المعاملات مؤمنة وجميع المضيفين موثقون قبل الانضمام لمنصتنا.',
    bookTrackTitle: 'احجز وتتبع فوراً',
    bookTrackDesc: 'اطلب الرحلات فوراً وتتبع سائقك في الوقت الفعلي. اعرف بالضبط أين رحلتك في جميع الأوقات.',
    safeExperienceTitle: 'تجربة آمنة وموثوقة',
    safeExperienceDesc: 'سلامتك هي أولويتنا. جميع السائقين محترفون موثقون وجميع الرحلات متتبعة لأقصى أمان.',
    
    // Security sections
    securityTitle: 'سلامتك، دائماً مشتغلة',
    securityDesc: 'نراقب معاملاتك على مدار الساعة ونؤمن بياناتك بحماية من المستوى الأعلى. لذلك يمكنك الاستئجار والقيادة والابتسام، بدون ضغط.',
    journeySecurityTitle: 'رحلتك، دائماً آمنة',
    journeySecurityDesc: 'نحن الأوائل في تقديم خدمة من النساء للنساء في المغرب. جميع الرحلات متتبعة، جميع السائقين محترفون، وسلامتك مضمونة.',
    downloadRentauras: 'حمل رينتوراس',
    downloadRentaurasX: 'حمل رينتوراس إكس',
    
    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    
    // Marketplace FAQ
    marketplaceFaq1Q: 'ما هو سوق رينتوراس وكيف يعمل؟',
    marketplaceFaq1A: 'سوق رينتوراس هو منصة إيجار سيارات من نظير لنظير تربط بين مالكي السيارات والمستأجرين. ببساطة تصفح السيارات المتاحة، احجز فوراً، واستمتع برحلتك.',
    marketplaceFaq2Q: 'أين يمكنني استئجار السيارات مع رينتوراس؟',
    marketplaceFaq2A: 'رينتوراس تعمل في المدن الكبرى عبر المغرب. تحقق من تطبيقنا لرؤية السيارات المتاحة في منطقتك.',
    marketplaceFaq3Q: 'هل التأمين مشمول مع إيجاري؟',
    marketplaceFaq3A: 'نعم، جميع عمليات الإيجار تشمل تغطية تأمين شاملة لراحة بالك.',
    marketplaceFaq4Q: 'كيف أصبح مضيفاً على رينتوراس؟',
    marketplaceFaq4A: 'حمل تطبيقنا، وثق هويتك ووثائق سيارتك، وابدأ في الكسب من خلال إيجار مركبتك.',
    marketplaceFaq5Q: 'ما طرق الدفع التي تقبلونها؟',
    marketplaceFaq5A: 'نقبل جميع بطاقات الائتمان الرئيسية وبطاقات الخصم وطرق الدفع الرقمية لراحتك.',
    
    // RentaurasX FAQ
    rentaurasXFaq1Q: 'ما هو رينتوراس إكس وكيف يعمل؟',
    rentaurasXFaq1A: 'رينتوراس إكس هو خدمة طلب الرحلات التي تربط المسافرين بسائقين محترفين موثقين. ببساطة اطلب رحلة من خلال تطبيقنا واحصل على الاستلام في دقائق.',
    rentaurasXFaq2Q: 'ما الذي يجعل رينتوراس إكس مختلفاً عن خدمات الرحلات الأخرى؟',
    rentaurasXFaq2A: 'نحن الأوائل في المغرب في تقديم خدمة من النساء للنساء، واستخدام مركبات صديقة للبيئة، وجميع سائقينا محترفون موثقون، ليسوا غرباء.',
    rentaurasXFaq3Q: 'هل مركباتكم صديقة للبيئة؟',
    rentaurasXFaq3A: 'نعم! نعطي الأولوية للمركبات الكهربائية والهجينة لتقليل التأثير البيئي وتوفير نقل مستدام.',
    rentaurasXFaq4Q: 'كيف تعمل خدمة من النساء للنساء؟',
    rentaurasXFaq4A: 'المسافرات يمكنهن اختيار أن يُقدن حصرياً من قبل سائقات، مما يضمن الراحة والأمان للمسافرات.',
    rentaurasXFaq5Q: 'ما طرق الدفع التي تقبلونها؟',
    rentaurasXFaq5A: 'نقبل جميع بطاقات الائتمان الرئيسية وبطاقات الخصم وطرق الدفع الرقمية. جميع المدفوعات بدون نقد وآمنة.',
    
    // Common
    getApp: 'احصل على',
    app: 'التطبيق',
    instantBooking: 'حجز فوري',
    noHiddenFees: 'لا توجد رسوم مخفية',
    secureAndTrusted: 'آمن وموثوق',
    verifiedHosts: 'مضيفون موثقون',
    verifiedDrivers: 'سائقون موثقون',
    cashlessPayments: 'مدفوعات بدون نقد',
    realTimeTrackingFeature: 'تتبع في الوقت الفعلي',
    ecoFriendlyVehicles: 'مركبات صديقة للبيئة'
  },
  fr: {
    // Navigation
    rentACar: 'Louer une voiture',
    rentaurasX: 'RentaurasX',
    aboutUs: 'À propos',
    contact: 'Contact',
    downloadTheApp: 'Télécharger l\'app',

    // Hero Section - Home
    heroTitle: 'Ensemble, Nous Créons un',
    heroTitleHighlight: 'Monde Meilleur',
    heroDescription: 'Que vous vous rendiez au travail, rencontriez des amis ou exploriez de nouveaux endroits, notre service offre un moyen intelligent, sûr et respectueux de l\'environnement de se déplacer.',
    
    // Marketplace Hero
    marketplaceHeroTitle: 'Possédez votre Rêve',
    marketplaceHeroSubtitle: 'avec Rentauras',
    marketplaceHeroDesc: 'Avec l\'App Rentauras, vous avez le contrôle. Choisissez votre façon de louer et réalisez vos rêves de conduite.',
    marketplaceDescription: 'Rentauras rend la location de voiture sans effort. Basé sur la confiance, conçu pour la simplicité, et disponible où que vos rêves vous mènent.',
    
    // RentaurasX Hero
    rentaurasXHeroTitle: 'Votre Course, Votre Façon',
    rentaurasXHeroSubtitle: 'avec RentaurasX',
    rentaurasXHeroDesc: 'Courses rapides, fiables et écologiques à portée de main. Découvrez l\'avenir de la mobilité urbaine.',
    rentaurasXDescription: 'RentaurasX révolutionne le transport urbain. Courses sûres, conducteurs vérifiés, et mobilité durable pour le monde moderne.',
    
    // Stats
    cities: 'VILLES',
    citiesCount: '15+',
    countries: 'PAYS',
    countriesCount: '1',
    downloads: 'TÉLÉCHARGEMENT APP',
    downloadsCount: '10K+',

    // Challenge Section
    challengeTitle1: 'Défier l\'injustice pour',
    challengeHighlight: 'faire du monde un endroit plus juste',
    challengeTitle2: 'pour un milliard de personnes',
    challengeDescription: 'Nous défions l\'injustice et nous efforçons de créer un changement positif dans chaque communauté. Grâce à notre engagement inébranlable, nous visons à construire un monde plus inclusif et équitable pour tous.',

    // Services Section
    servicesSubtitle: 'APP RENTAURAS',
    servicesTitle1: 'Notre',
    servicesHighlight: 'Service',
    seeMore: 'Voir plus',
    rentalServiceTitle: 'Louer une Voiture chez Rentauras Marketplace',
    rentalServiceDesc: 'Découvrez des véhicules premium d\'hôtes de confiance. Réservez instantanément et profitez d\'options de location flexibles pour chaque voyage.',
    rideServiceTitle: 'Obtenez Votre Course avec RentaurasX',
    rideServiceDesc: 'Courses rapides et fiables d\'un simple tap. Connectez-vous avec des chauffeurs professionnels pour des trajets confortables en ville.',
    exploreRental: 'Passagers',
    requestRide: 'Passagers',
    learnMore: 'En savoir plus',

    // Safety Section
    safetySubtitle: 'SÉCURITÉ',
    safetyTitle1: 'Votre sécurité est',
    safetyHighlight: 'notre priorité',
    safetySubtitleText: 'Restez du côté sûr avec Rentauras',
    safetyCardTitle: 'Nous voulons que nous soyons tous sur la même page concernant la sécurité',
    safetyCardDescription: 'Et donc, nous appelons ce pacte notre pacte de sécurité - une alliance à 3 voies entre passagers, chauffeurs et Rentauras, avec des responsabilités mutuelles pour chaque trajet.',
    drivers: 'Chauffeurs',
    users: 'Utilisateurs',

    // Right Now Section
    featuresSubtitle: 'SÉCURITÉ',
    rightNowTitle1: 'En ce moment chez',
    rightNowHighlight: 'Rentauras',
    womenToWomen: 'Femme à Femme',
    womenToWomenDesc: 'Trajets sécurisés exclusivement pour les femmes, par des conductrices. Créer un environnement sûr et confortable pour les passagères.',
    ecoFriendly: 'Vert & Éco-responsable',
    ecoFriendlyDesc: 'Véhicules électriques et hybrides pour les voyageurs soucieux de l\'environnement. Réduisez votre empreinte carbone à chaque trajet.',
    trustedDrivers: 'Chauffeurs de Confiance',
    trustedDriversDesc: 'Tous nos chauffeurs ne sont pas des étrangers mais font partie de notre communauté vérifiée. Professionnels vérifiés et formés.',

    // Journey Section
    journeyTitle1: 'De Startup à Leader',
    journeyTitle2: 'Mondial Un Voyage de Croissance',
    journeyHighlight: 'et d\'Innovation',
    journeyDescription: 'La vraie histoire du phénomène technologique qu\'est Rentauras, racontée par son PDG.',
    
    // Marketplace Steps
    marketplaceStep1Title: 'Télécharger & S\'inscrire',
    marketplaceStep1Desc: 'Créez votre compte en secondes et rejoignez des milliers de conducteurs heureux.',
    marketplaceStep2Title: 'Choisir Votre Voiture',
    marketplaceStep2Desc: 'Parcourez notre large collection de véhicules premium d\'hôtes de confiance.',
    marketplaceStep3Title: 'Paiement Sécurisé',
    marketplaceStep3Desc: 'Payez en toute sécurité et facilement avec notre système de paiement de confiance.',
    marketplaceStep4Title: 'Profitez de Votre Course',
    marketplaceStep4Desc: 'Prenez la route et créez des souvenirs inoubliables.',
    
    // RentaurasX Steps
    rentaurasXStep1Title: 'Télécharger & S\'enregistrer',
    rentaurasXStep1Desc: 'Inscription rapide pour commencer votre voyage électrique.',
    rentaurasXStep2Title: 'Demander Votre Course',
    rentaurasXStep2Desc: 'Réservez des courses écologiques avec des conducteurs professionnels vérifiés.',
    rentaurasXStep3Title: 'Suivre & Payer en Sécurité',
    rentaurasXStep3Desc: 'Suivi en temps réel et paiements sécurisés sans espèces.',
    rentaurasXStep4Title: 'Arriver Confortablement',
    rentaurasXStep4Desc: 'Profitez de trajets fluides dans nos véhicules électriques et hybrides.',
    
    // Why Choose sections
    whyMarketplaceTitle: 'Pourquoi Choisir Rentauras Marketplace?',
    whyRentaurasXTitle: 'Pourquoi Choisir RentaurasX?',
    
    // Marketplace Features
    support247: 'Support Actif 24/7',
    support247Desc: 'Assistance 24h/24 pour tous vos besoins de location.',
    easyContact: 'Contact Facile',
    easyContactDesc: 'Contactez-nous à tout moment via plusieurs canaux.',
    fullInsurance: 'Couverture Assurance Complète',
    fullInsuranceDesc: 'Conduisez l\'esprit tranquille avec une couverture complète.',
    securePayments: 'Paiements Sécurisés',
    securePaymentsDesc: 'Vos informations de paiement sont toujours protégées.',
    verifiedProfiles: 'Profils Vérifiés',
    verifiedProfilesDesc: 'Tous les hôtes sont vérifiés pour votre sécurité.',
    
    // RentaurasX Features
    womenToWomenService: 'Service Femme à Femme',
    // womenToWomenDesc: 'Service exclusif où les passagères sont conduites par des conductrices.',
    ecoFriendlyRides: 'Courses Éco-responsables',
    ecoFriendlyRidesDesc: 'Véhicules électriques et hybrides pour un transport durable.',
    professionalDrivers: 'Conducteurs Professionnels',
    professionalDriversDesc: 'Tous nos conducteurs sont des professionnels vérifiés, pas des étrangers.',
    realTimeTracking: 'Suivi Temps Réel',
    realTimeTrackingDesc: 'Suivez votre course en temps réel pour une tranquillité d\'esprit complète.',
    fairPricing: 'Prix Équitable & Transparent',
    fairPricingDesc: 'Pas de tarifs majorés, pas de frais cachés. Tarifs équitables pour tous.',
    
    // App Screenshots
    browseBookTitle: 'Parcourir & Réserver Instantanément',
    browseBookDesc: 'Découvrez des milliers de voitures dans votre région. Filtrez par prix, localisation et fonctionnalités pour trouver votre trajet parfait.',
    secureExperienceTitle: 'Expérience Sécurisée & Simple',
    secureExperienceDesc: 'Votre sécurité est notre priorité. Toutes les transactions sont sécurisées et tous les hôtes sont vérifiés avant de rejoindre notre plateforme.',
    bookTrackTitle: 'Réserver & Suivre Instantanément',
    bookTrackDesc: 'Demandez des courses instantanément et suivez votre conducteur en temps réel. Sachez exactement où se trouve votre course à tout moment.',
    safeExperienceTitle: 'Expérience Sûre & Fiable',
    safeExperienceDesc: 'Votre sécurité est notre priorité. Tous les conducteurs sont des professionnels vérifiés et toutes les courses sont suivies pour une sécurité maximale.',
    
    // Security sections
    securityTitle: 'Votre sécurité, toujours active',
    securityDesc: 'Nous surveillons vos transactions 24h/24 et sécurisons vos données avec une protection de haut niveau. Ainsi vous pouvez louer, conduire et sourire, sans stress.',
    journeySecurityTitle: 'Votre voyage, toujours sécurisé',
    journeySecurityDesc: 'Nous sommes les premiers à introduire le service femme-à-femme au Maroc. Toutes les courses sont suivies, tous les conducteurs sont des professionnels, et votre sécurité est garantie.',
    downloadRentauras: 'Télécharger Rentauras',
    downloadRentaurasX: 'Télécharger RentaurasX',
    
    // FAQ
    faqTitle: 'Questions fréquemment posées',
    
    // Marketplace FAQ
    marketplaceFaq1Q: 'Qu\'est-ce que Rentauras Marketplace et comment ça marche?',
    marketplaceFaq1A: 'Rentauras Marketplace est une plateforme de location de voitures pair-à-pair qui connecte les propriétaires de voitures avec les locataires. Parcourez simplement les voitures disponibles, réservez instantanément et profitez de votre trajet.',
    marketplaceFaq2Q: 'Où puis-je louer des voitures avec Rentauras?',
    marketplaceFaq2A: 'Rentauras opère dans les grandes villes du Maroc. Vérifiez notre app pour voir les voitures disponibles dans votre région.',
    marketplaceFaq3Q: 'L\'assurance est-elle incluse avec ma location?',
    marketplaceFaq3A: 'Oui, toutes les locations incluent une couverture d\'assurance complète pour votre tranquillité d\'esprit.',
    marketplaceFaq4Q: 'Comment devenir hôte sur Rentauras?',
    marketplaceFaq4A: 'Téléchargez notre app, vérifiez votre identité et les documents de votre voiture, et commencez à gagner en louant votre véhicule.',
    marketplaceFaq5Q: 'Quels modes de paiement acceptez-vous?',
    marketplaceFaq5A: 'Nous acceptons toutes les principales cartes de crédit, cartes de débit et méthodes de paiement numérique pour votre commodité.',
    
    // RentaurasX FAQ
    rentaurasXFaq1Q: 'Qu\'est-ce que RentaurasX et comment ça marche?',
    rentaurasXFaq1A: 'RentaurasX est un service de transport qui connecte les passagers avec des conducteurs professionnels vérifiés. Demandez simplement une course via notre app et faites-vous récupérer en quelques minutes.',
    rentaurasXFaq2Q: 'Qu\'est-ce qui rend RentaurasX différent des autres services de course?',
    rentaurasXFaq2A: 'Nous sommes les premiers au Maroc à offrir un service femme-à-femme, utiliser des véhicules écologiques, et tous nos conducteurs sont des professionnels vérifiés, pas des étrangers.',
    rentaurasXFaq3Q: 'Vos véhicules sont-ils écologiques?',
    rentaurasXFaq3A: 'Oui! Nous privilégions les véhicules électriques et hybrides pour réduire l\'impact environnemental et fournir un transport durable.',
    rentaurasXFaq4Q: 'Comment fonctionne le service femme-à-femme?',
    rentaurasXFaq4A: 'Les passagères peuvent choisir d\'être conduites exclusivement par des conductrices, assurant confort et sécurité pour les voyageuses.',
    rentaurasXFaq5Q: 'Quels modes de paiement acceptez-vous?',
    rentaurasXFaq5A: 'Nous acceptons toutes les principales cartes de crédit, cartes de débit et méthodes de paiement numérique. Tous les paiements sont sans espèces et sécurisés.',
    
    // Common
    getApp: 'Obtenez',
    app: 'l\'app',
    instantBooking: 'Réservation instantanée',
    noHiddenFees: 'Pas de frais cachés',
    secureAndTrusted: 'Sécurisé & Fiable',
    verifiedHosts: 'Hôtes vérifiés',
    verifiedDrivers: 'Conducteurs vérifiés',
    cashlessPayments: 'Paiements sans espèces',
    realTimeTrackingFeature: 'Suivi temps réel',
    ecoFriendlyVehicles: 'Véhicules écologiques'
  }
};

// Function to detect browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Extract language code (e.g., 'en' from 'en-US')
  const langCode = browserLang.split('-')[0];
  
  // Return supported language or default to English
  return translations[langCode] ? langCode : 'en';
};

// Function to get saved language from localStorage or browser default
const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem('rentauras_language');
    if (saved && translations[saved]) {
      return saved;
    }
    return getBrowserLanguage();
  } catch (error) {
    return getBrowserLanguage();
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getSavedLanguage);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('rentauras_language', language);
    } catch (error) {
      console.warn('Could not save language preference:', error);
    }
  }, [language]);

  const setLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
    }
  };

  const t = translations[language];

  const value = {
    language,
    setLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};