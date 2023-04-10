import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String
})

export const User = model('User', UserSchema);