"use strict";

let fs = require("fs");
let gulp = require("gulp");
let postcss = require("gulp-postcss");
let postcssimport = require("postcss-import");
let postcsscssnext = require("postcss-cssnext");
let nano = require("gulp-cssnano");
let rename = require("gulp-rename");
let gzip = require("gulp-gzip");
let size = require("gulp-size");
let csslint = require("gulp-csslint");

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

		let sizeContent = `exports.meta = { size: ${ stat.size / 1000 } };`;
		let sizeFile = "./dist/fractures.meta.js";

		return fs.writeFile(sizeFile, sizeContent);
	});
});

// Report csslint after a build
gulp.task("test", ["build"], () => {
	return gulp.src("./dist/fractures.css")
		.pipe(csslint("./csslintrc.json"))
		.pipe(csslint.reporter());
});

// Watch for css changes
gulp.task("watch", () => {
	return gulp.watch("./src/*.css", ["default"]);
});
