export interface ServiceSection {
  id: string;
  title: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
  list?: { en: string[]; ar: string[] };
}

export interface ServiceDetail {
  intro: { en: string[]; ar: string[] };
  sections: ServiceSection[];
}

export interface ServiceItem {
  title: { en: string; ar: string };
  image: string;
  icon: string;
  slug: string;
  detail: ServiceDetail;
}

export const SERVICES_CONTENT = {
  en: {
    tag: "Our Solutions",
    title: "Clean Energy, Made Practical",
    description: "End-to-end renewable energy solutions designed around your needs.",
    cta: "View All Solutions",
  },
  ar: {
    tag: "حلولنا",
    title: "طاقة نظيفة بطريقة عملية",
    description: "حلول متكاملة للطاقة المتجددة مصممة حول احتياجاتك.",
    cta: "عرض جميع الحلول",
  },
} as const;

export const SERVICES_PAGE_CONTENT = {
  en: {
    heroTitle: "Our Solutions",
    heroSubtitle: "End-to-end solar and smart energy services",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Solutions",
  },
  ar: {
    heroTitle: "حلولنا",
    heroSubtitle: "خدمات متكاملة للطاقة الشمسية والطاقة الذكية",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "الحلول",
  },
} as const;

const detail = (intro: string, list: string[]): ServiceDetail => ({
  intro: { en: [intro], ar: [intro] },
  sections: [{
    id: "included",
    title: { en: "What's Included", ar: "ما نقدمه" },
    content: { en: ["Our specialists manage every stage of the solution."], ar: ["يدير متخصصونا كل مرحلة من مراحل الحل."] },
    list: { en: list, ar: list },
  }],
});

export const SERVICES: ServiceItem[] = [
  {
    title: { en: "Solar for Homes & Communities", ar: "الطاقة الشمسية للمنازل والمجتمعات" },
    image: "application_5",
    icon: "application_13",
    slug: "solar-for-homes",
    detail: detail("Tailored rooftop solar solutions for villas, residential buildings, and communities, supported by monitoring and long-term service.", ["Site assessment and energy analysis", "System design and engineering", "Installation, commissioning, and grid connection"]),
  },
  {
    title: { en: "Remote Control & Monitoring", ar: "التحكم والمراقبة عن بعد" },
    image: "application_9",
    icon: "application_10",
    slug: "remote-monitoring",
    detail: detail("Stay connected to your energy system 24/7 with real-time generation, savings, and battery data.", ["Smart dashboards", "Real-time performance monitoring", "Battery and peak-shaving optimization"]),
  },
  {
    title: { en: "Operation & Maintenance", ar: "التشغيل والصيانة" },
    image: "application_16",
    icon: "application_15",
    slug: "operation-maintenance",
    detail: detail("We stay beyond installation with preventive maintenance and responsive support that keeps systems safe and efficient.", ["Preventive maintenance", "Performance checks and reporting", "Responsive after-sales support"]),
  },
  {
    title: { en: "Financing & Payment Solutions", ar: "حلول التمويل والدفع" },
    image: "application_18",
    icon: "application_18",
    slug: "financing",
    detail: detail("We provide free consultation on solar financing and flexible installment plans to reduce upfront costs.", ["Financing consultation", "Installment options up to 5 years", "Support for financing partners"]),
  },
];
