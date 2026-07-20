import { describe, expect, test } from "vitest";
import { formatCourse } from "../src/modules/course/service.js";

describe("course service", () => {
  test("formats course price for API responses", () => {
    expect(formatCourse({ id: "course-1", price: "19.9" })).toEqual({
      id: "course-1",
      price: "19.90",
    });
  });
});
