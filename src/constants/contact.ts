export const CONTACT_PAGE_CONTENT = {
  en: {
    heroTitle: "Contact Us",
    heroSubtitle:
      "Have questions about solar, monitoring, or financing? Our team is ready to help.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact",
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroSubtitle:
      "هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريقنا المتخصص هنا لمساعدتك في احتياجاتك واستفساراتك المتعلقة بالمعدات البيئية.",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "تواصل معنا",
  },
} as const;

export const CONTACT_INFO_CARDS = [
  {
    icon: "map-pin" as const,
    label: { en: "Address", ar: "العنوان" },
    values: [
      {
        en: "58 Al Hegaz Street, Heliopolis, Cairo, Egypt",
        ar: "٥٨ شارع الحجاز، مصر الجديدة، القاهرة، مصر",
      },
    ],
      href: "https://maps.google.com/?q=Energetic+Renewables+Cairo",
  },
  {
    icon: "whatsapp" as const,
    label: { en: "WhatsApp", ar: "واتساب" },
      values: [{ en: "+20 11 12959449", ar: "+20 11 12959449" }],
    href: "https://wa.me/201112959449",
  },
  {
    icon: "phone" as const,
    label: { en: "Call Us Now", ar: "اتصل بنا الآن" },
      values: [{ en: "+20 11 12959449", ar: "+20 11 12959449" }],
      href: "tel:+201112959449",
  },
  {
    icon: "mail" as const,
    label: { en: "Mail Us Now", ar: "ارسل لنا الآن" },
    values: [
      { en: "energetic.renewables@gmail.com", ar: "energetic.renewables@gmail.com" },
    ],
    href: "mailto:energetic.renewables@gmail.com",
  },
] as const;

export const CONTACT_FORM_CONTENT = {
  en: {
    tag: "Contact Us",
    title: "Ready to Build Your Energy Future?",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Your Phone Number (Optional)",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    submitButton: "Send Message",
    successMessage: "Thanks for your submission!",
    errorMessage: "Oops! There was a problem submitting your form.",
  },
  ar: {
    tag: "تواصل معنا",
    title: "عندك استفسار؟ من فضلك تواصل معنا!",
    namePlaceholder: "اسمك",
    emailPlaceholder: "الايميل الخاص بك",
    phonePlaceholder: "رقم الهاتف (اختياري)",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "الرسالة",
    submitButton: "ارسل الرسالة",
    successMessage: "شكراً لتواصلك معنا!",
    errorMessage: "حدث خطأ أثناء إرسال النموذج.",
  },
} as const;

export const BACKEND_CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_API_URL || "";

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=58+Al+Hegaz+Street,+Heliopolis,+Cairo&output=embed";
