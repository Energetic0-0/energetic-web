/**
 * Centralized image-fetching utility for the Energetic portfolio.
 *
 * Called at build time (or ISR revalidation) to get all Cloudinary URLs.
 * Falls back to the original local /img/ paths when the API is unreachable
 * so the site never breaks during initial migration.
 */

export interface ImageRow {
  key:      string;
  url:      string;
  publicId: string;
  label:    string;
  section:  string;
}

export interface SiteImages {
  flat:     Record<string, string>;   // key → url
  sections: Record<string, ImageRow[]>;
}

// ── Static fallback paths (used until images are uploaded in admin) ─────────
const FALLBACKS: Record<string, string> = {
  logo_light:  '',
  logo_dark:   '',
  hero_bg:     '',
  about_story: '',
  about_secondary: '',
  favicon_16:  '',
  favicon_32:  '',
  favicon_180: '',
  favicon_192: '',
  favicon_512: '',
  ...Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`supplier_s${i+1}`, ''])),
  ...Object.fromEntries(Array.from({ length: 15 }, (_, i) => [`partner_p${i+1}`,  ''])),
};

/**
 * Fetch all image URLs from the backend API.
 * Uses Next.js ISR: re-fetches every hour.
 */
export async function getSiteImages(): Promise<SiteImages> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL;

  if (!apiUrl) {
    console.warn('[images] API_URL not set — using static fallbacks');
    return buildFallback();
  }

  try {
    const res = await fetch(`${apiUrl}/api/images`, {
      next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data: SiteImages = await res.json();

    // Merge fallbacks for any slots not yet uploaded
    for (const key of Object.keys(FALLBACKS)) {
      if (!data.flat[key] && FALLBACKS[key]) {
        data.flat[key] = FALLBACKS[key];
      }
    }

    return data;
  } catch (err) {
    console.warn('[images] Failed to fetch from API, using static fallbacks:', err);
    return buildFallback();
  }
}

function buildFallback(): SiteImages {
  return {
    flat:     FALLBACKS,
    sections: {},
  };
}

/**
 * Convenience: resolve a single image key to its URL.
 */
export function getImageUrl(flat: Record<string, string>, key: string): string {
  return flat[key] ?? FALLBACKS[key] ?? '';
}

/**
 * Build the supplier/partner logo arrays the Hero component expects.
 */
export function buildLogoArray(
  flat:    Record<string, string>,
  prefix:  string,   // "supplier_s" | "partner_p"
  count:   number,
  altBase: string,
) {
  return Array.from({ length: count }, (_, i) => ({
    src: flat[`${prefix}${i + 1}`] ?? '',
    alt: `${altBase} ${i + 1}`,
  })).filter((l) => l.src);
}
