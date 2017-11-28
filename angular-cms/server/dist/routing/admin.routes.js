"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_service_1 = require("../services/category.service");
class AdminRoutes {
    constructor() {
        this._namespace = '/admin/';
        this._router = express_1.Router();
        this.mountRoutes();
    }
    mountRoutes() {
        this._router.post(this._namespace + 'forum/listings', this.forumListings);
    }
    /**
     * Routes:
     *      Forum:
     *          Category & Topic Listings
     *          Add, Remove, Update Categories
     *          Add, Remove, Update Topics
     *          Move Topics between Categories
     */
    forumListings(req, res) {
        // res.status( 200 ).json({message: 'forum listings...' });
        category_service_1.default.all().then((categories) => {
            res.status(200).json({ response: categories });
        })
            .catch(err => {
            res.status(400).json({ error: err });
        });
    }
    get router() { return this._router; }
}
exports.default = new AdminRoutes();
