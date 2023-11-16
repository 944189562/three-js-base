<script setup>
import { ref, onMounted } from "vue";
import { World } from 'utils/world'

const scene = ref(null)

function render() {
	// 1. 创建一个world app实例
	const world = new World(scene.value)

	// 2. 渲染场景
	world.render()
}

onMounted(() => {
	render()
})
</script>

<template>
	<div ref="scene" id="scene-container"></div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
