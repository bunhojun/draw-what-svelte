const MAGNIFICATION_RATE = 10;

/**
 * best brush and canvas size ratio to guess drawing's content. DO NOT CHANGE.
 */
const BEST_RATIO = {
	BRUSH: 3,
	CANVAS: 56,
} as const;

export const CANVAS = {
	BRUSH_THICKNESS: BEST_RATIO.BRUSH * MAGNIFICATION_RATE,
	FRAME_SIZE: BEST_RATIO.CANVAS * MAGNIFICATION_RATE,
	GALLERY_SCALE: 0.4,
};
