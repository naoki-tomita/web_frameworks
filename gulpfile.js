var gulp = require( "gulp" ),
    webserver = require( "gulp-webserver" ),
    source = require( "vinyl-source-stream" ),
    babelify = require( "babelify" ),
    browserify = require( "browserify" );

gulp.task( "webserver", function() {
  gulp.src( "src" )
  .pipe( webserver( {
    host: "0.0.0.0",
    port: 8080
  } ) );
} );

gulp.task( "apiserver", function() {

} );

gulp.task( "watch:angularjs", function() {
  gulp.watch( "./src/angularjs/app.js", [ "build:angularjs" ] );
} );

gulp.task( "build:angularjs", function( done ) {
  browserify( {
    entries: [ "./src/angularjs/app.js" ]
  } )
  .transform( babelify )
  .bundle()
  .pipe( source( "app.build.js" ) )
  .pipe( gulp.dest( "./src/angularjs/" ) )
  .on( "end", done );
} );

gulp.task( "default", [ "webserver", "apiserver", "watch:angularjs" ] );
