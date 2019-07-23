const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    happy: [Object],
    sad: [Object],
    curious: [Object],
    inLove: [Object],
})

const User = mongoose.model("User", userSchema)

module.exports = User
