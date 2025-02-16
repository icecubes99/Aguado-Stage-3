const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllProjects = async () => {
  return await prisma.projects.findMany();
};

const getProjectMembers = async (projectId) => {
  const project = await prisma.projects.findUnique({
    where: { id: projectId },
  });

  if (!project) {
    throw new Error(`Project with ID ${projectId} not found`);
  }

  const projectMembers = await prisma.member_Projects.findMany({
    where: { project_id: projectId },
    include: {
      member: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
    },
  });

  return projectMembers.map((pm) => ({
    id: pm.member.id,
    name: pm.member.name,
    role: pm.member.role,
    assigned_at: pm.assignedAt,
  }));
};

module.exports = {
  getAllProjects,
  getProjectMembers,
};
