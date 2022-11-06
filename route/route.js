import express from "express";
import { registerStudent, getCommonStudent, suspendStudent, listStudentNotification } from "../controller/controller.js";
import validators from "../validators.js";

const router = express.Router();

router.get("/commonstudents", getCommonStudent);

router.post("/register", validators.field, validators.result, registerStudent);

router.post("/suspend", validators.field, validators.result, suspendStudent);

router.post("/retrievefornotifications", validators.field, validators.result, listStudentNotification);

export default router;
