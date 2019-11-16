const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
    // reqired entries
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    active: { type: Boolean, default: true },
    email: {
        type: String,
        unique: true,
        require: true
    }, 
    // entries not currenlty required
    age: { type: Number },
    icon: { type: String, default: "../client/public/favicon.ico"},
    // documents belonging to other collections
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    productPosts: [{type: Schema.Types.ObjectId, ref: "ProductPost"}],
    productComments: [{type: Schema.Types.ObjectId, ref: "ProductComment"}]
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