const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps");

const path = `./assets`;

const styles = (cb) => {
  gulp
    .src(`${path}/scss/*scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${path}/css`))
    .pipe(sourcemaps.write(`./`))
    .pipe(gulp.dest(`${path}/css`));

  cb();
};

exports.styles = styles;
exports.default = styles;
