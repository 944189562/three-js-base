import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from 'three'

function createLights() {
	// DirectionalLight: 直射光
	// const light = new DirectionalLight('white', 8);

	// pointLight: 灯泡光
	// const light = new PointLight('white', 800);

	// RectAreaLight: 矩形区域光
	// const light = new RectAreaLight('white', 10, 10, 10);

	// spotLight: 聚光灯
	const light = new SpotLight('white', 10000);
	light.position.set(10, 10, 10);

	return light
}

export { createLights }
