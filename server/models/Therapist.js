const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    happy: [Object],
    sad: [Object],
    curious: [Object],
    inLove: [Object],
    date: String,
    counter: [Object],
    patients: [{type: Schema.Types.ObjectId, ref: "User"}]
})

const User = mongoose.model("User", userSchema)

module.exports = User
