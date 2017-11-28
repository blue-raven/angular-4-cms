"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category = require('../../models/category.model');
/**
 * Data Service for the MongoDb Collection of Categories...
 */
class CategoryService {
    constructor() {
    }
    all(limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return Category.find({})
                .limit(limit)
                .populate('topics')
                .exec();
        });
    }
    findById(catId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Category.findOne({ _id: catId })
                .populate('topics')
                .exec();
        });
    }
    create(json) {
        return __awaiter(this, void 0, void 0, function* () {
            let cat = new Category();
            cat['name'] = json['name'];
            cat['description'] = json['description'];
            return cat.save();
        });
    }
}
/** Exporting it as a Singleton...? */
exports.default = new CategoryService();
