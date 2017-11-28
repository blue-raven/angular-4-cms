const Category = require( '../../models/category.model' );

/**
 * Data Service for the MongoDb Collection of Categories...
 */
class CategoryService {

    constructor() {

    }

    async all( limit: number = 10 ) {

        return Category.find({})
                        .limit( limit )
                        .populate( 'topics' )
                        .exec();
    }

    async findById( catId: number ) {

        return Category.findOne({ _id: catId })
            .populate( 'topics' )
            .exec();
    }

    async create( json: object ) {

        let cat = new Category();
        cat['name']         = json[ 'name' ];
        cat['description']  = json['description'];

        return cat.save();
    }
}

/** Exporting it as a Singleton...? */
export default new CategoryService();