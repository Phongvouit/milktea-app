import { prisma } from "@/utils/connect";

//GET ALL USERS
const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        isAdmin: false,
      },
    });
    return users;
  } catch (err) {
    return [];
  }
};

export default getUsers;
