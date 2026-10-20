/* Public-build seam: kept so the frame's derived-document path stays typed. */

export type SandboxedPageOptions = {
  presentation: "page" | "background";
  canvasSelector: string;
};

export function buildSandboxedPageDocument(source: string, _options: SandboxedPageOptions): string {
  return source;
}
