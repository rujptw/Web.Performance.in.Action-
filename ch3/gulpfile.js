var gulp = require('gulp'),
uncss = require('gulp-uncss');
gulp.task('uncss', async function() {   
  gulp.src('./css/styles.css')  
  .pipe(await uncss({  
         html: ['index.html']   
         })) 
        .pipe(gulp.dest('./css/min-styles.css')); 
 })
