var autoprefixer = require("autoprefixer");
var gulp = require("gulp");
var postcss = require("gulp-postcss");
var postcssimport = require("postcss-import");
var postcsscssnext = require("postcss-cssnext");
var nano = require("gulp-cssnano");
var rename = require("gulp-rename");
var gzip = require("gulp-gzip");
var size = require("gulp-size");
var csslint = require("gulp-csslint");

var files = [ "./src/fractures.css" ];
var postcssProcessors = [
	postcssimport(),
	postcsscssnext(),
	autoprefixer({ browsers: [] })
];

gulp.task("default", function() {
	return gulp.src(files)
		.pipe(postcss(postcssProcessors))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }));
});

gulp.task("build", ["default"], function() {
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

gulp.task("test", ["build"], function() {
	return gulp.src("./dist/fractures.css")
		.pipe(csslint("./csslintrc.json"))
		.pipe(csslint.reporter());
});

gulp.task("watch", function() {
	return gulp.watch("./src/*.css", ["default"]);
});
