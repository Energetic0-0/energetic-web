export interface PartnerItem {
  title: { en: string; ar: string };
  image: string;
  logo: string;
  slug: string;
}

export const PARTNERS_CONTENT = {
  en: {
    tag: "Partnerships",
    title: "Our Partners & Advisors",
    description: "We work with technology partners, suppliers, schools, and financing institutions to accelerate clean-energy adoption.",
    cta: "View Partnerships",
  },
  ar: {
    tag: "شراكاتنا",
    title: "شركاؤنا ومستشارونا",
    description: "نعمل مع شركاء التكنولوجيا والموردين والمدارس والمؤسسات المالية لتسريع اعتماد الطاقة النظيفة.",
    cta: "عرض الشراكات",
  },
} as const;

export const PARTNERS_PAGE_CONTENT = {
  en: {
    heroTitle: "Our Partnerships",
    heroSubtitle: "Collaboration that drives clean-energy innovation",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Partnerships",
  },
  ar: {
    heroTitle: "شراكاتنا",
    heroSubtitle: "تعاون يقود الابتكار في الطاقة النظيفة",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "الشراكات",
  },
} as const;

export const PARTNERS: PartnerItem[] = [
  {
    title: { en: "Schools & Education", ar: "المدارس والتعليم" },
    image: "/img/about/about-3.jpg",
    logo: "/img/about/about-3.jpg",
    slug: "schools-education",
  },
  {
    title: { en: "Technology Partners", ar: "شركاء التكنولوجيا" },
    image: "/img/about/about-4.jpg",
    logo: "/img/about/about-4.jpg",
    slug: "technology-partners",
  },
  {
    title: { en: "Vendors & Suppliers", ar: "الموردون والشركاء" },
    image: "/img/about/about-5.jpg",
    logo: "/img/about/about-5.jpg",
    slug: "vendors-suppliers",
  },
  {
    title: { en: "Financing Institutions", ar: "المؤسسات التمويلية" },
    image: "/img/about/about-6.jpg",
    logo: "/img/about/about-6.jpg",
    slug: "financing-institutions",
  },
];
