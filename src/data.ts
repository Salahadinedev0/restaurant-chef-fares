import { Language } from './translations';

export interface MenuItem {
  name: string;
  price: string;
  rawPrice: number;
  desc: string;
  longDesc?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fat?: string;
  };
  image: string;
  featured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const GET_CATEGORIES = (t: any) => [
  { 
    id: 'main', 
    name: t.categories.main.name, 
    image: 'https://imglink.cc/cdn/e_kaXMAS5D.jpeg',
    desc: t.categories.main.desc
  },
  { 
    id: 'breakfast', 
    name: t.categories.breakfast.name, 
    image: 'https://imglink.cc/cdn/8S64K5F_mk.png',
    desc: t.categories.breakfast.desc
  },
  { 
    id: 'grilled', 
    name: t.categories.grilled.name, 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    desc: t.categories.grilled.desc
  },
  { 
    id: 'appetizers', 
    name: t.categories.appetizers.name, 
    image: 'https://imglink.cc/cdn/rb-5X-HvLM.png',
    desc: t.categories.appetizers.desc
  },
  { 
    id: 'drinks', 
    name: t.categories.drinks.name, 
    image: 'https://imglink.cc/cdn/LoXcCRYRl5.png',
    desc: t.categories.drinks.desc
  },
  { 
    id: 'dessert', 
    name: t.categories.dessert.name, 
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    desc: t.categories.dessert.desc
  },
];

