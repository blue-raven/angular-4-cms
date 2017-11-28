const mongoose = require( 'mongoose' ),
      Schema   = mongoose.Schema;

    /**
     * Import because of missing schema error,
     * which I has never seen before...?
     */
    require( './topic.model');

let Category = new Schema({

    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    topics: [{
        
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }]
},
{
    timestamps: true
}
);

module.exports = mongoose.model( 'Category', Category );