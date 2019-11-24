var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");


var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /@/
    },
    password: {
        type:String,
        required:true
    },
    profilePicture: {
        type: String,
        required: true
    },
    bio: String,
    following: {
        type: [String]
    },
    followers: {
        type: [String]
    },
    articlesId: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }],
    commentsId: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    }
},{timestamps:true})


//hashing password
userSchema.pre("save",function (next) {
    if(this.password && this.isModified("password")){
        bcrypt.hash(this.password,10,(err,password)=> {
            if(err) return next(err);
            this.password = password;      
            next()  
        })
    }
})

userSchema.methods.verifyPassword = function (password){
    return bcrypt.compareSync(password,this.password);  
}

// export user model
module.exports = mongoose.model("User", userSchema);