export const GET_MENU_ITEMS = (lang: Language): Record<string, MenuItem[]> => ({
  main: [
    { 
      name: lang === 'ar' ? 'خروف كامل ملكي' : 'Agneau Royal Entier', 
      price: '١٤,٠٠٠', 
      rawPrice: 14000, 
      desc: lang === 'ar' ? 'وليمة ملكية فاخرة تُحضر بأجود أنواع اللحم اليمني' : 'Banquet royal préparé avec la meilleure viande yéménite', 
      longDesc: lang === 'ar' 
        ? 'خروف كامل يُطهى ببطء في أفران المندي التقليدية لساعات طويلة حتى يذوب اللحم عن العظم. يُقدم مع أرز المندي الفاخر المزين بالمكسرات والزبيب والكبدة، وهي الوجبة المثالية للمناسبات الكبيرة.' 
        : 'Agneau entier cuit lentement dans des fours Mandi traditionnels pendant de longues heures jusqu\'à ce que la viande se détache de l\'os. Servi avec du riz Mandi de luxe garni de noix, de raisins secs et de foie, c\'est le repas parfait pour les grandes occasions.',
      ingredients: lang === 'ar' ? ['خروف يمني طازج', 'أرز بسمتي فاخر', 'زعفران أصلي', 'بهارات مندي سرية', 'مكسرات مشكلة'] : ['Agneau yéménite frais', 'Riz Basmati de luxe', 'Safran authentique', 'Épices Mandi secrètes', 'Noix assorties'],
      nutritionalInfo: { calories: '850 kcal/portion', protein: '45g', carbs: '65g', fat: '35g' },
      image: 'https://imglink.cc/cdn/2C9ycFPT6K.jpg', 
      featured: true 
    },
    { 
      name: lang === 'ar' ? 'مندي لحم بلدي' : 'Mandi d\'Agneau Fermier', 
      price: '٩,٥٠٠', 
      rawPrice: 9500, 
      desc: lang === 'ar' ? 'لحم تيس بلدي مطهو ببطء في حفرة المندي التقليدية' : 'Agneau fermier cuit lentement dans un four traditionnel Mandi', 
      longDesc: lang === 'ar'
        ? 'طبق المندي الأصيل يُعد بتتبيلة خاصة، ويُطهى اللحم مع الأرز في حفرة تحت الأرض محكمة الإغلاق، مما يمنحه نكهة مدخنة فريدة لا تُقاوم.'
        : 'Le plat Mandi authentique est préparé avec une marinade spéciale. L\'agneau est cuit avec le riz dans une fosse souterraine scellée, ce qui lui donne une saveur fumée unique et irrésistible.',
      ingredients: lang === 'ar' ? ['لحم بلدي طازج', 'أرز مندي', 'بهارات يمنية', 'فحم السمر'] : ['Agneau frais', 'Riz Mandi', 'Épices yéménites', 'Charbon de bois'],
      image: 'https://imglink.cc/cdn/Z95lHFNLv5.jpg' 
    },
    { 
      name: lang === 'ar' ? 'مندي دجاج' : 'Mandi au Poulet', 
      price: '١,٢٠٠', 
      rawPrice: 1200, 
      desc: lang === 'ar' ? 'دجاج مطهو ببطء في حفرة المندي مع الأرز المعطر' : 'Poulet fumé cuit dans un four traditionnel avec riz parfumé', 
      longDesc: lang === 'ar'
        ? 'طبق المندي الشهير يُعد بتتبيلة خاصة من الكركم والهيل، ويُطهى الدجاج مع الأرز في حفرة تحت الأرض محكمة الإغلاق، مما يمنحه نكهة مدخنة فريدة لا تُقاوم.'
        : 'Le célèbre plat Mandi est préparé avec une marinade spéciale de curcuma et de cardamome. Le poulet est cuit avec le riz dans une fosse souterraine scellée, ce qui lui donne une saveur fumée unique et irrésistible.',
      ingredients: lang === 'ar' ? ['دجاج طازج', 'أرز مندي', 'بهارات يمنية', 'فحم السمر للتدخين'] : ['Poulet frais', 'Riz Mandi', 'Épices yéménites', 'Charbon de bois Samr pour le fumage'],
      image: 'https://imglink.cc/cdn/v0eY1PY2dy.png' 
    },
    { 
      name: lang === 'ar' ? 'مظبي لحم' : 'Madhbi d\'Agneau', 
      price: '١,٥٠٠', 
      rawPrice: 1500, 
      desc: lang === 'ar' ? 'لحم مشوي على أحجار المرو الساخنة' : 'Viande grillée sur des pierres volcaniques chaudes', 
      longDesc: lang === 'ar'
        ? 'طريقة تقليدية عريقة في الطهي، حيث يتم شي اللحم على أحجار المرو النظيفة بعد تسخينها جيداً، مما يجعل اللحم مقرمشاً من الخارج وطرياً جداً من الداخل.'
        : 'Une méthode de cuisson traditionnelle ancestrale, où la viande est grillée sur des pierres de quartz propres après avoir été bien chauffées, rendant la viande croustillante à l\'extérieur et très tendre à l\'intérieur.',
      ingredients: lang === 'ar' ? ['لحم غنم بلدي', 'ملح بحري', 'بهارات المظبي الخاصة'] : ['Agneau local', 'Sel de mer', 'Épices Madhbi spéciales'],
      image: 'https://imglink.cc/cdn/ed99NK7mpY.png' 
    },
  ],
  breakfast: [
    { 
      name: lang === 'ar' ? 'معصوب ملكي' : 'Masoub Royal', 
      price: '٧٥٠', 
      rawPrice: 750, 
      desc: lang === 'ar' ? 'مزيج من الموز والخبز والعسل والقشطة' : 'Mélange de bananes, pain, miel et crème', 
      longDesc: lang === 'ar'
        ? 'وجبة الفطور اليمنية الأكثر شعبية، تتكون من الموز والخبز الأسمر المهروس جيداً، ويُضاف إليه القشطة الطازجة والعسل الطبيعي وحبة البركة لإعطاء طاقة قصوى ليومك.'
        : 'Le petit-déjeuner yéménite le plus populaire, composé de bananes et de pain brun bien écrasés, avec l\'ajout de crème fraîche, de miel naturel et de graines de nigelle pour donner un maximum d\'énergie à votre journée.',
      ingredients: lang === 'ar' ? ['موز ناضج', 'خبز أسمر (رهيف)', 'عسل سدر يمني', 'قشطة طازجة'] : ['Bananes mûres', 'Pain brun', 'Miel de Sidr yéménite', 'Crème fraîche'],
      image: 'https://imglink.cc/cdn/mJaeRDb2rt.png' 
    },
  ],
  appetizers: [
    { 
      name: lang === 'ar' ? 'شفوت يمني' : 'Shafoot Yéménite', 
      price: '٣٥٠', 
      rawPrice: 350, 
      desc: lang === 'ar' ? 'خبز لحوح مسقى باللبن والكزبرة والثوم' : 'Pain Lahouh imbibé de yaourt épicé, coriandre et ail', 
      longDesc: lang === 'ar'
        ? 'المقبلات رقم واحد في المائدة اليمنية، يُحضر من خبز اللحوح اليمني الهش الذي يُسقى بخليط اللبن الطازج المخفوق مع الكزبرة والنعناع والثوم والفلفل الأخضر.'
        : 'L\'apéritif numéro un sur la table yéménite, préparé à partir de pain Lahouh yéménite croustillant imbibé d\'un mélange de yaourt frais fouetté avec de la coriandre, de la menthe, de l\'ail et du piment vert.',
      ingredients: lang === 'ar' ? ['خبز لحوح يماني', 'لبن رائب', 'كزبرة ونعناع', 'ثوم وبهارات'] : ['Pain Lahouh yéménite', 'Yaourt', 'Coriandre et menthe', 'Ail et épices'],
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400' 
    },
  ],
  drinks: [
    { 
      name: lang === 'ar' ? 'شاي عدني' : 'Thé Adeni', 
      price: '١٥٠', 
      rawPrice: 150, 
      desc: lang === 'ar' ? 'شاي بالحليب والبهارات (هيل، قرنفل، زنجبيل)' : 'Thé au lait et aux épices (cardamome, clou de jovle, gingembre)', 
      longDesc: lang === 'ar'
        ? 'شاي كرك على الطريقة العدنية الأصيلة، يُغلى الشاي مع الحليب المركز ومجموعة من البهارات العطرية مثل الهيل والقرنفل والقرفة والقليل من الزنجبيل الطازج.'
        : 'Thé Karak de style adéni authentique, le thé est bouilli avec du lait concentré et un ensemble d\'épices aromatiques comme la cardamome, les clous de girofle, la cannelle et un peu de gingembre frais.',
      ingredients: lang === 'ar' ? ['شاي أسود خشن', 'حليب مركز', 'هيل وقرفة', 'زنجبيل طازج'] : ['Thé noir corsé', 'Lait concentré', 'Cardamome et cannelle', 'Gingembre frais'],
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'عصير برتقال طازج' : 'Jus d\'Orange Frais', 
      price: '٤٥٠', 
      rawPrice: 450, 
      desc: lang === 'ar' ? 'عصير برتقال طبيعي ١٠٠٪' : 'Jus d\'orange 100% naturel pressé à froid', 
      longDesc: lang === 'ar'
        ? 'عصير برتقال طازج يتم تحضيره عند الطلب لضمان أعلى جودة وطعم منعش غني بفيتامين سي.'
        : 'Un jus d\'orange fraîchement pressé à la demande pour garantir une fraîcheur optimale et un goût naturel éclatant.',
      ingredients: lang === 'ar' ? ['برتقال طازج'] : ['Oranges fraîches'],
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'عصير مانجو' : 'Jus de Mangue', 
      price: '٥٠٠', 
      rawPrice: 500, 
      desc: lang === 'ar' ? 'عصير مانجو طبيعي كثيف ولذيذ' : 'Jus de mangue naturel onctueux et savoureux', 
      longDesc: lang === 'ar'
        ? 'عصير مانجو طبيعي محضر من أجود أنواع المانجو اليمني الشهير بحلاوته وكثافته.'
        : 'Délicieux jus de mangue préparé à partir des meilleures mangues yéménites, réputées pour leur saveur unique et leur onctuosité.',
      ingredients: lang === 'ar' ? ['مانجو طازج', 'قليل من السكر'] : ['Mangues fraîches', 'Un peu de sucre'],
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'ليمون بالنعناع' : 'Citronnade à la Menthe', 
      price: '٤٠٠', 
      rawPrice: 400, 
      desc: lang === 'ar' ? 'مزيج منعش من الليمون والنعناع الطازج' : 'Mélange rafraîchissant de citron et menthe fraîche', 
      longDesc: lang === 'ar'
        ? 'المشروب المنعش المثالي بعد وجبة دسمة، مزيج متوازن من الليمون الحامض والنعناع الأخضر البارد.'
        : 'La boisson rafraîchissante idéale après un repas copieux, un équilibre parfait entre l\'acidité du citron et la fraîcheur de la menthe.',
      ingredients: lang === 'ar' ? ['ليمون طازج', 'نعناع', 'ماء', 'ثلج'] : ['Citron frais', 'Menthe', 'Eau', 'Glaçons'],
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'ماء معدني' : 'Eau Minérale', 
      price: '١٠٠', 
      rawPrice: 100, 
      desc: lang === 'ar' ? 'زجاجة ماء نقي' : 'Bouteille d\'eau minérale pure', 
      longDesc: lang === 'ar' ? 'ماء معدني نقي ومنعش.' : 'Eau minérale naturelle pure et fraîche.',
      ingredients: lang === 'ar' ? ['ماء'] : ['Eau'],
      image: 'https://images.unsplash.com/photo-1560023907-5f339617ea3a?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'شاي بالنعناع' : 'Thé à la Menthe', 
      price: '٢٠٠', 
      rawPrice: 200, 
      desc: lang === 'ar' ? 'شاي أخضر منعش مع النعناع' : 'Thé vert rafraîchissant à la menthe', 
      longDesc: lang === 'ar' ? 'شاي أخضر منعش محضر من أوراق النعناع الطازجة.' : 'Thé vert infusé avec des feuilles de menthe fraîche pour une saveur délicate et rafraîchissante.',
      ingredients: lang === 'ar' ? ['شاي أخضر', 'نعناع طازج'] : ['Thé vert', 'Menthe fraîche'],
      image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: lang === 'ar' ? 'قهوة يمنية' : 'Café Yéménite', 
      price: '٣٠٠', 
      rawPrice: 300, 
      desc: lang === 'ar' ? 'قهوة يمنية أصيلة مع القشر والبهارات' : 'Café yéménite authentique avec épices', 
      longDesc: lang === 'ar' ? 'قهوة يمنية تقليدية محضرة من أجود أنواع البن اليمني مع القشر والهيل والقرفة.' : 'Café yéménite traditionnel (Qishr) préparé avec de la peau de café, du gingembre et des épices aromatiques.',
      ingredients: lang === 'ar' ? ['بن يمني', 'قشر', 'هيل', 'قرفة'] : ['Café yéménite', 'Qishr', 'Cardamome', 'Cannelle'],
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=400' 
    },
  ],
  grilled: [],
  dessert: [
    {
      name: lang === 'ar' ? 'حلويات يمنية فاخرة' : 'Douceurs Yéménites de Luxe',
      price: '٤,٥٠٠',
      rawPrice: 4500,
      desc: lang === 'ar' ? 'مزيج من العسل الطبيعي والمكسرات الفاخرة' : 'Un mélange de miel naturel et de noix de premier choix',
      longDesc: lang === 'ar'
        ? 'تشكيلة فاخرة من الحلويات اليمنية التقليدية المحضرة بأجود أنواع عسل السدر واللوز والفستق المنقاة بعناية. تضم المجموعة الرواني، والصحن، والبقلاوة اليمنية بطابع ملكي.'
        : 'Un assortiment prestige de pâtisseries yéménites traditionnelles préparées avec le meilleur miel de Sidr, des amandes et des pistaches soigneusement sélectionnées. Cet ensemble comprend la Rawani, le Sahn et la Baklawa yéménite revisitée avec une touche royale.',
      ingredients: lang === 'ar' ? ['عسل سدر أصلي', 'مكسرات فاخرة', 'دقيق بر', 'سمن بلدي'] : ['Miel de Sidr authentique', 'Noix de premier choix', 'Farine de blé entier', 'Beurre clarifié traditionnel'],
      image: 'https://imglink.cc/cdn/rOJgNL58P_.jpeg'
    }
  ]
});

