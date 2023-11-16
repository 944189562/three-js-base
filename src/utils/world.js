/**
 * World
 * 1. 初始设置
 * 2. 创建场景
 * 3. 创建相机
 * 4. 创建立方体并将其添加到场景中
 * 5. 创建渲染器
 * 6. 渲染场景
 */
import { createScene } from "components/scene.js";
import { createCamera } from "components/camera.js";
import { createCube, createCube1 } from "components/cube.js";
import { createLights } from "components/lights.js";

import { createRenderer } from "systems/renderer.js";
import { Resizer } from "systems/Resizer.js";
import { Loop } from "systems/Loop.js";

// 防止 类外部可以访问到
let scene, camera, renderer;

export class World {
	constructor(container) {
		scene = createScene();
		camera = createCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
		renderer = createRenderer();

		container.append(renderer.domElement)

		// 光源
		const light = createLights();
		scene.add(light)

		const cube = createCube()
		scene.add(cube)

		// const cube1 = createCube1()
		// scene.add(cube1)
		// cube1.position.set(1, -1, 0)


		const resizer = new Resizer(container, camera, renderer)

		resizer.onResize = () => {
			this.render()
		}
	}

	render() {
		renderer.render(scene, camera)
	}
}
