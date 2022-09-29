const MAGNIFICATION_RATE = 10;
const MAGNIFICATION_RATE_SP = 10 * (35 / 56);

/**
 * best brush and canvas size ratio to guess drawing's content. DO NOT CHANGE.
 */
const BEST_RATIO = {
	BRUSH: 3,
	CANVAS: 56,
} as const;

export const CANVAS = {
	BRUSH_THICKNESS:
		window.screen.width > 480
			? BEST_RATIO.BRUSH * MAGNIFICATION_RATE
			: BEST_RATIO.BRUSH * MAGNIFICATION_RATE_SP,
	FRAME_SIZE:
		window.screen.width > 480
			? BEST_RATIO.CANVAS * MAGNIFICATION_RATE
			: BEST_RATIO.CANVAS * MAGNIFICATION_RATE_SP,
	GALLERY_SCALE: 0.4,
};
