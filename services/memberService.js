const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createMember = async (memberData) => {
  const { name, role } = memberData;

  if (!name || !role) {
    throw new Error("Name and role are required");
  }

  return await prisma.members.create({
    data: { name, role },
  });
};

const getAllMembers = async () => {
  return await prisma.members.findMany();
};

module.exports = {
  createMember,
  getAllMembers,
};
