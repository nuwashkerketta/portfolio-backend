import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Messsage } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, email, subject, message } = req.body;
  if (!senderName || !subject || !message) {
    return next(new ErrorHandler("Please fill full form", 400));
  }
  const data = await Messsage.create({ senderName, email, subject, message });
  res.status(200).json({
    success: true,
    message: "Message sent",
    data,
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Messsage.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Messsage.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message already Deleted!", 400));
  }
  await message.deleteOne();
  res.status(200).json({
    success: true,
    message: "Message Deleted",
  });
});
