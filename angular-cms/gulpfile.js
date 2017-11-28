const   gulp    = require( 'gulp' ),
        ts      = require( 'gulp-typescript' ),
        nodemon = require( 'gulp-nodemon' ),
        copy    = require( 'gulp-copy' ),
        chalk = require( 'chalk' );

const magenta   = chalk.bgMagenta.white,
      cyan      = chalk.bgCyan.white;

const project = ts.createProject( 'tsconfig.server.json' );

const config = {

    tsSrc: 'server/src/**/*.ts',
    dest: 'server/dist'
};

gulp.task( 'transpile', () => {

    let src = project.src()
                     .pipe( project() );
    
    return src.js.pipe( gulp.dest( config.dest ) );    
});

gulp.task( 'watch', [ 'transpile' ], () => {

    gulp.watch( config.tsSrc, [ 'transpile' ] );
});

gulp.task( 'dev', () => {

    let stream = nodemon({
        ext: 'js',
        script: 'server/dist/server.js'
    })
    .on( 'restart', () => {

        console.log( cyan( 'Restarting Server from gulp-nodemon...' ));
    })
    .on( 'crash', () => {

        console.log( magenta( 'App Server has borked!  Attempting to restart now...' ) );
        stream.emit( 'restart', 10 );
    });
});

gulp.task( 'default', [ 'watch', 'dev' ] );