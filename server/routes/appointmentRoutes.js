import express from "express";
import {
  createAppointmentController,
  deleteAppointmentController,
  getAllAppointmentController,
  updateAppointmentController,
} from "../controller/appointmentController.js";
import { adminTokenAuth, patientTokenAuth } from "../middleware/auth.js";

const router = express.Router();

// create appiontment
router.post(
  "/create-appointment",
  patientTokenAuth,
  createAppointmentController
);

// get all appointment
router.get("/get-all-appiontment", adminTokenAuth, getAllAppointmentController);

// delete a single appointment
router.delete(
  "/delete-appointment/:id",
  adminTokenAuth,
  deleteAppointmentController
);

router.put(
  "/update-status-appointment/:id",
  adminTokenAuth,
  updateAppointmentController
);
export default router;
