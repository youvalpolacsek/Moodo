const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    happy: [String],
    sad: [String],
    curious: [String],
    inLove: [String],
})

const User = mongoose.model("User", userSchema)

module.exports = User
