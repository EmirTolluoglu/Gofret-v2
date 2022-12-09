const mongoose = require('mongoose');

const user_badgeSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
        
    },
    user_interests_value: {
        type: String,
        required: true,
        maxLength:16
    }
   
   
})    
const user_interests = mongoose.model('user_interests', user_badgeSchema);

module.exports = user_interests;