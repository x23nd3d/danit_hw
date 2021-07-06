const gulp = require('gulp');
const sass = require('gulp-sass');							//sass
const browserSync = require('browser-sync').create();		//runtime watcher and changer
const clean = require('gulp-clean');						//cleaner product directory "dev"
const cleanCSS = require('gulp-clean-css');					//CSS minifier
const sourcemaps = require('gulp-sourcemaps');				//SCSS navigation in Chrome inspector
const rename = require("gulp-rename");						//rename files after minify
const concat = require('gulp-concat');						//concat for js
const terser = require('gulp-terser');						//minify for js
const autoprefixer = require('gulp-autoprefixer');			//cross-browser compatibility css
const babel = require('gulp-babel');						//cross-browser compatibility js
const nunjucks = require('gulp-nunjucks-render');           //template engine

const fontsFiles = [										//составляем массив переменних с все файлов шрифтов, для переноса в папку разработки
	'./src/fonts/**.eot',
	'./src/fonts/**.ttf',
	'./src/fonts/**.woff',
	'./src/fonts/**.otf'
];

const imgFiles = [
    './src/img/**/**.jpg',
    './src/img/**/**.png'
];

function cleandev() {										//модуль отчистки папки перед каждой расспаковкой
    return gulp.src('./build', {read: false})
        .pipe(clean())
}

function img() {											//модуль переноса картинок
    return gulp.src(imgFiles)
        .pipe(gulp.dest('./build/img'))
}

function buildhtml () {										//Copy index.html to dir "dev"
    return gulp.src('./src/*.html')
            .pipe(nunjucks({                                // Шаблонизатор
                path: 'src/'
            }))
            .pipe(gulp.dest('build'))
            .pipe(browserSync.stream());
}

function fonts () {											//Copy fonts to dir "dev"
    return gulp.src(fontsFiles)
        .pipe(gulp.dest('./build/fonts'))
}

function jq () {											//Copy fonts to dir "dev"
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build/js'))
//		.pipe(browserSync.stream());
}

function scripts () {
    return gulp.src('src/**/*.js')
		.pipe(babel({											//babel
            presets: ['@babel/env']
        }))
        .pipe(terser({											//terser
			toplevel: true
		}))														//minify js
        .pipe(concat('all.js'))									//concat all js files
		.pipe(rename(function (path) {							// function of rename extname for .css
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

function forSass() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({level: 2}))								// minifyCSS
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],								// для браузеров которые использует 0.1%
			cascade: false
        }))
        .pipe(rename(function (path) {							// function of rename extname for .css
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({											// инструмент для live reload
		server: {
			baseDir: "./build"
		}
	});

	gulp.watch('./src/**/*.scss', forSass);				// ставим watcher для слежения за изменениями в файлах
	gulp.watch('./src/**/*.js', scripts);
	gulp.watch('./src/**/*.js', jq);
	gulp.watch('./src/**/*.html', buildhtml);
}

gulp.task('cleandev', cleandev);
gulp.task('img', img);
gulp.task('buildHtml', buildhtml);
gulp.task('scripts', scripts);
gulp.task('sass', forSass);
gulp.task('watch', watch);
gulp.task('fonts', fonts);
gulp.task('jq', jq);
gulp.task('build', gulp.series('cleandev', gulp.series(img, buildhtml, fonts, jq, scripts, forSass)));
gulp.task('dev', gulp.series('build', watch));