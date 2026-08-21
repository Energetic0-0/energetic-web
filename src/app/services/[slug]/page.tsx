import { SERVICES } from "@/constants/services";
import UnderConstruction from "../../under-construction/page";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default function ServicePage() {
  return <UnderConstruction />;
}
