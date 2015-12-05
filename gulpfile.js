var cssmin = require("gulp-cssmin");
var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");

var file = "./src/fractures.less";

gulp.task("default", function() {
	return gulp.src(file)
		.pipe(less())
		.pipe(gulp.dest("./dist"));
});

gulp.task("prod", function() {
	return gulp.src(file)
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename("fractures.min.css"))
		.pipe(gulp.dest("./dist"));
});

gulp.task("watch", function() {
	return gulp.watch("./src/*.less", ["default"]);
});