export interface BlogPost {
  title: string;
  category: string;
  image: string;
  date: string;
  content: string;
}

export const GET_BLOG_POSTS = (t: any, lang: Language): BlogPost[] => [
  {
    title: t.blog.postTitle,
    category: t.blog.cat,
    image: 'https://images.unsplash.com/photo-1541529086530-bc2f7e025875?auto=format&fit=crop&q=80&w=1200',
    date: lang === 'ar' ? '٢٠ مارس ٢٠٢٤' : '20 Mars 2024',
    content: lang === 'ar' 
      ? 'تعتبر تتبيلة المندي السر الحقيقي وراء المذاق المدخن واللذيذ الذي يميز هذا الطبق الحضرمي الأصيل. نستخدم في مطعمنا خلطة تورثناها عبر الأجيال، تجمع بين الهيل والقرنفل والزعفران وورق الغار، بالإضافة إلى تقنية التدخين بفحم السمر الطبيعي.'
      : 'L\'assaisonnement du Mandi est le véritable secret du goût fumé et délicieux qui caractérise ce plat authentique du Hadramout. Dans notre restaurant, nous utilisons un mélange hérité de générations, combinant cardamome, clous de girofle, safran et feuilles de laurier, ainsi que la technique de fumage au charbon naturel.'
  },
  {
    title: lang === 'ar' ? 'تاريخ القهوة اليمنية: من المخا إلى العالم' : 'L\'Or noir du Yémen : L\'épopée du café de Mocha',
    category: lang === 'ar' ? 'قهوة و تراث' : 'Café & Héritage',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=600',
    date: lang === 'ar' ? '١٥ مارس ٢٠٢٤' : '15 Mars 2024',
    content: lang === 'ar'
      ? 'بدأت حكاية القهوة من ميناء المخا الشهير، حيث كان اليمن المصدر الوحيد للبن في العالم لقرون. القهوة اليمنية ليست مجرد مشروب، بل هي طقس اجتماعي وتراث عالمي انطلق من جبال اليمن إلى كل مقاهي العالم.'
      : 'L\'histoire du café a commencé au célèbre port de Mocha, où le Yémen a été l\'unique exportateur de café au monde pendant des siècles. Le café yéménite n\'est pas seulement une boisson, c\'est un rituel social et un patrimoine mondial issu des montagnes du Yémen.'
  },
  {
    title: lang === 'ar' ? 'فوائد التوابل اليمنية في تقوية المناعة' : 'Vertus des épices yéménites sur l\'immunité',
    category: lang === 'ar' ? 'صحة و جمال' : 'Santé & Bien-être',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600',
    date: lang === 'ar' ? '١٠ مارس ٢٠٢٤' : '10 Mars 2024',
    content: lang === 'ar'
      ? 'تتميز التوابل اليمنية مثل الكركم والكمون والزعتر الجبلي بخصائص علاجية مذهلة. فهي ليست لإضافة النكهة فقط، بل هي صيدلية طبيعية تساعد في تقوية جهاز المناعة وتحسين الهضم.'
      : 'Les épices yéménites comme le curcuma, le cumin et le thym des montagnes possèdent des propriétés curatives incroyables. Elles ne servent pas seulement à donner du goût, mais constituent une véritable pharmacie naturelle pour l\'immunité.'
  }
];
