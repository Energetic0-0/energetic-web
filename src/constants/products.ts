export interface ProductArticle {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
}

export interface CompanyProduct {
  title: { en: string; ar: string };
  image: string;
  slug: string;
}

export const PRODUCTS_PAGE_CONTENT = {
  en: {
    heroTitle: "Energy Solutions",
    heroSubtitle: "Connected renewable energy for homes, communities, and commercial organizations",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Solutions",
    articleTag: "The Energetic Platform",
    articleTitle: "Turning Sustainability Into Profits",
    articleIntro: "From system design to smart monitoring, Energetic connects clean-energy technology with practical financial outcomes.",
    companiesTag: "Technology Stack",
    companiesTitle: "What We Bring Together",
    conclusionTitle: "Built for Long-Term Performance",
    conclusion: "With up to 10 years warranty, flexible payment plans, and 24/7 maintenance support, our solutions are designed to deliver measurable value for years to come.",
  },
  ar: {
    heroTitle: "حلول الطاقة",
    heroSubtitle: "طاقة متجددة متصلة للمنازل والمجتمعات والمؤسسات التجارية",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "الحلول",
    articleTag: "منصة إنرجتيك",
    articleTitle: "نحول الاستدامة إلى أرباح",
    articleIntro: "من تصميم النظام إلى المراقبة الذكية، تربط إنرجتيك بين تكنولوجيا الطاقة النظيفة والنتائج المالية العملية.",
    companiesTag: "منظومة التكنولوجيا",
    companiesTitle: "ما نجمعه معاً",
    conclusionTitle: "مصمم للأداء طويل الأجل",
    conclusion: "مع ضمان يصل إلى 10 سنوات وخطط دفع مرنة ودعم صيانة على مدار الساعة، صممت حلولنا لتقديم قيمة قابلة للقياس لسنوات طويلة.",
  },
} as const;

export const PRODUCT_ARTICLES: ProductArticle[] = [
  { title: { en: "Solar PV Systems", ar: "أنظمة الطاقة الشمسية" }, description: { en: "Site-specific solar systems designed to reduce electricity costs and carbon emissions.", ar: "أنظمة شمسية مصممة حسب الموقع لتقليل تكاليف الكهرباء والانبعاثات الكربونية." }, image: "application_5" },
  { title: { en: "Battery Optimization", ar: "تحسين البطاريات" }, description: { en: "Smart peak-shaving and storage strategies designed for maximum financial savings.", ar: "استراتيجيات ذكية لتقليل ذروة الاستهلاك وتحقيق أكبر وفر مالي." }, image: "application_6" },
  { title: { en: "Smart Energy Monitoring", ar: "المراقبة الذكية للطاقة" }, description: { en: "Real-time dashboards that make solar generation, savings, and system health easy to understand.", ar: "لوحات تحكم فورية تجعل إنتاج الطاقة والوفر وحالة النظام سهلة الفهم." }, image: "application_17" },
  { title: { en: "EV Charging", ar: "شحن السيارات الكهربائية" }, description: { en: "Charging infrastructure that fits the energy needs of homes, communities, and businesses.", ar: "بنية شحن تناسب احتياجات المنازل والمجتمعات والشركات من الطاقة." }, image: "application_14" },
];

export const COMPANY_PRODUCTS: CompanyProduct[] = PRODUCT_ARTICLES.map((product, index) => ({
  title: product.title,
  image: product.image,
  slug: ["solar-pv", "battery-optimization", "smart-monitoring", "ev-charging"][index],
}));
