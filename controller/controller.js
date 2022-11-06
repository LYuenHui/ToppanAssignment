import * as studService from "../model/model.js";
import { extractEmails } from "../util/helper.js";

export const registerStudent = async (req, res, next) => {
  const { teacher, students } = req.body;
  if (!teacher || !students || !students.length || typeof teacher !== "string") {
    return res.status(400).json({
      message: "Please fill in all the required fields.",
      fields: ["teacher", "students"],
    });
  }

  //validate teacher
  const isTeacherValid = (await studService.validateTeacher(teacher)) ? true : false;

  if (!isTeacherValid) {
    return res.status(400).json({
      message: "Teacher does not exist.",
    });
  }

  let params = [];

  //validate student
  const validatedStudent = await studService.validateStudent(students);

  if (!validatedStudent.length) {
    return res.status(400).json({
      message: "Student does not exist",
    });
  }

  params = validatedStudent.map((stud) => {
    return [teacher, stud];
  });
  //validate existing records
  const shouldFilter = await Promise.all(
    params.map(async (a) => {
      return await studService.validateExistingRecord(a);
    })
  );

  const toInsert = params.filter((value, index) => !shouldFilter[index]);

  if (!toInsert.length) {
    return res.status(400).json({
      message: "Students already registered under teacher",
    });
  }

  try {
    const row = await studService.registerStudent(params);
    if (row.affectedRows > 0) {
      return res.status(204).setHeader("Content-Type", "application/json").json();
    }
  } catch (e) {
    next(e);
  }
};

export const getCommonStudent = async (req, res, next) => {
  const teacher = req.query.teacher;
  if (!teacher) {
    return res.status(400).json({
      message: "Please provide a teacher email",
      field: ["teacher"],
    });
  }
  try {
    const studentList = await studService.getCommonStudent(teacher);
    if (studentList.length <= 0) {
      return res.status(404).setHeader("Content-Type", "application/json").json("No student registered under teacher provided");
    }
    return res.status(200).setHeader("Content-Type", "application/json").json({ students: studentList });
  } catch (e) {
    next(e);
  }
};

export const suspendStudent = async (req, res, next) => {
  if (!req.body.students) {
    return res.status(400).json({
      message: "Please fill in all the required fields.",
      fields: ["students"],
    });
  }
  const studentEmail = await studService.validateStudent(req.body.students);

  if (!studentEmail.length) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  try {
    const row = await studService.suspendStudent(studentEmail);
    if (row.affectedRows > 0) {
      return res.status(204).setHeader("Content-Type", "application/json").json();
    } else {
      return res.status(404).setHeader("Content-Type", "application/json").json({ message: "Student not found" });
    }
  } catch (e) {
    next(e);
  }
};

export const listStudentNotification = async (req, res, next) => {
  const { teacher, notification } = req.body;
  //validate teacher
  if (!teacher || !notification || !notification.length || typeof teacher !== "string") {
    return res.status(400).json({
      message: "Please fill in all the required fields.",
      fields: ["teacher", "notifications"],
    });
  }

  const isTeacherValid = (await studService.validateTeacher(teacher)) ? true : false;
  if (!isTeacherValid) {
    return res.status(404).json({
      message: "Teacher does not exist.",
    });
  }
  let validatedStudent = [];
  if (extractEmails(notification)) {
    validatedStudent = await studService.validateStudent(extractEmails(notification));
  }

  try {
    const list = [...new Set([...validatedStudent, ...(await studService.getNotificationStudent(teacher))])];
    if (!list.length) {
      return res.status(404).json({
        message: "No student registered under teacher.",
      });
    }
    return res.status(200).setHeader("Content-Type", "application/json").json({ recipients: list });
  } catch (e) {
    next(e);
  }
};
