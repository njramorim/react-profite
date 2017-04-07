import browserSync from 'browser-sync'
import gulp        from 'gulp'
import sourcemaps  from 'gulp-sourcemaps'
import source      from 'vinyl-source-stream'
import buffer      from 'vinyl-buffer'
import browserify  from 'browserify'
import watchify    from 'watchify'
import babel       from 'babelify'
import sass        from 'gulp-sass'
import del         from 'del'

const appConfig = {
  name: 'app'
}

const devFolder = {
  path:  appConfig.name + '/dev',
  js: '/js',
  style: '/sass',
  static: '/static'
}

const distFolder = {
  path: appConfig.name + '/dist',
  js: '/build',
  style: '/css',
  static: '/static'
}

function compile(watch) {
  var bundler = watchify(
    browserify(devFolder.path + devFolder.js + '/' + appConfig.name + '.js', { debug: true })
      .transform(babel.configure({ presets: ['es2015', 'react'] }))
    )

  function rebundle() {
    bundler.bundle()
      .on('error', (err) => { console.error(err); this.emit('end') })
      .pipe(source(appConfig.name + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(distFolder.path + distFolder.js))
  }

  if (watch) {
    bundler.on('update', () => {
      rebundle();
    })

  }

  rebundle();
}

function watch() {
  return compile(true)
}

gulp.task('sass', () => {
  return gulp.src(devFolder.path + devFolder.style + '/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(distFolder.path + distFolder.style))
})

gulp.task('sass:watch', () => {
  gulp.watch(devFolder.path + devFolder.style + '/**/*.scss', ['sass'])

})

gulp.task('static', () => {
  return gulp.src(devFolder.path + devFolder.static + '/**/*')
  	.pipe(gulp.dest(distFolder.path + distFolder.static))
});

gulp.task('static:watch', () => {
	gulp.watch(devFolder.path + devFolder.static + '/**/*', ['static'])
})

gulp.task('browser-sync', () => {
	browserSync.init({
	  server: {
	    baseDir: distFolder.path
	  }
	})
})

gulp.task('delete-build', () => {
  return del([
    distFolder.path + distFolder.static + '/**/*', 
    distFolder.path + distFolder.style + '/**/*'
  ])
})

gulp.task('build', ['sass', 'static'], () => { 
	return compile() 
})

gulp.task('watch', ['sass:watch', 'static:watch'], () => {	
	return watch()  
})

gulp.task('start', ['build', 'watch' , 'browser-sync'], () => {
	gulp.watch(distFolder.path + '/**/*', browserSync.reload)
})
