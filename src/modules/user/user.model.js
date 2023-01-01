const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide username'],
    validate: {
      validator: validator.isEmail,
      message: 'Username must be a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    default: 'buyer',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (canditatePassword) {
  return await bcrypt.compare(canditatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
