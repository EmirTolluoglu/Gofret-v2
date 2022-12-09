const mongoose = require('mongoose');

const product_commentSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true
        
    },
    user_id: {
        type: Number,
        required: true
    },
    product_comment_title: {
        type: String,
        required: true, 
        maxLength: 64
    },
    product_comment_content: {
        type: String,
        required: true, 
        
    },
    product_comment_starts: {
        type: Number,
        required: true, 
        
    },
    product_comment_date: {
        type: Date,
        default:Date.now, 
        
    }
})    
const product_comment = mongoose.model('product_comment', product_commentSchema);

module.exports = product_comment;