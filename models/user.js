const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    // new stuff goes here!! age:{type: Number}
    active: { type: Boolean, default: true },
    age: { type: Number },
    email: {
        type: String,
        unique: true,
        require: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }, 
    icon: { type: String, default: "../client/public/favicon.ico"},
    // documents belonging to other collections
    posts: [{ type: Schema.Types.ObjectId, ref: "./Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "./Comment" }],
    periodPosts: [{type: Schema.Types.ObjectId, ref: "./PeriodPost"}],
    periodComments: [{type: Schema.Types.ObjectId, ref: "./PeriodComment"}]
})

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('models/user.js =======NO PASSWORD PROVIDED=======')
        next()
    } else {
        console.log('models/user.js hashPassword in pre save');

        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User