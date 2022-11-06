import { body, param, validationResult } from "express-validator";

const validator = {
  // User name and email Validation
  field: [
    body("teacher", "Please enter valid teacher email").optional().isEmail().normalizeEmail().trim().unescape().escape(),
    body("students", "Please enter valid student email").optional().isEmail().normalizeEmail().trim().unescape().escape(),
    body("student", "Please enter valid student email").optional().isEmail().normalizeEmail().trim().unescape().escape(),
    //body("notification").optional().isEmail().normalizeEmail().trim().unescape().escape(),
  ],

  // Checking Validation Result
  result: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
};
export default validator;
