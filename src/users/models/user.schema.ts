import * as mongoose from 'mongoose';

    
export const UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    created_at: { type: Date, default: Date.now },
    roles   : [String]
});