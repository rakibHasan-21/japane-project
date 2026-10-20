/* Public-build seam: night variants beyond the packaged page are not part of
   this bundle. */

export const NOCTURNE_VARIANTS = ["midnight"] as const;
export type NocturneVariant = (typeof NOCTURNE_VARIANTS)[number];

export const NOCTURNE_TITLES: Record<NocturneVariant, string> = {
  midnight: "Nocturne — The dark is not empty",
};

export function buildNocturneDocument(_variant: NocturneVariant): string {
  return "";
}
