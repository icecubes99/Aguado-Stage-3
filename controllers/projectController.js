const projectService = require("../services/projectService");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

const getProjectMembers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const members = await projectService.getProjectMembers(parseInt(id));
    res.json({ data: members });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectMembers,
};
