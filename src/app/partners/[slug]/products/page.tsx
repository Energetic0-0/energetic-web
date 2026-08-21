import { PARTNERS } from "@/constants/partners";
import UnderConstruction from "../../../under-construction/page";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({ slug: partner.slug }));
}

export default function PartnerProductsPage() {
  return <UnderConstruction />;
}
