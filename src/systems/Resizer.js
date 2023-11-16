function setSize(container, camera, renderer) {
	camera.aspect = container.clientWidth / container.clientHeight
	// 更新平截头体的投影矩阵
	camera.updateProjectionMatrix();

	renderer.setSize(container.clientWidth, container.clientHeight)
	renderer.setPixelRatio(window.devicePixelRatio)
}

class Resizer {
	constructor(container, camera, renderer) {
		setSize(container, camera, renderer)

		window.addEventListener('resize', () => {
			setSize(container, camera, renderer)

			this.onResize()
		})
	}

	onResize() {

	}
}

export { Resizer }
