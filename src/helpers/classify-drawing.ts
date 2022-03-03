import type { Canvas } from "../classes/canvas";
import * as ml5 from "ml5";

export type Candidates = {
	label: string;
	confidence: number;
}[];

export type ClassifierCallback = (error: null, result: Candidates) => void;

type Classifier = {
	classify: (canvas: Canvas, onGetResult: ClassifierCallback) => Promise<void> | undefined;
};

const onModelReady = () => null;

const classifier: Classifier = ml5.imageClassifier("DoodleNet", onModelReady);

export const classifyDrawing = async (
	canvas: Canvas,
	onGetResult: ClassifierCallback
): Promise<void> => {
	await classifier.classify(canvas, onGetResult);
};
