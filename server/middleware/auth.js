import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import { errorHandleMiddleware } from "./errorHandleMiddleware.js";
import ErrorHandler from "./errorMiddleware.js";

export const patientTokenAuth = errorHandleMiddleware(
  async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
      return next(new ErrorHandler("Admin is NOt authorized", 403));
    }
    next();
  }
);

// DOCTOR TOKEN
export const doctorTokenAuth = errorHandleMiddleware(async (req, res, next) => {
  const token = req.cookies.doctorToken;
  if (!token) {
    return next(new ErrorHandler("Doctor is not authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Doctor") {
    return next(new ErrorHandler("Doctor is NOt authorized", 403));
  }
  next();
});

// Admin TOKEN
export const adminTokenAuth = errorHandleMiddleware(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    return next(new ErrorHandler("Admin is not authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Admin") {
    return next(new ErrorHandler("Admin is NOt authorized", 403));
  }
  next();
});
