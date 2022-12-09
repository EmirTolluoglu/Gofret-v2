const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notification_date: {
        type: Date,
        required: Date.now
        
    },
    notification_content: {
        type: String,
        required: true,
        maxLength:128
        
    },
    user_id: {
        type: Number,
        required: true
    },
    is_readed: {
        type: Boolean,
        required: true,
        default:0
    },
    notification_profile_photo: {
        type: String,
        required: true,
        maxLength:32
        
    }
    
   
})    
const notification = mongoose.model('notification', notificationSchema);

module.exports = notification;