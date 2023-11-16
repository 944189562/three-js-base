import { WebGLRenderer } from "three";

function createRenderer() {
	// antialias 抗锯齿
	const renderer = new WebGLRenderer({antialias: true});

	return renderer
}

export { createRenderer }
