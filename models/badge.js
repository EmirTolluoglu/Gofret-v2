const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    badge_name: {
        type: String,
        required: true,
        maxLength:32    
        
    },
    badge_misson: {
        type: String,
        required: true,
        maxLength:64
        
    },
    badge_reward: {
        type: Number,
        required: true,
        default:0
       
    },
    badge_grade: {
        type: Number,
        required: true,
        default:1
    },
    badge_color: {
        type: String,
        required: true,
        maxLength:16,
        default:000
       
    },
    badge_pic: {
        type: String,
        required: true,
        maxLength:64
    }
    
   
})    
const badge = mongoose.model('badge', badgeSchema);

module.exports = badge;