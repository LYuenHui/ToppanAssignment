import express from "express";
import { registerStudent, getCommonStudent, suspendStudent, listStudentNotification } from "../controller/controller.js";

const router = express.Router();

router.get("/commonstudents", getCommonStudent);

router.post("/register", registerStudent);

router.post("/suspend", suspendStudent);

router.post("/retrievefornotifications", listStudentNotification);

export default router;
