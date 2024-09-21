import { errorHandleMiddleware } from "../middleware/errorHandleMiddleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import Appointment from "../model/appointmentModel.js";
import User from "../model/userModel.js";

// create appiontment
export const createAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor_firstName,
      doctor_lastName,
      hasVisited,
      address,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !appointment_date ||
      !department ||
      !doctor_firstName ||
      !doctor_lastName ||
      !address
    ) {
      return next(new ErrorHandler("Please Fill Full Form", 400));
    }

    // search doctor by name
    const foundDoctors = await User.find({
      firstName: { $regex: new RegExp(doctor_firstName, "i") }, // Case-insensitive search
      lastName: { $regex: new RegExp(doctor_lastName, "i") }, // Case-insensitive search
      role: "Doctor",
      doctorDepartment: { $regex: new RegExp(department, "i") }, // Case-insensitive search
    });
    if (foundDoctors.length === 0) {
      return next(new ErrorHandler("Doctor NOt Found", 400));
    }
    if (foundDoctors.length > 1) {
      return next(
        new ErrorHandler(
          "Many Doctor Found Please Contact By Phone or Email",
          400
        )
      );
    }
    const doctorId = foundDoctors[0]._id;
    const patientId = req.user._id;
    // create appiontment
    const appiontment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor: { firstName: doctor_firstName, lastName: doctor_lastName },
      hasVisited,
      address,
      doctorId,
      patientId,
    });
    // response here
    res.status(201).send({
      success: true,
      message: "Appointment Send Successfully",
      appiontment,
    });
  }
);

// get all appiontment
export const getAllAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const appiontment = await Appointment.find();
    if (appiontment.length === 0) {
      return next(new ErrorHandler("Appointment is Not Found", 404));
    }
    // response
    res.status(200).send({
      success: true,
      message: "Get All Appointment",
      appiontment,
    });
  }
);

// delete appointment
export const deleteAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found", 400));
    }
    // response
    await appointment.deleteOne();
    res.status(200).send({
      success: true,
      message: "Appointment Deleted Successfully",
    });
  }
);

// update appointment status
export const updateAppointmentController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(new ErrorHandler("Appointment Not Found", 400));
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).send({
      success: true,
      message: "Appointment Stutas Updated",
    });
  }
);
