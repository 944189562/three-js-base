import {
	BoxGeometry,
	BufferGeometry,
	BufferAttribute,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Matrix4
} from 'three'

function createCube() {
	const geometry = new BoxGeometry(2, 2, 2)

	// 设置材质
	const spec = {
		color: 'purple'
	}
	const material = new MeshStandardMaterial(spec)
	const cube = new Mesh(geometry, material)
	cube.matrix = new Matrix4()

	cube.rotation.set(-0.5, -0.1, 0.8)
	console.log(cube)
	// cube.scale.set(0.1, 0.1, 0.1);

	// const cube1 = createCube1()
	// cube1.position.set(1, -1, 0)
	// cube.add(cube1)

	return cube
}

function createCube1() {
	const geometry = new BufferGeometry();
// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
// 因为在两个三角面片里，这两个顶点都需要被用到。
	const vertices = new Float32Array([
		1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,
		-1.0, -1.0, 1.0
	]);

// itemSize = 3 因为每个顶点都是一个三元组。
	geometry.setAttribute('position', new BufferAttribute(vertices, 3));
	const material = new MeshBasicMaterial({color: 0x0000ff});
	const mesh = new Mesh(geometry, material);

	return mesh
}

export { createCube, createCube1 }
