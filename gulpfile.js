"use strict";

let gulp = require("gulp");
let postcss = require("gulp-postcss");
let postcssimport = require("postcss-import");
let postcsscssnext = require("postcss-cssnext");
let nano = require("gulp-cssnano");
let rename = require("gulp-rename");
let gzip = require("gulp-gzip");
let size = require("gulp-size");
let csslint = require("gulp-csslint");

let files = [ "./src/fractures.css" ];
let postcssProcessors = [
	postcssimport(),
	postcsscssnext({ browsers: ["last 2 versions"] })
];

gulp.task("default", () => {
	return gulp.src(files)
		.pipe(postcss(postcssProcessors))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }));
});

gulp.task("build", ["default"], () => {
	return gulp.src(files)
		.pipe(postcss(postcssProcessors))
		.pipe(nano())
		.pipe(rename("fractures.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))

		.pipe(gzip())
		.pipe(rename("fractures.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }));
});

gulp.task("test", ["build"], () => {
	return gulp.src("./dist/fractures.css")
		.pipe(csslint("./csslintrc.json"))
		.pipe(csslint.reporter());
});

gulp.task("watch", () => {
	return gulp.watch("./src/*.css", ["default"]);
});
