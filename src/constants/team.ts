export interface TeamMember {
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  photo: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    facebook?: string;
  };
}

export const TEAM_CONTENT = {
  en: {
    tag: "Team & Leadership",
    title: "Agile Leadership. Real-World Execution.",
    description:
      "Energetic is led by climate-tech founders and supported by engineers, software developers, and energy analysts.",
  },
  ar: {
    tag: "الفريق والقيادة",
    title: "قيادة مرنة. تنفيذ حقيقي.",
    description:
      "تقود إنرجتيك مجموعة من المؤسسين في مجال تكنولوجيا المناخ، ويدعمها مهندسون ومطورون ومحللو طاقة.",
  },
} as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: { en: "Founding Team", ar: "فريق التأسيس" },
    position: { en: "Climate-Tech Builders", ar: "بناة تكنولوجيا المناخ" },
    photo: "/img/team/CEO&Founder.png",
    socials: { email: "energetic.renewables@gmail.com" },
  },
  {
    name: { en: "Engineering Task Force", ar: "فريق الهندسة" },
    position: { en: "Solar, Monitoring & O&M", ar: "الطاقة الشمسية والمراقبة والصيانة" },
    photo: "/img/team/technialsupport.png",
    socials: { email: "energetic.renewables@gmail.com" },
  },
  {
    name: { en: "Software Team", ar: "فريق البرمجيات" },
    position: { en: "Dashboards & Smart Control", ar: "لوحات التحكم والمراقبة" },
    photo: "/img/team/IT Manager.jpeg",
    socials: { email: "energetic.renewables@gmail.com" },
  },
  {
    name: { en: "Partnerships", ar: "الشراكات" },
    position: { en: "Schools, Banks & Suppliers", ar: "المدارس والبنوك والموردون" },
    photo: "/img/team/digitalMarketing.png",
    socials: { email: "energetic.renewables@gmail.com" },
  },
];

export const DEPARTMENTS = [
  { title: { en: "System Design", ar: "تصميم الأنظمة" }, subtitle: { en: "Department", ar: "القسم" }, image: "/img/about/about-3.jpg" },
  { title: { en: "Monitoring", ar: "المراقبة" }, subtitle: { en: "Department", ar: "القسم" }, image: "/img/about/about-4.jpg" },
  { title: { en: "Maintenance", ar: "الصيانة" }, subtitle: { en: "Department", ar: "القسم" }, image: "/img/about/about-5.jpg" },
  { title: { en: "Partnerships", ar: "الشراكات" }, subtitle: { en: "Department", ar: "القسم" }, image: "/img/about/about-6.jpg" },
];
