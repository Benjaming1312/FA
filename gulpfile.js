const
	gulp = require('gulp'), //gulp主程式
	babel = require('gulp-babel') // es6
	uglify = require('gulp-uglify'), //最小化JS
	sass = require('gulp-sass') //sass
	autoprefixer = require('gulp-autoprefixer') //autoprefixer
	sourceMap = require('gulp-sourcemaps') //sourcemaps
	concat = require('gulp-concat') //合併js
	gulpImagemin = require('gulp-imagemin') //img min
	pug = require('gulp-pug') //pug
	compass = require('gulp-compass') //compass
	connect = require('gulp-connect') //connect
	browserify = require('browserify')
	// rollupStream = require('@rollup/stream')
	// source = require('vinyl-source-stream')
	// terser = require('rollup-plugin-terser')
	del = require('del')
	plumber = require('gulp-plumber')
	exec = require('child_process').exec
	buffer = require('vinyl-buffer')
	source = require('vinyl-source-stream')
	log = require('gulplog')


	gulp.task('clean', function() {
		return del(['dist']);
	})

// 監看JS
gulp.task('watch',function(){
	// exec('rm -rd dist/html')
	gulp.watch('gulp/**/**',['scripts','styles','views']) //(‘原始路徑’,['執行的名稱']) **代表路徑的所有檔案轉換
})

//connect hotreload
gulp.task('connect',function(){
	connect.server({
			name: "dist server",
			root: './',
			port: 8003,
			livereload: true
	})
})

gulp.task('default',['clean', 'watch','connect']) //gulp 直接執行

const base_domain = 'benjaming1312.github.io/FA'
const css_path = '/dist/css'
const js_path = '/dist/js'
// 執行轉換JS
gulp.task('scripts',function(){
	const b = browserify({
		entries: 'gulp/js/userjs.js',
		debug: true
	})
	// gulp.src('gulp/js/userjs.js') //輸入路徑 **代表路徑的所有檔案轉換
		b.bundle() //輸入路徑 **代表路徑的所有檔案轉換
			.pipe(plumber())
			.pipe(source('userjs.js'))
			.pipe(buffer())
			.pipe(sourceMap.init({loadMaps: true}))
					// Add transformation tasks to the pipeline here.
					.pipe(uglify())
					.on('error', log.error)
			.pipe(sourceMap.write('./'))
			.pipe(gulp.dest(`dist/${base_domain}${js_path}`)) //翻譯後的路徑
			.pipe(gulp.dest('dist/js')) //輸出路徑
			// .pipe(plumber())
			// // .pipe(sourceMap.init())
			// // .pipe(browserify())
			// .pipe(babel({
			// 		presets: ['env']
			// }))
			// .pipe(concat('userjs.js')) //合併所有JS產出為userjs.js
			// .pipe(uglify()) //最小化JS
			// .pipe(sourceMap.write('.', {
			// 	includeContent: false,
			// 	sourceRoot: 'gulp/js'
			// }))
			// .pipe(gulp.dest(`dist/${base_domain}${js_path}`)) //翻譯後的路徑
			// .pipe(gulp.dest('dist/js')) //輸出路徑
			// .pipe(connect.reload())
})

// // // 轉換sass
gulp.task('styles',function(){
	gulp.src('gulp/sass/usercss.sass') //轉換的檔案
			.pipe(plumber())
			.pipe(sourceMap.init()) //sourcemap
			.pipe(sass({outputStyle: 'compressed',errLogToConsole: true}).on('error',sass.logError)) //編譯
			.pipe(autoprefixer("last 1 version"," > 1%" , "ie 8", "ie 7")
					) //autoPrefix
			.pipe(sourceMap.write('.',{
					includeContent: false,
					sourceRoot: 'gulp/sass'
			})) //sourceMap寫入在一樣的地方  
			.pipe(gulp.dest(`dist/${base_domain}${css_path}`)) //翻譯後的路徑
			.pipe(gulp.dest('dist/css/')) //翻譯後的路徑
			.pipe(connect.reload())
})

//圖片壓縮
gulp.task('image',function(){
	gulp.src('gulp/img/compress/**')
			.pipe(gulpImagemin())
			.pipe(gulp.dest('dist/images'))
})

//pug 轉html
gulp.task('views',function(){
	gulp.src('gulp/html/page/**.pug')
			.pipe(plumber())
			.pipe(pug({pretty: true}))
			.pipe(gulp.dest('./dist/html'))
			.pipe(gulp.dest('./'))
			.pipe(connect.reload())
})

