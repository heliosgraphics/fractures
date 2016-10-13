"use strict";

const fs = require("fs");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const postcssimport = require("postcss-import");
const postcsscssnext = require("postcss-cssnext");
const nano = require("gulp-cssnano");
const rename = require("gulp-rename");
const gzip = require("gulp-gzip");
const size = require("gulp-size");
const csslint = require("gulp-csslint");

let files = ["./src/fractures.css"];
let postcssVanilla = [
	postcssimport(),
	postcsscssnext({ browsers: [""] })
];
let postcssAutoprefix = [
	postcssimport(),
	postcsscssnext({ browsers: ["last 2 versions"] })
];

// Build
gulp.task("build", [
	"default",
	"build: vanilla",
	"build: vanilla-size",
	"build: autoprefixed"
]);

// Build only fractures.css
gulp.task("default", () => {
	return gulp.src(files)
		.pipe(postcss(postcssVanilla))
		.pipe(gulp.dest("./dist"));
});

// Build without autoprefixing
gulp.task("build: vanilla", () => {
	return gulp.src(files)
		.pipe(postcss(postcssVanilla))
		.pipe(nano())
		.pipe(rename("fractures.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))

		.pipe(gzip())
		.pipe(rename("fractures.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }));
});

// Build autoprefixed version
gulp.task("build: autoprefixed", () => {
	return gulp.src(files)
		.pipe(postcss(postcssAutoprefix))
		.pipe(nano())
		.pipe(rename("fractures.prefixed.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))

		.pipe(gzip())
		.pipe(rename("fractures.prefixed.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }));
});

// Report vanilla file size
gulp.task("build: vanilla-size", ["build: vanilla"], () => {
	let file = "./dist/fractures.min.css.gz";

	fs.stat(file, (error, stat) => {
		if(error) return console.log("vanilla-size failed");

		let sizeContent = `export default { size: ${ stat.size / 1000 } };`;
		let sizeFile = "./dist/fractures.meta.ts";

		return fs.writeFile(sizeFile, sizeContent);
	});
});

// Report csslint after a build
gulp.task("test", ["build"], () => {
	return gulp.src("./dist/fractures.css")
		.pipe(csslint("./csslintrc.json"))
		.pipe(csslint.formatter());
});

// Watch for css changes
gulp.task("watch", () => {
	return gulp.watch("./src/*.css", ["default"]);
});
