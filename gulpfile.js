var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require("gulp-cssmin");

var files = "./src/fractures.less";

gulp.task("default", function() {
	gulp.src(files)
		.pipe(less())
		.pipe(gulp.dest("./dist"));
});

gulp.task("prod", function () {
	gulp.src(files)
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
	gulp.watch(files, ["default"]);
});
