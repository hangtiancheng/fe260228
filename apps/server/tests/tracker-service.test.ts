import { describe, expect, test } from "vitest";
import { Prisma } from "../src/generated/prisma/client.js";
import { eventSchema } from "../src/modules/tracker/schema.js";
import { toPrismaJsonPayload } from "../src/modules/tracker/service.js";

describe("tracker service", () => {
  test("accepts typed event payloads", () => {
    const parsed = eventSchema.parse({
      visitorId: "visitor-1",
      event: "click",
      payload: {
        button: "buy",
        index: 1,
        active: true,
      },
    });

    expect(parsed.payload).toEqual({
      button: "buy",
      index: 1,
      active: true,
    });
  });

  test("maps missing payloads to Prisma JsonNull", () => {
    expect(toPrismaJsonPayload(undefined)).toBe(Prisma.JsonNull);
    expect(toPrismaJsonPayload(null)).toBe(Prisma.JsonNull);
  });
});
