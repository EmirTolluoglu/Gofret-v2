const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        maxLength:32    
        
    },
    parent_category_id: {
        type: Number,
        required: true,
        default:0
        
    },
    category_color: {
        type: String,
        required: true,
        maxLength:10
       
    },
    category_icon: {
        type: Number,
        required: true,
        maxLength:32
    }
    
   
})    
const category = mongoose.model('category', categorySchema);

module.exports = category;