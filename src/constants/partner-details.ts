export interface PartnerSection {
  heading: { en: string; ar: string };
  content: { en: string; ar: string };
  items?: { en: string; ar: string }[];
}

export interface PartnerProduct {
  name: { en: string; ar: string };
  image: string;
  detailUrl?: string;
}

export interface PartnerDetail {
  slug: string;
  pageTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
  sections: PartnerSection[];
  products: PartnerProduct[];
}

const makeDetail = (
  slug: string,
  title: string,
  titleAr: string,
  intro: string,
  introAr: string,
  items: string[],
): PartnerDetail => ({
  slug,
  pageTitle: { en: title, ar: titleAr },
  metaDescription: { en: intro, ar: introAr },
  sections: [
    { heading: { en: "Partnership", ar: "الشراكة" }, content: { en: intro, ar: introAr } },
    {
      heading: { en: "How We Work Together", ar: "كيف نعمل معاً" },
      content: { en: "Our partnerships combine clean energy, education, technology, and long-term support.", ar: "تجمع شراكاتنا بين الطاقة النظيفة والتعليم والتكنولوجيا والدعم طويل الأجل." },
      items: items.map((item) => ({ en: item, ar: item })),
    },
  ],
  products: [],
});

export const PARTNER_DETAILS: Record<string, PartnerDetail> = {
  "schools-education": makeDetail("schools-education", "Building Sustainable Educational Institutions Together", "نبني مؤسسات تعليمية مستدامة معاً", "Energetic partners with schools to bring clean energy, practical learning, and sustainability into the school community.", "تتعاون إنرجتيك مع المدارس لإدخال الطاقة النظيفة والتعلم العملي والاستدامة إلى المجتمع المدرسي.", ["Interactive STEM workshops", "Solar infrastructure for campuses", "Real-time energy data for learning"]),
  "technology-partners": makeDetail("technology-partners", "Technology Partners", "شركاء التكنولوجيا", "We bring solar, battery optimization, EV charging, and energy management together through one connected platform.", "نجمع الطاقة الشمسية وتحسين البطاريات وشحن السيارات وإدارة الطاقة في منصة متصلة واحدة.", ["Connected energy hardware", "Smart dashboards", "Remote control and monitoring"]),
  "vendors-suppliers": makeDetail("vendors-suppliers", "Vendors & Suppliers", "الموردون والشركاء", "We work with leading global and local suppliers for panels, inverters, batteries, and electrical equipment.", "نعمل مع موردين عالميين ومحليين للألواح والمحولات والبطاريات والمعدات الكهربائية.", ["Reliable component quality", "Long-term performance", "Dependable supply"]),
  "financing-institutions": makeDetail("financing-institutions", "Financing Institutions", "المؤسسات التمويلية", "Remote monitoring and flexible payment options make renewable energy easier to finance and more accessible.", "تجعل المراقبة عن بعد وخيارات الدفع المرنة تمويل الطاقة المتجددة أكثر سهولة وإتاحة.", ["Installment plans up to five years", "Transparent system performance", "Lower upfront cost"]),
};

export const getPartnerDetail = (slug: string) => PARTNER_DETAILS[slug];
