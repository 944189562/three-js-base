import { PerspectiveCamera } from 'three'

function createCamera(fov, aspect, near, far) {
	const camera = new PerspectiveCamera(fov, aspect, near, far)

	camera.position.set(0,0,5)

	// camera.rotation.x = 0.1

	return camera
}

export { createCamera }
