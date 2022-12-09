const mongoose = require('mongoose');

const user_friendSchema = new mongoose.Schema({
    friend_first_id: {
        type: Number,
        required: true
        
    },
    friend_second_id: {
        type: Number,
        required: true
    },
    friend_status: {
        type: String,
        enum: ['pending_first_second','pending_second_first','friends','block_first_second','block_second_first','lock_both'],
        default:null
    },
    friend_date: {
        type: Date,
        default: Date.now
    }
})    
const user_friend = mongoose.model('user_friend', user_friendSchema);

module.exports = user_friend;