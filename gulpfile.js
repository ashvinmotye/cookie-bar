const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps");

const styles = (cb) => {
  gulp
    .src(`scss/*scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(`css`))
    .pipe(sourcemaps.write(`./`))
    .pipe(gulp.dest(`css`));

  cb();
};

exports.styles = styles;
exports.default = styles;
