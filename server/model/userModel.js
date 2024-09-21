import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name is Required"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name is Required"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "PLease Provide a Valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, " Phone Number is Required 11"],
    maxLength: [11, " Phone Number is Required "],
  },
  nic: {
    type: String,
    required: true,
    minLength: [10, " NIC Must Contain ONly 10 Digits is Required"],
    maxLength: [10, " NIC Must Contain ONly 10 Digits is Required"],
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, " Password Must Contain ONly 6 Digits is Required"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "User Role is required"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  //   this is only for doctor
  doctorDepartment: {
    type: String,
  },
  //   this is only for doctor not user and amin
  docImage: {
    public_id: String,
    url: String,
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const User = mongoose.model("User", userSchema);
export default User;
