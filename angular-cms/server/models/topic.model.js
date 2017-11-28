const   mongoose = require( 'mongoose' ),
        Schema   = mongoose.Schema;

let Topic = new Schema({

    /**
     * Here we are storing or caching a reference to the parent
     * category for several reasons,  (data fan out of sorts)
     * so that we can move this topic freely,  as well as use
     * the category data in bread crumbs or what not,  howeber we
     * need the extra data on request for special functionality...
     */
    parent_category: {

        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: {
        required: true,
        type: String
    },
    /**
     * Content is the basic intro content for the topic on the
     * forum listings page as well as on the post listings,  as well..,
     */
    content: {
        required: true,
        type: String,
        min: 6,
        max: 128
    },
    posts: [{
        required: false,
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

module.exports = mongoose.model( 'Topic', Topic );

