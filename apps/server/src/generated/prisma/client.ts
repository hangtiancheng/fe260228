/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck

import * as process from "node:process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));

import * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";

export * as $Enums from "./enums.js";
export * from "./enums.js";
export const PrismaClient = $Class.getPrismaClientClass();
export type PrismaClient<
	LogOpts extends Prisma.LogLevel = never,
	OmitOpts extends
		Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"],
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };

export type User = Prisma.UserModel;
export type WordBookRecord = Prisma.WordBookRecordModel;
export type WordBook = Prisma.WordBookModel;
export type Course = Prisma.CourseModel;
export type Visitor = Prisma.VisitorModel;
export type PageView = Prisma.PageViewModel;
export type TrackEvent = Prisma.TrackEventModel;
export type PerformanceEntry = Prisma.PerformanceEntryModel;
export type ErrorEntry = Prisma.ErrorEntryModel;
