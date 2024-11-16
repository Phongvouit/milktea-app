import { prisma } from "@/utils/connect";

const getAdmin = async () => {
  try {
    const admin = await prisma.user.findFirst({
      where: {
        isAdmin: true,
      },
    });
    return admin;
  } catch (err) {
    return null;
  }
};
export default getAdmin;
