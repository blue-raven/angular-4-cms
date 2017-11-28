"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ForumRoutes {
    constructor() {
        this._namespace = '/forum';
        this._router = express_1.Router();
        this.mountRoutes();
    }
    mountRoutes() {
        this._router.get(this._namespace + '/test', this.test);
    }
    test(req, res) {
        res.status(200).json({ message: 'Success!' });
    }
    get namespace() { return this._namespace; }
    get router() { return this._router; }
}
exports.default = new ForumRoutes();
