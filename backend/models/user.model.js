import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      firstName: {
        type: String,
        reqired: true,
      },
      lastName: {
        type: String,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlen: [5, "password must be greater than 5 characters"],
      maxlen: [13, "password must be less than 13 digits"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  await bcrypt.hash(this.password, 10);
});
