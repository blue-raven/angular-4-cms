import * as express from 'express';
import * as cors from 'cors';
import * as parser from 'body-parser';

import mongoose = require( 'mongoose');
import Promise  = require( 'bluebird');

import chalk from 'chalk';

import ForumRoutes from './routing/forum.routes';
import AdminRoutes from './routing/admin.routes';

const   magenta = chalk.bgMagentaBright.white,
        green   = chalk.bgGreen.white,
        yellow  = chalk.bgYellow.white;

mongoose.Promise = Promise;

mongoose.connect(
    'mongodb://snowy:goober1515@ds115085.mlab.com:15085/studiocc-sandbox',
    { useMongoClient: true }
);

mongoose.connection
    .on( 'connected', () => {

        console.log( green( 'Successfully Connected to MLab\'s DB...\n' ) );
    })
    .on( 'error', ( err ) => {

        console.log( magenta( 'Error Connecting to MLab\'s DB...\n' ) );
        console.log( magenta( err ) );        
    })
    .on( 'disconnected', () => {

        console.log( yellow( 'Successfully Disconnected from MLab\'s DB...\n' ) );        
    });

process.on( 'SIGINT', () => {

    mongoose.connection.close( () => {
        
        console.log( yellow( 'SIGINT' ) );
        process.exit( 0 );
    });
});

const port = 8083;
let app = express();

app.set( 'port', port );
app.use( ForumRoutes.router );
app.use( AdminRoutes.router );

let listeningHandler = (): void => {
    
    console.log( green( `Express Server Listening on port <${port}> \n` ) );
};

let errorHandler = ( err ): void => {

    console.log( magenta( err ) );
};

let server = app.listen( port );
server.on( 'listening', listeningHandler );
server.on( 'error', errorHandler );