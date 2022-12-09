const mongoose = require('mongoose');

const user_followSchema = new mongoose.Schema({
    user_follow_id: {
        type: Number,
        required: true
        
    },
    user_id: {
        type: Number,
        required: true
    },
    follow_user_id: {
        type: Number,
        required: true
    },

    user_follow_date: {
        type: Date,
        default: Date.now
    }
   
})    
const user_follow = mongoose.model('user_follow', user_followSchema);

module.exports = user_follow;