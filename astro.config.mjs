import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'static',
	site: 'https://scholarscriptconsult.example', // update when deploying
	build: {
		format: 'directory'
	},
	server: {
		port: 4321
	}
});

