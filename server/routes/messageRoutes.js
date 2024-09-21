import express from "express";
import {
  createMessageController,
  deleteMessageController,
  getAllMessageController,
} from "../controller/messageController.js";
import { adminTokenAuth } from "../middleware/auth.js";
const router = express.Router();

// create message
router.post("/create-message", createMessageController);

// get all message only admin
router.get("/get-all-message", adminTokenAuth, getAllMessageController);

// delete a single message only admin
router.delete("/message-delete/:id", adminTokenAuth, deleteMessageController);
export default router;
