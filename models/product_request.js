const mongoose = require('mongoose');

const product_requestSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true
        
    },
    requested_product_id: {
        type: Number,
        required: true,
        
    },
    product_request_time: {
        type: Date,
        default: Date.now
    },
    product_request_statu: {
        type: Number,
        required: true,
        default:0
    }
    
   
})    
const product_request = mongoose.model('product_request', product_requestSchema);

module.exports = product_request;