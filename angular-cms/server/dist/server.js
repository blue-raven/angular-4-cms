"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const Promise = require("bluebird");
const chalk_1 = require("chalk");
const forum_routes_1 = require("./routing/forum.routes");
const admin_routes_1 = require("./routing/admin.routes");
const config = require('../config.json');
const magenta = chalk_1.default.bgMagentaBright.white, green = chalk_1.default.bgGreen.white, yellow = chalk_1.default.bgYellow.white;
mongoose.Promise = Promise;
mongoose.connect(config.MONGO_URL, { useMongoClient: true });
mongoose.connection
    .on('connected', () => {
    console.log(green('Successfully Connected to MLab\'s DB...\n'));
})
    .on('error', (err) => {
    console.log(magenta('Error Connecting to MLab\'s DB...\n'));
    console.log(magenta(err));
})
    .on('disconnected', () => {
    console.log(yellow('Successfully Disconnected from MLab\'s DB...\n'));
});
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log(yellow('SIGINT'));
        process.exit(0);
    });
});
const port = config.PORT;
let app = express();
app.set('port', port);
app.use(forum_routes_1.default.router);
app.use(admin_routes_1.default.router);
let listeningHandler = () => {
    console.log(green(`Express Server Listening on port <${port}> \n`));
};
let errorHandler = (err) => {
    console.log(magenta(err));
};
let server = app.listen(config.PORT);
server.on('listening', listeningHandler);
server.on('error', errorHandler);
