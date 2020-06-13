const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat");

const source = `./src`;
const output = `./assets`;

const styles = (cb) => {
  gulp
    .src(`${source}/scss/*scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(`${output}/css`))
    .pipe(sourcemaps.write(`./`))
    .pipe(gulp.dest(`${output}/css`));

  cb();
};

const scripts = (cb) => {
  const fileName = `custom.js`;

  gulp
    .src(`${source}/js/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(concat(fileName))
    .pipe(uglify())
    .pipe(gulp.dest(`${output}/js`))
    .pipe(sourcemaps.write(`./`))
    .pipe(gulp.dest(`${output}/js`));

  cb();
};

exports.styles = styles;
exports.scripts = scripts;
exports.default = gulp.series([styles, scripts]);
