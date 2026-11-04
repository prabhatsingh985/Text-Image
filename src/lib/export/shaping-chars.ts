// Which characters go to the shaper. Separate from pdf-shaping.ts so Latin-only PDFs never load it.

/** Every character HarfBuzz should handle: includes the danda and Vedic marks other scripts share. */
export const SHAPED_SCRIPT = /\p{Script_Extensions=Devanagari}/u;
/** Joiners choose between conjunct forms, so they matter inside a Devanagari word. */
export const JOINER = /[‌‍]/;
