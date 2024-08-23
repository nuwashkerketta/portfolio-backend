import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [2, "Name must contain at least 2 characters!"],
  },
  email: {
    type: String,
    minLength: [7, "Email must contain at least 7 characters!"],
  },
  subject: {
    type: String,
    minLength: [2, "Subject must contain at least 2 characters!"],
  },
  message: {
    type: String,
    minLength: [2, "Messsage must contain at least 2 characters!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Messsage = mongoose.model("Message", messageSchema);
