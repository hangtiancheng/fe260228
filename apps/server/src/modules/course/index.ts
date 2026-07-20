import { Hono } from "hono";
import withPrisma from "../../shared/prisma/index.js";
import { success } from "../../shared/utils/response.js";
import type { HonoContext } from "../../types/index.js";
import { formatCourse } from "./service.js";

const courseRouter = new Hono<HonoContext>();

courseRouter.get("/list", withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const courses = await prisma.course.findMany();
  const list = courses.map(formatCourse);
  c.var.logger.info({ count: list.length }, "Fetched course list");
  return c.json(success(list));
});

export default courseRouter;
