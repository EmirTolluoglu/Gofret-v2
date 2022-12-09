const mongoose = require('mongoose');

const user_badgeSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
        
    },
    badge_id: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
   
})    
const user_badge = mongoose.model('user_badge', user_badgeSchema);

module.exports = user_badge;