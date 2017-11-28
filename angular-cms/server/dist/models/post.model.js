const   mongoose = require( 'mongoose' ),
        Schema   = mongoose.Schema;

let Post = new Schema({

    /**
     * The parent topic that this post belongs to,  part of
     * data fan out for the most part...
     */
    parent_topic: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    },
    author: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        required: true,
        type: string,
        min: 3,
        max: 64
    },
    content: {
        required: true,
        type: string,
        min: 3,
        max: 1024
    }
});

module.exports = mongoose.model( 'Post', Post );