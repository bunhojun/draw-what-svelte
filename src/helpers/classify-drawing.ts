import type { Canvas } from "../classes/canvas";
// disable ts and lint as ml5 doesn't have any type definitions
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
