import P5 from "p5";
import { CANVAS } from "../constants/canvas";

type MouseResponse = {
	x: number;
	y: number;
};

export const useCanvas = () => {
	const draw = (p: P5, data: MouseResponse) => {
		p.noStroke();
		p.fill(0);
		p.ellipse(data.x, data.y, CANVAS.BRUSH_THICKNESS, CANVAS.BRUSH_THICKNESS);
	};

	const sketch = (p: P5): void => {
		p.setup = () => {
			p.createCanvas(CANVAS.FRAME_SIZE, CANVAS.FRAME_SIZE);
			p.background(255);
			p.mouseDragged = (): void => {
				const data = {
					x: p.mouseX,
					y: p.mouseY,
				};
				draw(p, data);
			};
		};
	};

	/**
	 * Initialize p5 instance. By calling this, you can render p5 canvas
	 * */
	const initCanvas = (element: HTMLElement | undefined) => {
		new P5(sketch, element);
	};
	return {
		initCanvas,
	};
};
