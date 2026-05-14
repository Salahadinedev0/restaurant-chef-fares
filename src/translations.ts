export type Language = 'ar' | 'fr';

export const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    brand: 'الشيف فارس',
    nav: {
      home: 'الرئيسية',
      offers: 'العروض',
      menu: 'القائمة',
      blog: 'المدونة',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'أهلاً بكم في مطعم الشيف فارس اليمني',
      subtitle: 'أصيل المذاق اليمني في قلب أنجمينا',
      cta1: 'احجز وجبتك',
      scroll: 'اسحب للأسفل',
    },
    offerDay: {
      title: 'عرض اليوم',
      badge: 'الأكثر طلباً',
      name: 'مندي لحم بلدي فاخر',
      desc: 'لحم تيس بلدي مطهو ببطء في حفرة المندي التقليدية مع أرز بسمتي طويل الحبة معطر بالزعفران والبهارات اليمنية الأصيلة. يُقدم مع سحاوق وجبنة.',
      price: '٩,٥٠٠',
      currency: 'FCFA',
      oldPrice: '١٢,٠٠٠',
      cta: 'أضف إلى الطلب',
    },
    categories: {
      title: 'قائمة الطعام',
      subtitle: 'أفضل الأطباق اليمنية المحضرة بكل حب من قبل الشيف فارس',
      main: {
        name: 'الأطباق الرئيسية',
        desc: 'رحلة إلى قلب النكهات العريقة'
      },
      grilled: {
        name: 'المشاوي',
        desc: 'مشاوي يمنية على الفحم بنكهة فريدة'
      },
      breakfast: {
        name: 'فطور شعبي',
        desc: 'ابدأ يومك بالأصالة'
      },
      appetizers: {
        name: 'المقبلات',
        desc: 'مقبلات خفيفة ونكهات عطرة'
      },
      drinks: {
        name: 'مشروبات وعصائر',
        desc: 'مشروبات يمنية و عصائر طازجة'
      },
      dessert: {
        name: 'الحلويات',
        desc: 'خاتمة حلوة لوجبتك'
      }
    },
    detailedMenu: {
      title: 'قائمة الطعام الكاملة',
      subtitle: 'كل ما لذ وطاب من المطبخ اليمني والشرقي',
      categories: {
        main: 'الأطباق الرئيسية',
        grilled: 'المشاوي',
        breakfast: 'الفطور',
        appetizers: 'المقبلات',
        drinks: 'المشروبات',
        dessert: 'الحلويات'
      },
      status: 'طبق ملكي متاح',
      currency: 'FCFA',
      appsTitle: 'المقبلات',
      dessertTitle: 'الحلويات والمشروبات',
      dessertPromoTitle: 'حلويات يمنية فاخرة',
      dessertPromoDesc: 'مزيج من العسل الطبيعي والمكسرات الفاخرة',
      dessertPromoPrice: '٤,٥٠٠',
      dessertPromoCTA: 'اطلب المزيد'
    },
    dishDetail: {
      ingredients: 'المكونات الأصيلة',
      nutrition: 'المعلومات الغذائية',
      calories: 'السعرات الحرارية',
      protein: 'البروتين',
      carbs: 'الكربوهيدرات',
      fat: 'الدهون',
      backMenu: 'العودة للقائمة',
      addToOrder: 'إضافة للطلب'
    },
    exclusives: {
      title: 'عروض حصرية',
      subtitle: 'لا تفوت صفقاتنا الرائعة المتاحة لفترة محدودة',
      family: {
        title: 'وجبة العائلة الكبرى',
        desc: 'تخفيض ٢٥٪ على جميع صواني المندي والمظبي العائلية. وفر الكثير اليوم عند الطلب.',
        old: '٦٠,٠٠٠ FCFA',
        new: '٤٥,٠٠٠ FCFA',
        cta: 'حجز العرض'
      },
    },
    newsletter: {
      title: 'لا تفوت عروضنا القادمة',
      desc: 'اشترك في قائمتنا البريدية لتصلك أحدث العروض الحصرية مباشرة إلى بريدك الإلكتروني.',
      placeholder: 'بريدك الإلكتروني',
      button: 'اشترك الآن',
      success: 'تم الاشتراك بنجاح! شكراً لك.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
    },
    familyRoyalMenu: {
      title: 'قائمة العائلة الملكية',
      subtitle: 'ولائم فاخرة صُممت خصيصاً لتجمع العائلة والأصدقاء حول أصالة المذاق',
      trays: {
        fullLamb: {
          name: 'صينية الخروف الملكي الكامل',
          desc: 'خروف كامل مطهو ببطء، يُقدم على فرش ضخم من الأرز البسمتي الفاخر، مزين بالكبد والمكسرات والزبيب.',
          price: '١٣٥,٠٠٠'
        },
        halfLamb: {
          name: 'صينية نصف الخروف الملكي',
          desc: 'نصف خروف مندي أو مظبي حسب اختياركم، مع أرز المندي الموزوز والصلصات الحارة.',
          price: '٧٠,٠٠٠'
        },
        mixedGrill: {
          name: 'صينية المشاوي العائلية الكبرى',
          desc: 'تشكيلة فاخرة من الكباب، الشيش طاووق، وريش الغنم، تُقدم مع الخبز والصلصات والمقبلات.',
          price: '٤٥,٠٠٠'
        }
      }
    },
    cart: {
      title: 'قائمة طلباتك',
      empty: 'قائمة الطلبات فارغة حالياً',
      total: 'المجموع الإجمالي',
      checkout: 'إتمام الطلب عبر واتساب',
      add: 'إضافة للطلب',
      remove: 'حذف',
      items: 'أصناف',
      success: 'تمت الإضافة بنجاح'
    },
    blog: {
      title: 'مدونة المذاق اليمني',
      subtitle: 'اكتشف أسرار المطبخ اليمني العريق وحكايات التوابل',
      cat: 'ثقافة الطهي',
      postTitle: 'سر تتبيلة المندي الأصيل: رحلة من حضرموت إلى مائدتكم',
      postDesc: 'نغوص في أعماق التقاليد لنكشف لكم عن خلطة البهارات السرية التي تجعل من المندي تجربة لا تُنسى...',
      readMore: 'اقرأ المزيد'
    },
    contact: {
      title: 'اتصل بنا',
      desc: 'نحن هنا لخدمتكم وتلبية تطلعاتكم في أي وقت. تفضل بزيارتنا في كليمات، أنجمينا - تشاد.',
      contactTitle: 'معلومات الاتصال',
      addressTitle: 'العنوان',
      addressName: 'كليمات، أنجمينا - تشاد',
      hoursTitle: 'ساعات العمل',
      hoursName: 'يومياً: ١٢:٠٠ ظهراً - ١٢:٠٠ منتصف الليل',
      phoneTitle: 'الهاتف / واتساب',
      phoneValue: '+235 62 66 61 61',
      socialTitle: 'تابعونا على التواصل الاجتماعي',
      cta: 'اطلب الآن عبر واتساب'
    },
    footer: {
      desc: 'نحن نؤمن بأن الطعام هو لغة الشعوب، لذا نحرص على تقديم أفضل تجربة يمنية أصيلة لكل ضيوفنا.',
      quickLinks: 'روابط سريعة',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      delivery: 'سياسة التوصيل',
      copyright: '© ٢٠٢٤ مطعم الشيف فارس اليمني. جميع الحقوق محفوظة.',
      madeBy: 'صمم بكل شغف في أنجمينا'
    }
  },
  fr: {
    dir: 'ltr',
    brand: 'Chef Faris',
    nav: {
      home: 'Accueil',
      offers: 'Offres',
      menu: 'Le Menu',
      blog: 'Le Blog',
      contact: 'Nous Contacter',
    },
    hero: {
      title: 'L\'authenticité de la cuisine yéménite chez le Chef Faris',
      subtitle: "Un voyage culinaire d'exception au cœur de N'Djamena",
      cta1: 'Réserver un plat',
      scroll: 'Découvrir',
    },
    offerDay: {
      title: "L'Offre du Jour",
      badge: 'Plat Signature',
      name: 'Mandi d\'Agneau Fermier Royale',
      desc: 'Agneau fermier cuit lentement dans un four traditionnel Mandi avec du riz basmati long grain parfumé au safran et aux épices yéménites authentiques. Servi avec sa sauce Sahawaq.',
      price: '9 500',
      currency: 'FCFA',
      oldPrice: '12 000',
      cta: 'Commander',
    },
    categories: {
      title: 'Notre Menu',
      subtitle: 'Les meilleurs mets yéménites préparés avec passion par le Chef Faris',
      main: {
        name: 'Plats Principaux',
        desc: 'Un voyage au cœur des saveurs ancestrales'
      },
      grilled: {
        name: 'Grillades',
        desc: 'Saveurs grillées au feu de bois'
      },
      breakfast: {
        name: 'Petit-Déjeuner',
        desc: 'Commencez la journée avec authenticité'
      },
      appetizers: {
        name: 'Entrées & Mezze',
        desc: 'Des préludes légers et parfumés'
      },
      drinks: {
        name: 'Boissons & Jus',
        desc: 'Rafraîchissements traditionnels et jus frais'
      },
      dessert: {
        name: 'Desserts',
        desc: 'Une touche sucrée pour finir'
      }
    },
    detailedMenu: {
      title: 'Notre Carte Complète',
      subtitle: 'Toutes les saveurs du Yémen et d\'Orient à votre table',
      categories: {
        main: 'Plats Principaux',
        grilled: 'Grillades',
        breakfast: 'Petit-Déjeuner',
        appetizers: 'Entrées',
        drinks: 'Boissons',
        dessert: 'Desserts'
      },
      status: 'Prêt à servir',
      currency: 'FCFA',
      appsTitle: 'Entrées',
      dessertTitle: 'Desserts & Boissons',
      dessertPromoTitle: 'Douceurs Yéménites de Luxe',
      dessertPromoDesc: 'Un mélange de miel naturel et de noix de premier choix',
      dessertPromoPrice: '4 500',
      dessertPromoCTA: 'Découvrir plus'
    },
    dishDetail: {
      ingredients: 'Ingrédients Authentiques',
      nutrition: 'Informations Nutritionnelles',
      calories: 'Calories',
      protein: 'Protéines',
      carbs: 'Glucides',
      fat: 'Lipides',
      backMenu: 'Retour au Menu',
      addToOrder: 'Ajouter à la commande'
    },
    exclusives: {
      title: 'Offres Exclusives',
      subtitle: 'Ne manquez pas nos offres limitées pour une expérience de partage',
      family: {
        title: 'Menu Famille Royale',
        desc: 'Réduction de 25% sur tous nos plats familiaux Mandi et Madhbi. Économisez 15.000 FCFA aujourd\'hui.',
        old: '60.000 FCFA',
        new: '45.000 FCFA',
        cta: 'Réserver l\'offre'
      },
    },
    newsletter: {
      title: 'Suivez nos nouveautés',
      desc: 'Inscrivez-vous à notre newsletter pour recevoir nos offres gourmandes en avant-première.',
      placeholder: 'Votre email',
      button: 'S\'inscrire',
      success: 'Inscription réussie ! Merci.',
      error: 'Une erreur est survenue. Veuillez réessayer.'
    },
    familyRoyalMenu: {
      title: 'Menu Famille Royale',
      subtitle: 'Des festins d\'exception conçus pour réunir famille et amis autour d\'une table authentique',
      trays: {
        fullLamb: {
          name: 'Plateau Agneau Royal Entier',
          desc: 'Un agneau entier cuit lentement, servi sur un lit géant de riz basmati de luxe, garni de foie, fruits secs et raisins.',
          price: '135 000'
        },
        halfLamb: {
          name: 'Plateau Demi-Agneau Royal',
          desc: 'Un demi-agneau Mandi ou Madhbi au choix, servi avec du riz Mandi parfumé et ses sauces piquantes.',
          price: '70 000'
        },
        mixedGrill: {
          name: 'Plateau Grillades Royales XXL',
          desc: 'Un assortiment prestige de kebabs, chiche taouk et côtelettes d\'agneau, servi avec pains, sauces et mezze.',
          price: '45 000'
        }
      }
    },
    cart: {
      title: 'Votre Commande',
      empty: 'Votre panier est vide',
      total: 'Total Général',
      checkout: 'Commander via WhatsApp',
      add: 'Ajouter',
      remove: 'Supprimer',
      items: 'articles',
      success: 'Ajouté avec succès'
    },
    blog: {
      title: 'Le Blog Culinaire',
      subtitle: 'Découvrez les secrets de la gastronomie ancestrale et l\'histoire des épices',
      cat: 'Culture Culinaire',
      postTitle: 'Le secret du Mandi authentique : un voyage de l\'Hadramout à votre table',
      postDesc: 'Plongez dans les profondeurs des traditions pour découvrir notre mélange d\'épices secret qui rend notre Mandi inoubliable...',
      readMore: 'Lire l\'article'
    },
    contact: {
      title: 'Contactez-Nous',
      desc: 'Nous sommes là pour vous servir. Rendez-vous à Klemat, N\'Djamena - Tchad pour une expérience culinaire inoubliable.',
      contactTitle: 'Informations de Contact',
      addressTitle: 'Adresse',
      addressName: 'Klemat, N\'Djamena - Tchad',
      hoursTitle: 'Horaires',
      hoursName: 'Quotidien : 12:00 - 00:00',
      phoneTitle: 'Téléphone / WhatsApp',
      phoneValue: '+235 62 66 61 61',
      socialTitle: 'Suivez-nous sur les réseaux sociaux',
      cta: 'Commander via WhatsApp'
    },
    footer: {
      desc: 'Nous croyons que la gastronomie est un pont entre les cultures. Nous nous engageons à offrir l\'excellence yéménite à chaque invité.',
      quickLinks: 'Liens Rapides',
      legal: 'Informations',
      privacy: 'Confidentialité',
      terms: 'Conditions Générales',
      delivery: 'Livraison',
      copyright: '© 2024 Restaurant Chef Faris Yéménite. Tous droits réservés.',
      madeBy: 'Conçu avec passion à N\'Djamena'
    }
  }
};
