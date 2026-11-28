/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck

import * as runtime from "@prisma/client/runtime/index-browser";

export type * from "../models.js";
export type * from "./prismaNamespace.js";

export const Decimal = runtime.Decimal;

export const NullTypes = {
	DbNull: runtime.NullTypes.DbNull as new (
		secret: never,
	) => typeof runtime.DbNull,
	JsonNull: runtime.NullTypes.JsonNull as new (
		secret: never,
	) => typeof runtime.JsonNull,
	AnyNull: runtime.NullTypes.AnyNull as new (
		secret: never,
	) => typeof runtime.AnyNull,
};
export const DbNull = runtime.DbNull;

export const JsonNull = runtime.JsonNull;

export const AnyNull = runtime.AnyNull;

export const ModelName = {
	User: "User",
	WordBookRecord: "WordBookRecord",
	WordBook: "WordBook",
	Course: "Course",
	Visitor: "Visitor",
	PageView: "PageView",
	TrackEvent: "TrackEvent",
	PerformanceEntry: "PerformanceEntry",
	ErrorEntry: "ErrorEntry",
} as const;

export type ModelName = (typeof ModelName)[keyof typeof ModelName];

export const TransactionIsolationLevel = runtime.makeStrictEnum({
	ReadUncommitted: "ReadUncommitted",
	ReadCommitted: "ReadCommitted",
	RepeatableRead: "RepeatableRead",
	Serializable: "Serializable",
} as const);

export type TransactionIsolationLevel =
	(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

export const UserScalarFieldEnum = {
	id: "id",
	name: "name",
	email: "email",
	phone: "phone",
	address: "address",
	password: "password",
	avatar: "avatar",
	bio: "bio",
	isTimingTask: "isTimingTask",
	timingTaskTime: "timingTaskTime",
	wordNumber: "wordNumber",
	dayNumber: "dayNumber",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
	lastLoginAt: "lastLoginAt",
} as const;

export type UserScalarFieldEnum =
	(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

export const WordBookRecordScalarFieldEnum = {
	id: "id",
	wordId: "wordId",
	isMaster: "isMaster",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
	userId: "userId",
} as const;

export type WordBookRecordScalarFieldEnum =
	(typeof WordBookRecordScalarFieldEnum)[keyof typeof WordBookRecordScalarFieldEnum];

export const WordBookScalarFieldEnum = {
	id: "id",
	word: "word",
	phonetic: "phonetic",
	definition: "definition",
	translation: "translation",
	pos: "pos",
	collins: "collins",
	oxford: "oxford",
	tag: "tag",
	bnc: "bnc",
	frq: "frq",
	exchange: "exchange",
	gk: "gk",
	zk: "zk",
	gre: "gre",
	toefl: "toefl",
	ielts: "ielts",
	cet6: "cet6",
	cet4: "cet4",
	ky: "ky",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type WordBookScalarFieldEnum =
	(typeof WordBookScalarFieldEnum)[keyof typeof WordBookScalarFieldEnum];

export const CourseScalarFieldEnum = {
	id: "id",
	name: "name",
	value: "value",
	description: "description",
	teacher: "teacher",
	url: "url",
	price: "price",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type CourseScalarFieldEnum =
	(typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

export const VisitorScalarFieldEnum = {
	id: "id",
	anonymousId: "anonymousId",
	userId: "userId",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
	browser: "browser",
	os: "os",
	device: "device",
} as const;

export type VisitorScalarFieldEnum =
	(typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum];

export const PageViewScalarFieldEnum = {
	id: "id",
	visitorId: "visitorId",
	url: "url",
	referrer: "referrer",
	path: "path",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type PageViewScalarFieldEnum =
	(typeof PageViewScalarFieldEnum)[keyof typeof PageViewScalarFieldEnum];

export const TrackEventScalarFieldEnum = {
	id: "id",
	visitorId: "visitorId",
	event: "event",
	payload: "payload",
	url: "url",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type TrackEventScalarFieldEnum =
	(typeof TrackEventScalarFieldEnum)[keyof typeof TrackEventScalarFieldEnum];

export const PerformanceEntryScalarFieldEnum = {
	id: "id",
	visitorId: "visitorId",
	fp: "fp",
	fcp: "fcp",
	lcp: "lcp",
	inp: "inp",
	cls: "cls",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type PerformanceEntryScalarFieldEnum =
	(typeof PerformanceEntryScalarFieldEnum)[keyof typeof PerformanceEntryScalarFieldEnum];

export const ErrorEntryScalarFieldEnum = {
	id: "id",
	visitorId: "visitorId",
	error: "error",
	message: "message",
	stack: "stack",
	url: "url",
	createdAt: "createdAt",
	updatedAt: "updatedAt",
} as const;

export type ErrorEntryScalarFieldEnum =
	(typeof ErrorEntryScalarFieldEnum)[keyof typeof ErrorEntryScalarFieldEnum];

export const SortOrder = {
	asc: "asc",
	desc: "desc",
} as const;

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

export const NullableJsonNullValueInput = {
	DbNull: DbNull,
	JsonNull: JsonNull,
} as const;

export type NullableJsonNullValueInput =
	(typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

export const QueryMode = {
	default: "default",
	insensitive: "insensitive",
} as const;

export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

export const NullsOrder = {
	first: "first",
	last: "last",
} as const;

export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

export const JsonNullValueFilter = {
	DbNull: DbNull,
	JsonNull: JsonNull,
	AnyNull: AnyNull,
} as const;

export type JsonNullValueFilter =
	(typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
