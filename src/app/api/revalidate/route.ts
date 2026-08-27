import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * POST /api/revalidate?secret=YOUR_SECRET
 * Called by the backend API after any image update.
 * Triggers ISR revalidation on all portfolio pages instantly.
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid revalidation secret' }, { status: 401 });
  }

  try {
    // Revalidate all pages that use images
    revalidatePath('/', 'layout');   // Revalidates layout (logos + favicons) and all pages
    revalidatePath('/', 'page');
    revalidatePath('/about');
    revalidatePath('/services');
    revalidatePath('/partners');

    return NextResponse.json({ revalidated: true, ts: Date.now() });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
