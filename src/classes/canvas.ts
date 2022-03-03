import P5 from "p5";
import { CANVAS } from "../constants/canvas";

const initCanvas = (p: P5): void => {
	p.setup = () => {
		p.createCanvas(CANVAS.FRAME_SIZE, CANVAS.FRAME_SIZE);
		p.background(255);
	};
};

export class Canvas extends P5 {
	constructor(element: HTMLElement) {
		super(initCanvas, element);
		this.mouseDragged = (): void => {
			const data = {
				x: this.mouseX,
				y: this.mouseY,
			};
			this.noStroke();
			this.fill(0);
			this.ellipse(data.x, data.y, CANVAS.BRUSH_THICKNESS, CANVAS.BRUSH_THICKNESS);
		};
	}

	clearCanvas() {
		this.background(255);
	}
}
