import { errorHandleMiddleware } from "../middleware/errorHandleMiddleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import User from "../model/userModel.js";
import { jsontoken } from "../utils/token.js";
import cloudinary from "cloudinary";

export const createUserController = errorHandleMiddleware(
  async (req, res, next) => {
    const { firstName, lastName, email, nic, dob, password, gender, phone } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !password
    ) {
      return next(new ErrorHandler("Please fill out the entire form.", 400));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
      return next(
        new ErrorHandler("Patient already registered. Please login.", 400)
      );
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      nic,
      dob,
      password,
      gender,
      phone,
      role: "Patient",
    });

    jsontoken(user, "User created successfully", 201, res);
  }
);

// login controller
export const loginUserController = errorHandleMiddleware(
  async (req, res, next) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return next(new ErrorHandler("Please fill full form", 400));
    }
    // if ß
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 404));
    }
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 404));
    }
    if (role !== user.role) {
      return next(
        new ErrorHandler("This Email Role and User Role is not match", 404)
      );
    }

    jsontoken(user, "User Login Successfully", 200, res);
  }
);
// create a json web token for patient amin and doctor

// create new admin
export const createAdminController = errorHandleMiddleware(
  async (req, res, next) => {
    const { firstName, lastName, email, phone, password, nic, dob, gender } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !nic ||
      !dob ||
      !gender
    ) {
      return next(new ErrorHandler("Please fill full from !", 400));
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ErrorHandler("This Email Already Register", 400));
    }
    const admin = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      nic,
      dob,
      gender,
      role: "Admin",
    });
    res.status(201).send({
      success: true,
      message: "Admin Register Successfully",
      admin,
    });
  }
);

// create new Doctor
export const createNewDoctorController = errorHandleMiddleware(
  async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return next(new ErrorHandler("Doctor Images Required", 404));
    }
    const { docImage } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(docImage.mimetype)) {
      return next(new ErrorHandler("File Format Not Supported !", 400));
    }
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      gender,
      nic,
      dob,
      doctorDepartment,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phone ||
      !gender ||
      !nic ||
      !dob ||
      !doctorDepartment ||
      !docImage
    ) {
      return next(new ErrorHandler("PLease Fill Full Form", 400));
    }
    const register = await User.findOne({ email });
    if (register) {
      return next(
        new ErrorHandler(`This Email Already Register a ${register.role}`, 400)
      );
    }
    // code for cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(
      docImage.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.log(
        "Cloudinary Error:",
        cloudinaryResponse.error || "Unknown Cloudinary error"
      );
      return next(
        new ErrorHandler("Falied to upload image to cloudinary ", 404)
      );
    }
    const doctor = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
      nic,
      dob,
      gender,
      role: "Doctor",
      doctorDepartment,
      docImage: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });
    res.status(201).send({
      success: true,
      message: "New Doctor Register",
      doctor,
    });
  }
);
// please setup cloudinary for image upload

// get all doctor
export const getAllDoctorController = errorHandleMiddleware(
  async (req, res, next) => {
    const doctor = await User.find({ role: "Doctor" });

    if (doctor.length === 0) {
      return next(new ErrorHandler("Doctor Not Found", 404));
    }

    res.status(200).send({
      success: true,
      message: "Doctors fetched successfully",
      doctor,
    });
  }
);

// get all Patinet
export const getAllPatientController = errorHandleMiddleware(
  async (req, res, next) => {
    const patient = await User.find({ role: "Patient" });
    if (!patient.length === 0) {
      return next(new ErrorHandler("Patient NOt Found", 404));
    }
    res.status(200).send({
      success: true,
      message: "Patient Get Successfully",
      patient,
    });
  }
);

// get single patient
export const getSinglePtientController = errorHandleMiddleware(
  async (req, res, next) => {
    const user = req.user;
    res.status(200).send({
      success: true,
      message: "Get Single Patient Successfully",
      user,
    });
  }
);

// logOut admin
export const logOutAdmin = errorHandleMiddleware(async (req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Admin Logged Out Successfully",
    });
});

// logOut patient
export const logOutPatient = errorHandleMiddleware(async (req, res, next) => {
  res
    .status(200)
    .cookie("patientToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Patient Logged Out Successfully",
    });
});

// logOut doctor
export const logOutDoctor = errorHandleMiddleware(async (req, res, next) => {
  res
    .status(200)
    .cookie("doctorToken", null, {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .send({
      success: true,
      message: "Doctor Logged Out Successfully",
    });
});

// delete single Doctor controller
export const deleteDoctorController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    // find the doctor by id and role doctor
    const doctor = await User.findByIdAndDelete({ _id: id, role: "Doctor" });
    if (!doctor && doctor.length === 0) {
      return next(new ErrorHandler("Doctor NOt Found ", 404));
    }
    res.status(200).send({
      success: true,
      message: "Doctor Delete Successfully",
    });
  }
);

// delete single Patient controller
export const deletePatientController = errorHandleMiddleware(
  async (req, res, next) => {
    const { id } = req.params;
    // find the doctor by id and role doctor
    const patient = await User.findByIdAndDelete({ _id: id, role: "Patient" });
    if (!patient && patient.length === 0) {
      return next(new ErrorHandler("Patient NOt Found ", 404));
    }
    res.status(200).send({
      success: true,
      message: "Patient Delete Successfully",
    });
  }
);
