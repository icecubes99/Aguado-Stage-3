const { body, validationResult } = require("express-validator");

const validateMember = [
  body("name").notEmpty().withMessage("Name is required").trim(),

  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .toLowerCase()
    .isIn(["backend", "frontend", "ui/ux"])
    .withMessage(
      "'role' must be one of the following: backend, frontend, UI/UX"
    ),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    next();
  },
];

module.exports = { validateMember };
