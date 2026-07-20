import type { Prisma, PrismaClient } from "../../generated/prisma/client.js";

const WORD_LIMIT = 10;

export const buildLearningWordWhere = (
  courseValue: string,
  userId: string,
): Prisma.WordBookWhereInput | null => {
  const learnedByUser = {
    none: {
      userId,
    },
  };

  switch (courseValue) {
    case "gk":
      return { gk: true, wordBookRecords: learnedByUser };
    case "zk":
      return { zk: true, wordBookRecords: learnedByUser };
    case "gre":
      return { gre: true, wordBookRecords: learnedByUser };
    case "toefl":
      return { toefl: true, wordBookRecords: learnedByUser };
    case "ielts":
      return { ielts: true, wordBookRecords: learnedByUser };
    case "cet6":
      return { cet6: true, wordBookRecords: learnedByUser };
    case "cet4":
      return { cet4: true, wordBookRecords: learnedByUser };
    case "ky":
      return { ky: true, wordBookRecords: learnedByUser };
    default:
      return null;
  }
};

export const findLearningWords = async (
  prisma: PrismaClient,
  userId: string,
  courseId: string,
) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });

  if (!course) {
    return { allowed: false, words: [] };
  }

  const where = buildLearningWordWhere(course.value, userId);
  if (!where) {
    return { allowed: false, words: [] };
  }

  const words = await prisma.wordBook.findMany({
    where,
    skip: 0,
    take: WORD_LIMIT,
    orderBy: { frq: "desc" },
  });

  return { allowed: true, words };
};
