import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    profilePicture: {type: String, required: true},
    routines: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Routine'
        }
    ],
    entries: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Entry'
    }],
    meals: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Routines'
    }],
},
{
    timestamps: true
})

export default mongoose.model('User', UserSchema);