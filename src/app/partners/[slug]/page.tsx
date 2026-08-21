import { PARTNERS } from "@/constants/partners";
import PartnerPageClient from "./PartnerPageClient";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({
    slug: partner.slug,
  }));
}

export default function PartnerPage() {
  return <PartnerPageClient />;
}
