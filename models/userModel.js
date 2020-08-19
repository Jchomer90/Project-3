const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

const Schema = mongoose.Schema;

// BACKTEAM CREATED DATABASE SEEDS!!!!
const UserSchema = new Schema({
  name: {
    type: String,
    // unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});


UserSchema.methods = {
  checkPassword: function (inputPassword) {
    console.log("checkPassword")
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    console.log("hashPassword")
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

//Define pre-hooks for the save method
UserSchema.pre("save", function (next) {
  console.log("Pre-Save")
  if (!this.password){
    console.log ("models/userModel.js ======NO PASSWORD PROVIDED=======")
    next()
  } else {
    console.log("models/userModels.js hashPassword in pre save");
    
    this.password = this.hashPassword(this.password)

    next()
  }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;