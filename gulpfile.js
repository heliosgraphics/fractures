const gulp = require("gulp")
const gzip = require("gulp-gzip")
const nano = require("gulp-cssnano")
const postcss = require("gulp-postcss")
const postcsscssnext = require("postcss-cssnext")
const postcssimport = require("postcss-import")
const rename = require("gulp-rename")
const size = require("gulp-size")
const stylelint = require("gulp-stylelint")

const files = ["./src/fractures.css"]
const postcssVanilla = [postcssimport(), postcsscssnext({ browsers: [""] })]
const postcssAutoprefix = [
	postcssimport(),
	postcsscssnext({ browsers: ["last 2 versions"] })
]

// Build autoprefixed version
const buildAutoprefixed = () =>
	gulp
		.src(files)
		.pipe(postcss(postcssAutoprefix))
		.pipe(nano())
		.pipe(rename("fractures.prefixed.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))
		.pipe(gzip())
		.pipe(rename("fractures.prefixed.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }))

// Build without autoprefixing
const buildVanilla = () =>
	gulp
		.src(files)
		.pipe(postcss(postcssVanilla))
		.pipe(nano())
		.pipe(rename("fractures.min.css"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))
		.pipe(gzip())
		.pipe(rename("fractures.min.css.gz"))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true, gzip: true }))


// Build only fractures.css
const defaultTask = () =>
	gulp
		.src(files)
		.pipe(postcss(postcssVanilla))
		.pipe(gulp.dest("./dist"))
		.pipe(size({ showFiles: true }))


const lint = () => gulp
	.src("./dist/fractures.css")
	.pipe(
		stylelint({ reporters: [{ formatter: "string", console: true }] })
	)

// Build
gulp.task("build", gulp.series(defaultTask, buildVanilla, buildAutoprefixed));

// Test
gulp.task("test", gulp.series(defaultTask, lint));
