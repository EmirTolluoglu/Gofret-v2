const mongoose = require('mongoose');

const product_orderSchema = new mongoose.Schema({
    product_first_id: {
        type: Number,
        required: true
        
    },
    product_first_id: {
        type: Number,
        required: true,
        
    },
    order_date: {
        type: Date,
        default: Date.now
    },
    order_schedule: {
        type: Number,
        required: true,
    },
    friend_status: {
        type:String,
        enum : ['progress','cancel_first','finished','finished'],
        default:null
        
        
        
    },
    started_date: {
        type: Date,
        default: null
    },
    finished_at: {
        type: Date,
        default: null
    }
    
   
})    
const product_order = mongoose.model('product_order', product_orderSchema);

module.exports = product_order;

