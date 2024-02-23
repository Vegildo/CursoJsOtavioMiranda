// fs = File System

const fs = require("fs").promises;
const { log } = require("console");
const path = require("path");

// digite fs. e olhe todos métodos atrelados ao fs

async function readDir(rootDir) {
	rootDir = rootDir || path.resolve(__dirname);
	const files = await fs.readdir(rootDir);
	walk(files, rootDir);
}

async function walk(files, rootDir) {
	for (let file of files) {
		const fileFullPath = path.resolve(rootDir, file);
		const stats = await fs.stat(fileFullPath);

		// console.log(fileFullPath, stats.isDirectory());

		if (/\.git/g.test(fileFullPath)) continue;
		if (/\.node_modules/g.test(fileFullPath)) continue;

		if (stats.isDirectory()) {
			readDir(fileFullPath);
			continue;
		}

		// if (!/\.css$/g.test(fileFullPath)) continue;

		if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) {
			continue;
		}

		console.log(fileFullPath);
	}
}

readDir(path.resolve(__dirname, "..", ".."));

// console.log(path.resolve(__dirname, "..", ".."));

// readDir(
// 	"/c/Users/Leonardo/Documents/Udemy/Curso de JavaScript  TypeScrit do básico ao avançado 2022 - Luiz Otávio/Seção 10/Aula 128"
// );

// fs.readdir(path.resolve(__dirname))
// 	.then(files => console.log(files))
// 	.catch(er => console.log(er));
