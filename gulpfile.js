var gulp = require("gulp");
var del = require("del");

gulp.task('clean', function(){
	del('./dist/css/');
});

gulp.task('move-scss',function(){
	return gulp.src('./source/scss/*.scss')
			.pipe(gulp.dest('./dist/css'));
});

gulp.task('move-index',function(){
	return gulp.src('./source/index.html')
			.pipe(gulp.dest('./dist'));
});

gulp.task('monitora-tarefas',function(){
	gulp.watch('./source/**',['move-scss','move-index']);
});