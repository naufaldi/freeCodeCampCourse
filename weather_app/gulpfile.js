var gulp = require("gulp"),
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
browserSync = require("browser-sync"),
webpack = require("webpack-stream");

gulp.task("sass", function () {
    return gulp.src("./resource/assets/sass/**/*scss")
    .pipe(sasss())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/assets/css"))
})

gulp.task("serve", function(){
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    })
    gulp.watch("./resource/assets/sass/**/*.scss",['sass']);
    gulp.watch("./public/assets/css/**/*.css").on("change",browserSync.reload)
    gulp.watch("./public/*.html").on("change", browserSync.reload)
})