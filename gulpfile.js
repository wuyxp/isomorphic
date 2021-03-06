var gulp = require('gulp');
var babel = require('gulp-babel');

var nodemon = require('gulp-nodemon');
var sequence = require('run-sequence');

// 编译源文件
gulp.task('compile', function(){
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015','stage-2']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('start', function(){
  return nodemon({
    watch: 'dist',
    script: 'dist/index.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('default', function(callback){
  sequence(['compile', 'watch'], 'start', callback);
  console.log('watch-compile--success');
})