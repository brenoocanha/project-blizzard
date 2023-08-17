const BrowserSync = require('browser-sync/dist/browser-sync')
const gulp = require('gulp')
const autoPrefixer = require('gulp-autoprefixer') // Cria autoprefixer (ex: webkit) no CSS para versões anteriores do navegador
const sass = require('gulp-sass')(require('sass')) // Compila o SASS
const browserSync = require('browser-sync').create() // Atualiza o browser em qualquer alteração com ela aplicada
const concat = require('gulp-concat') // Junta JS em um único arquivo
const babel = require('gulp-babel') // Torna o JS interpretável por navegadores antigos, transformando todo tipo de variável primária em 'var'
const uglify = require('gulp-uglify') // Minifica o JS

// Compila o SASS, adicionando autoprefixer e atualizando a página
function compileSass() {
  return gulp.src('scss/*.scss')
  .pipe(sass({ outputStyle : 'compressed'}))
  .pipe(autoPrefixer({
    overrideBrowsersList: ['last 2 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream())
}

// Tarefa do SASS
gulp.task('sass', compileSass)

// Minifica o CSS de bibliotecas adicionadas
function pluginsCss() {
  return gulp.src('css/lib/*.css')
  .pipe(concat('plugins.css'))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream())
}

// Tarefa do CSS (lib)
gulp.task('plugincss', pluginsCss)

// Função do concat, babel e uglify
function gulpJs() {
  return gulp.src('js/scripts/*.js')
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

// Tarefa do JS
gulp.task('alljs', gulpJs)

// Função do browser-sync
function browser() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

// Minifica o JS de bibliotecas adicionadas
function pluginsJs() {
  return gulp
  .src([
    './js/lib/aos.min.js',
    './js/lib/swiper.min.js'
  ])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

// Tarefa do JS (lib)
gulp.task('pluginsjs', pluginsJs)

// Tarefa do browser-sync
gulp.task('browser-sync', browser)

// Função do watch para alterações em SASS e em HTML
function watch() {
  gulp.watch('scss/*.scss', compileSass)
  gulp.watch('css/lib/*.css', pluginsCss)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('js/scripts/*.js', gulpJs)
  gulp.watch('js/lib/*.js', pluginsJs)
}

// Tarefa do watch
gulp.task('watch', watch)

// Tarefas default que executam o watch e o browser-sync de forma paralela
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'plugincss', 'alljs', 'pluginsjs'))