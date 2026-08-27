export type ProjectCoverWidth = 640 | 1280;

const PROJECT_COVER_VARIANT = /\/cover-(?:640|1280)\.webp(?=$|[?#])/;

/**
 * Returns the requested project-cover variant when the source follows the
 * cover-{width}.webp contract. Unknown image names are left untouched.
 */
export function getProjectCoverVariant(
  source: string,
  width: ProjectCoverWidth,
): string {
  if (!PROJECT_COVER_VARIANT.test(source)) return source;
  return source.replace(PROJECT_COVER_VARIANT, `/cover-${width}.webp`);
}

export function getProjectCoverSrcSet(source: string): string | undefined {
  const compact = getProjectCoverVariant(source, 640);
  if (compact === source && !PROJECT_COVER_VARIANT.test(source)) return undefined;

  const large = getProjectCoverVariant(source, 1280);
  return `${compact} 640w, ${large} 1280w`;
}

export const PROJECT_GRID_IMAGE_SIZES =
  "(min-width: 1280px) calc((min(100vw, 1320px) - 8rem) / 3), (min-width: 768px) calc((100vw - 5.5rem) / 2), calc(100vw - 2.5rem)";

export const PROJECT_QUICK_VIEW_IMAGE_SIZES =
  "(min-width: 768px) min(54vw, 34rem), calc(100vw - 2rem)";

export const PROJECT_HOME_PREVIEW_IMAGE_SIZES =
  "(min-width: 1081px) min(48vw, 48rem), (min-width: 801px) calc(100vw - 4rem), calc(100vw - 2rem)";

export const PROJECT_DETAIL_IMAGE_SIZES =
  "(min-width: 1320px) 1240px, (min-width: 1024px) calc(100vw - 5rem), (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)";
