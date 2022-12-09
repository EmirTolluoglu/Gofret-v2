const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        maxLength: 32
        
    },
    product_content: {
        type: String,
        required: true
    },
    user_id: {
        type: Number,
        required: true, 
        
    },
    product_seourl: {
        type: String,
        required: true, 
        maxLength:250
        
    },
    product_keywords: {
        type: String,
        required: true,
        maxLength:250 
        
    },
    product_state: {
        type: Number,
        required: true
        
    },
    product_photo: {
        type: String,
        required: true,
        maxLength:64 
        
    },
    price_category_id: {
        type: Number,
        required: true
        
    },
    product_time: {
        type: Date,
        default:Date.now
        
    },
    product_type: {
        type:String,
        enum : ['teach','learn'],
        default:null
        
        
    },
    category_id: {
        type: Number,
        required: true
        
    }

})    
const product = mongoose.model('product', productSchema);

module.exports = product;