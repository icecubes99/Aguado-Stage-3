const memberService = require("../services/memberService");

const createMember = async (req, res, next) => {
  try {
    const member = await memberService.createMember(req.body);
    res.status(201).json({
      message: "Member added successfully",
      data: member,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMembers = async (req, res, next) => {
  try {
    const members = await memberService.getAllMembers();
    res.json({ data: members });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMember,
  getAllMembers,
};
