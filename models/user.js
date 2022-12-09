const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        maxLength:32
        
    },
    full_name: {
        type: String,
        required: true,
        maxLength:64
    },
    user_email: {
        type: String,
        required: true,
        maxLength:64
    },
    user_password: {
        type: String,
        required: true,
        maxLength:64
    },
    user_biography: {
        type: String,
        required: true,
        default:null
    },
    user_interests: {
        type: String,
        required: true,
        maxLength:250
    },
    user_city: {
        type: String,
        required: true,
        maxLength:64,
        default:null
    },
    user_school: {
        type: String,
        required: true,
        maxLength:64,
        default:null
    },
    user_class: {
        type: Number,
        required: true,
        default:null
    },
    user_level: {
        type: Number,
        required: true
    },
    user_level_xp: {
        type: Number,
        required: true
    },
    user_profile_photo: {
        type: Number,
        required: true,
        maxLength:64
    },
    user_profile_banner: {
        type: Number,
        required: true,
        maxLength:32
    },
    user_last_online: {
        type: Date,
        default:Date.now
    },
    user_is_active: {
        type: Number,
        required:true,
        default:0
    },
    user_time: {
        type: Date,
        default:Date.now
    },
    permissin: {
        type: Number,
        required:true,
        default:0
    }
    


});

const user = mongoose.model('user', userSchema);

module.exports = user;