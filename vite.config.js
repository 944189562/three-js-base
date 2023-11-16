import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': '/src',
			'components': '/src/components',
			'systems': '/src/systems',
			'utils': '/src/utils'
		}
	},
	server: {
		host: '0.0.0.0'
	},
	plugins: [vue(),],
})
