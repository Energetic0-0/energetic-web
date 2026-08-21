export const ABOUT_CONTENT = {
  en: {
    tag: "Who We Are",
    title: "Powering a More Sustainable Tomorrow",
    description:
      "Energetic is an Egyptian climate-tech startup focused on making renewable energy simple, accessible, and feasible for homes, communities, and commercial organizations.",
    points: [
      "Solar systems for homes, villas, buildings, and communities",
      "Smart monitoring, battery optimization, and energy management",
      "Engineering, installation, financing, and long-term support",
    ],
    cta: "Read More",
    featuresTag: "Our Approach",
    featuresTitle: "Your Trusted Energy Partner",
    featuresDescription:
      "We combine renewable energy systems, engineering expertise, digital monitoring, and reliable after-sales support to deliver practical and measurable clean-energy solutions.",
  },
  ar: {
    tag: "من نحن",
    title: "نقود مستقبلاً أكثر استدامة",
    description:
      "إنرجتيك شركة مصرية ناشئة في مجال تكنولوجيا المناخ، تركز على جعل الطاقة المتجددة بسيطة ومتاحة ومناسبة للمنازل والمجتمعات والمؤسسات التجارية.",
    points: [
      "أنظمة طاقة شمسية للمنازل والمجتمعات",
      "مراقبة ذكية وإدارة للطاقة والبطاريات",
      "هندسة وتركيب وتمويل ودعم مستمر",
    ],
    cta: "اقرأ المزيد",
    featuresTag: "منهجنا",
    featuresTitle: "شريكك الموثوق في الطاقة",
    featuresDescription:
      "نجمع بين أنظمة الطاقة المتجددة والخبرة الهندسية والمراقبة الرقمية وخدمة ما بعد البيع لتقديم حلول عملية وقابلة للقياس.",
  },
} as const;

export const ABOUT_FEATURES = [
  {
    icon: "users" as const,
    label: { en: "Experience", ar: "الخبرة" },
    title: { en: "Environmental Engineers", ar: "مهندسون بيئيون" },
  },
  {
    icon: "check-circle" as const,
    label: { en: "Quality", ar: "الجودة" },
    title: { en: "Services", ar: "خدمات" },
  },
  {
    icon: "message-circle" as const,
    label: { en: "Positive", ar: "إيجابية" },
    title: { en: "Consultation", ar: "استشارات" },
  },
  {
    icon: "headphones" as const,
    label: { en: "24 Hours", ar: "٢٤ ساعة" },
    title: { en: "Support", ar: "دعم فني" },
  },
] as const;

export const ABOUT_IMAGES = {
  main: "/img/about/about-1.jpg",
  secondary: "/img/about/about-2.jpg",
} as const;

export const ABOUT_PAGE_CONTENT = {
  en: {
    heroTitle: "About Us",
    heroSubtitle:
      "Empowering Egypt's green transition",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "About Us",
    story: [
      "Energetic is an Egyptian climate-tech startup building practical renewable energy solutions for everyday life.",
      "Our mission is to help communities generate, manage, and optimize their own energy.",
      "We design, supply, install, monitor, and maintain solar PV systems for residential and commercial applications.",
      "Our vision is to build Egypt's number one residential community energy platform.",
    ],
    storyAr: [
      "مكتب الندى العلمي هو واحد من الشركات الرائدة والمتخصصة في المنطقة، والتي تلتزم بتقديم تطبيقات علمية وبيئية متكاملة وخدمات هندسية متميزة لعملائها. نحن نفخر بفريق عملنا المكون من مهندسين متخصصين وخبراء في المجالات العلمية والبيئية.",
      "تأسس المكتب في عام 2008.",
      "نشاط مكتبنا يتمثل في تقديم الدعم الفني والاستشارات الفنية والعلمية والهندسية المتكاملة من خلال استيراد وتوفير جميع الأجهزة البيئية والعلمية والتي يتم اختيار أكبر الشركات الدولية التي تصنع مثل هذه الأجهزة ولدينا ممثلين في مصر.",
      "يسعدنا أن نضع جميع إمكانيات المكتب في خدمة عملائنا الكرام.",
    ],
    departmentsTag: "Our Departments",
    departmentsTitle: "What We Do",
  },
  ar: {
    heroTitle: "من نحن",
    heroSubtitle: "نمكن التحول الأخضر في مصر",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "من نحن",
    story: [],
    storyAr: [
      "إنرجتيك شركة مصرية ناشئة في مجال تكنولوجيا المناخ تقدم حلولاً عملية للطاقة المتجددة.",
      "مهمتنا مساعدة المجتمعات على توليد وإدارة وتحسين استهلاك الطاقة.",
      "نصمم ونورد ونركب ونراقب ونصون أنظمة الطاقة الشمسية للمنازل والشركات.",
      "رؤيتنا بناء المنصة الأولى لطاقة المجتمعات السكنية في مصر.",
    ],
    departmentsTag: "حلولنا",
    departmentsTitle: "طاقة مصممة حول احتياجاتك",
  },
} as const;
