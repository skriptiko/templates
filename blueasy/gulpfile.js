const 	gulp = require("gulp"),
        less = require("gulp-less"),
        path = require("path");
 
gulp.task('less', function () {
  return gulp.src('./assets/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task("watch", () => {
	gulp.watch("./assets/less/**/*.less", ["less"]);
});

gulp.task("default", ["less", "watch"]);
