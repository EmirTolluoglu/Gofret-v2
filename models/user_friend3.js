const mongoose = require('mongoose');

const user_friend3Schema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
        
    },
    friend_user_id: {
        type: Number,
        required: true
    },
    friend_date: {
        type: Date,
        default: Date.now
    }
   
})    
const user_friend3 = mongoose.model('user_friend3', user_friend3Schema);

module.exports = user_friend3;