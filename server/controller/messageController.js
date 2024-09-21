import { errorHandleMiddleware } from "../middleware/errorHandleMiddleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import Message from "../model/messageModel.js";

// message create
export const createMessageController = errorHandleMiddleware(
  async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
      // return next(new ErrorHandler("Please Fill Full Form", 400));
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(201).send({
      success: true,
      message: "Message Create Successfully",
    });
  }
);

// get all message
export const getAllMessageController = errorHandleMiddleware(
  async (req, res, next) => {
    const message = await Message.find();
    if (!message || message.length === 0) {
      return next(new ErrorHandler("No Messages Found", 404));
    }
    res.status(200).send({
      success: true,
      message: "Get All Messages",
      message,
    });
  }
);

// message delete
export const deleteMessageController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      return next(new ErrorHandler("Message Id Not Found", 400));
    }
    await Message.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Message Delete Successfully",
    });
  }
);
