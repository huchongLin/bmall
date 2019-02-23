var gulp = require("gulp");
var connect = require("gulp-connect");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
gulp.task("sayHi",function(){
	console.log("运行成功！");
})
gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
gulp.task("copyImg",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload());
})
gulp.task("copyCss",function(){
	gulp.src("css/**")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});
gulp.task("babel",function(){
	gulp.src("js/*.js")
	.pipe(babel({presets:["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
});
/*修改代码 start*/
gulp.task("scripts",function(){
	gulp.src(['js/a.js','js/b.js'])//选择要合并的js
	.pipe(concat('mix.js'))//取一个名字（未压缩）
	.pipe(gulp.dest('dist/js'))
	.pipe(uglify())
	.pipe(rename("mix.min.js"))//取一个名字（压缩过的）
	.pipe(gulp.dest("dist/js"));
});
/*待修改代码 end*/
gulp.task("init",["sayHi","copyHtml","copyImg","sass","babel","copyCss"]);
gulp.task("watch",function(){
	gulp.watch("*.html",["copyHtml","babel","sass","copyImg","copyCss"]);
	gulp.watch("js/**.js",["babel"]);
	gulp.watch("sass/**.scss",["copyHtml","babel","sass","copyImg","copyCss"]);
	gulp.watch("img/**/*",["copyHtml","babel","sass","copyImg","copyCss"]);
	gulp.watch("css/**",["copyHtml","babel","sass","copyImg","copyCss"]);
});
gulp.task("sever",function(){
	connect.server({
		root:'dist',
		livereload:true
		});
})
gulp.task("default",["sever","watch"]);
























