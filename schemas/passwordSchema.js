import mongoose from 'mongoose';
const { Schema } = mongoose;

const passwordSchema = new Schema({
    siteName: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});


// Check if the model already exists, if not create it
export const user_db = mongoose.models.passwordSchema || mongoose.model('passwordSchema', passwordSchema, "keygaurd_nextjs");