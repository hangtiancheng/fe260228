/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type VisitorModel =
	runtime.Types.Result.DefaultSelection<Prisma.$VisitorPayload>;

export type AggregateVisitor = {
	_count: VisitorCountAggregateOutputType | null;
	_min: VisitorMinAggregateOutputType | null;
	_max: VisitorMaxAggregateOutputType | null;
};

export type VisitorMinAggregateOutputType = {
	id: string | null;
	anonymousId: string | null;
	userId: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	browser: string | null;
	os: string | null;
	device: string | null;
};

export type VisitorMaxAggregateOutputType = {
	id: string | null;
	anonymousId: string | null;
	userId: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	browser: string | null;
	os: string | null;
	device: string | null;
};

export type VisitorCountAggregateOutputType = {
	id: number;
	anonymousId: number;
	userId: number;
	createdAt: number;
	updatedAt: number;
	browser: number;
	os: number;
	device: number;
	_all: number;
};

export type VisitorMinAggregateInputType = {
	id?: true;
	anonymousId?: true;
	userId?: true;
	createdAt?: true;
	updatedAt?: true;
	browser?: true;
	os?: true;
	device?: true;
};

export type VisitorMaxAggregateInputType = {
	id?: true;
	anonymousId?: true;
	userId?: true;
	createdAt?: true;
	updatedAt?: true;
	browser?: true;
	os?: true;
	device?: true;
};

export type VisitorCountAggregateInputType = {
	id?: true;
	anonymousId?: true;
	userId?: true;
	createdAt?: true;
	updatedAt?: true;
	browser?: true;
	os?: true;
	device?: true;
	_all?: true;
};

export type VisitorAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.VisitorWhereInput;
	orderBy?:
		| Prisma.VisitorOrderByWithRelationInput
		| Prisma.VisitorOrderByWithRelationInput[];
	cursor?: Prisma.VisitorWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | VisitorCountAggregateInputType;
	_min?: VisitorMinAggregateInputType;
	_max?: VisitorMaxAggregateInputType;
};

export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
	[P in keyof T & keyof AggregateVisitor]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateVisitor[P]>
		: Prisma.GetScalarType<T[P], AggregateVisitor[P]>;
};

export type VisitorGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.VisitorWhereInput;
	orderBy?:
		| Prisma.VisitorOrderByWithAggregationInput
		| Prisma.VisitorOrderByWithAggregationInput[];
	by: Prisma.VisitorScalarFieldEnum[] | Prisma.VisitorScalarFieldEnum;
	having?: Prisma.VisitorScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: VisitorCountAggregateInputType | true;
	_min?: VisitorMinAggregateInputType;
	_max?: VisitorMaxAggregateInputType;
};

export type VisitorGroupByOutputType = {
	id: string;
	anonymousId: string;
	userId: string | null;
	createdAt: Date;
	updatedAt: Date;
	browser: string | null;
	os: string | null;
	device: string | null;
	_count: VisitorCountAggregateOutputType | null;
	_min: VisitorMinAggregateOutputType | null;
	_max: VisitorMaxAggregateOutputType | null;
};

export type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<VisitorGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof VisitorGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], VisitorGroupByOutputType[P]>;
			}
		>
	>;

export type VisitorWhereInput = {
	AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
	OR?: Prisma.VisitorWhereInput[];
	NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
	id?: Prisma.StringFilter<"Visitor"> | string;
	anonymousId?: Prisma.StringFilter<"Visitor"> | string;
	userId?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
	browser?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	os?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	device?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	user?: Prisma.XOR<
		Prisma.UserNullableScalarRelationFilter,
		Prisma.UserWhereInput
	> | null;
	pageViews?: Prisma.PageViewListRelationFilter;
	trackEvents?: Prisma.TrackEventListRelationFilter;
	performanceEntries?: Prisma.PerformanceEntryListRelationFilter;
	errorEntries?: Prisma.ErrorEntryListRelationFilter;
};

export type VisitorOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	anonymousId?: Prisma.SortOrder;
	userId?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	browser?: Prisma.SortOrderInput | Prisma.SortOrder;
	os?: Prisma.SortOrderInput | Prisma.SortOrder;
	device?: Prisma.SortOrderInput | Prisma.SortOrder;
	user?: Prisma.UserOrderByWithRelationInput;
	pageViews?: Prisma.PageViewOrderByRelationAggregateInput;
	trackEvents?: Prisma.TrackEventOrderByRelationAggregateInput;
	performanceEntries?: Prisma.PerformanceEntryOrderByRelationAggregateInput;
	errorEntries?: Prisma.ErrorEntryOrderByRelationAggregateInput;
};

export type VisitorWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		anonymousId?: string;
		AND?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
		OR?: Prisma.VisitorWhereInput[];
		NOT?: Prisma.VisitorWhereInput | Prisma.VisitorWhereInput[];
		userId?: Prisma.StringNullableFilter<"Visitor"> | string | null;
		createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
		browser?: Prisma.StringNullableFilter<"Visitor"> | string | null;
		os?: Prisma.StringNullableFilter<"Visitor"> | string | null;
		device?: Prisma.StringNullableFilter<"Visitor"> | string | null;
		user?: Prisma.XOR<
			Prisma.UserNullableScalarRelationFilter,
			Prisma.UserWhereInput
		> | null;
		pageViews?: Prisma.PageViewListRelationFilter;
		trackEvents?: Prisma.TrackEventListRelationFilter;
		performanceEntries?: Prisma.PerformanceEntryListRelationFilter;
		errorEntries?: Prisma.ErrorEntryListRelationFilter;
	},
	"id" | "anonymousId"
>;

export type VisitorOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	anonymousId?: Prisma.SortOrder;
	userId?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	browser?: Prisma.SortOrderInput | Prisma.SortOrder;
	os?: Prisma.SortOrderInput | Prisma.SortOrder;
	device?: Prisma.SortOrderInput | Prisma.SortOrder;
	_count?: Prisma.VisitorCountOrderByAggregateInput;
	_max?: Prisma.VisitorMaxOrderByAggregateInput;
	_min?: Prisma.VisitorMinOrderByAggregateInput;
};

export type VisitorScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.VisitorScalarWhereWithAggregatesInput
		| Prisma.VisitorScalarWhereWithAggregatesInput[];
	OR?: Prisma.VisitorScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.VisitorScalarWhereWithAggregatesInput
		| Prisma.VisitorScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
	anonymousId?: Prisma.StringWithAggregatesFilter<"Visitor"> | string;
	userId?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Visitor"> | Date | string;
	browser?:
		| Prisma.StringNullableWithAggregatesFilter<"Visitor">
		| string
		| null;
	os?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
	device?: Prisma.StringNullableWithAggregatesFilter<"Visitor"> | string | null;
};

export type VisitorCreateInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	user?: Prisma.UserCreateNestedOneWithoutVisitorsInput;
	pageViews?: Prisma.PageViewCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewUncheckedCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventUncheckedCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	user?: Prisma.UserUpdateOneWithoutVisitorsNestedInput;
	pageViews?: Prisma.PageViewUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUncheckedUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUncheckedUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorCreateManyInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
};

export type VisitorUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};

export type VisitorUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};

export type VisitorListRelationFilter = {
	every?: Prisma.VisitorWhereInput;
	some?: Prisma.VisitorWhereInput;
	none?: Prisma.VisitorWhereInput;
};

export type VisitorOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type VisitorCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	anonymousId?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	browser?: Prisma.SortOrder;
	os?: Prisma.SortOrder;
	device?: Prisma.SortOrder;
};

export type VisitorMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	anonymousId?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	browser?: Prisma.SortOrder;
	os?: Prisma.SortOrder;
	device?: Prisma.SortOrder;
};

export type VisitorMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	anonymousId?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	browser?: Prisma.SortOrder;
	os?: Prisma.SortOrder;
	device?: Prisma.SortOrder;
};

export type VisitorScalarRelationFilter = {
	is?: Prisma.VisitorWhereInput;
	isNot?: Prisma.VisitorWhereInput;
};

export type VisitorCreateNestedManyWithoutUserInput = {
	create?:
		| Prisma.XOR<
				Prisma.VisitorCreateWithoutUserInput,
				Prisma.VisitorUncheckedCreateWithoutUserInput
		  >
		| Prisma.VisitorCreateWithoutUserInput[]
		| Prisma.VisitorUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.VisitorCreateOrConnectWithoutUserInput
		| Prisma.VisitorCreateOrConnectWithoutUserInput[];
	createMany?: Prisma.VisitorCreateManyUserInputEnvelope;
	connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};

export type VisitorUncheckedCreateNestedManyWithoutUserInput = {
	create?:
		| Prisma.XOR<
				Prisma.VisitorCreateWithoutUserInput,
				Prisma.VisitorUncheckedCreateWithoutUserInput
		  >
		| Prisma.VisitorCreateWithoutUserInput[]
		| Prisma.VisitorUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.VisitorCreateOrConnectWithoutUserInput
		| Prisma.VisitorCreateOrConnectWithoutUserInput[];
	createMany?: Prisma.VisitorCreateManyUserInputEnvelope;
	connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
};

export type VisitorUpdateManyWithoutUserNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.VisitorCreateWithoutUserInput,
				Prisma.VisitorUncheckedCreateWithoutUserInput
		  >
		| Prisma.VisitorCreateWithoutUserInput[]
		| Prisma.VisitorUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.VisitorCreateOrConnectWithoutUserInput
		| Prisma.VisitorCreateOrConnectWithoutUserInput[];
	upsert?:
		| Prisma.VisitorUpsertWithWhereUniqueWithoutUserInput
		| Prisma.VisitorUpsertWithWhereUniqueWithoutUserInput[];
	createMany?: Prisma.VisitorCreateManyUserInputEnvelope;
	set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	disconnect?:
		| Prisma.VisitorWhereUniqueInput
		| Prisma.VisitorWhereUniqueInput[];
	delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	update?:
		| Prisma.VisitorUpdateWithWhereUniqueWithoutUserInput
		| Prisma.VisitorUpdateWithWhereUniqueWithoutUserInput[];
	updateMany?:
		| Prisma.VisitorUpdateManyWithWhereWithoutUserInput
		| Prisma.VisitorUpdateManyWithWhereWithoutUserInput[];
	deleteMany?:
		| Prisma.VisitorScalarWhereInput
		| Prisma.VisitorScalarWhereInput[];
};

export type VisitorUncheckedUpdateManyWithoutUserNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.VisitorCreateWithoutUserInput,
				Prisma.VisitorUncheckedCreateWithoutUserInput
		  >
		| Prisma.VisitorCreateWithoutUserInput[]
		| Prisma.VisitorUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.VisitorCreateOrConnectWithoutUserInput
		| Prisma.VisitorCreateOrConnectWithoutUserInput[];
	upsert?:
		| Prisma.VisitorUpsertWithWhereUniqueWithoutUserInput
		| Prisma.VisitorUpsertWithWhereUniqueWithoutUserInput[];
	createMany?: Prisma.VisitorCreateManyUserInputEnvelope;
	set?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	disconnect?:
		| Prisma.VisitorWhereUniqueInput
		| Prisma.VisitorWhereUniqueInput[];
	delete?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	connect?: Prisma.VisitorWhereUniqueInput | Prisma.VisitorWhereUniqueInput[];
	update?:
		| Prisma.VisitorUpdateWithWhereUniqueWithoutUserInput
		| Prisma.VisitorUpdateWithWhereUniqueWithoutUserInput[];
	updateMany?:
		| Prisma.VisitorUpdateManyWithWhereWithoutUserInput
		| Prisma.VisitorUpdateManyWithWhereWithoutUserInput[];
	deleteMany?:
		| Prisma.VisitorScalarWhereInput
		| Prisma.VisitorScalarWhereInput[];
};

export type VisitorCreateNestedOneWithoutPageViewsInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutPageViewsInput,
		Prisma.VisitorUncheckedCreateWithoutPageViewsInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutPageViewsInput;
	connect?: Prisma.VisitorWhereUniqueInput;
};

export type VisitorUpdateOneRequiredWithoutPageViewsNestedInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutPageViewsInput,
		Prisma.VisitorUncheckedCreateWithoutPageViewsInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutPageViewsInput;
	upsert?: Prisma.VisitorUpsertWithoutPageViewsInput;
	connect?: Prisma.VisitorWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.VisitorUpdateToOneWithWhereWithoutPageViewsInput,
			Prisma.VisitorUpdateWithoutPageViewsInput
		>,
		Prisma.VisitorUncheckedUpdateWithoutPageViewsInput
	>;
};

export type VisitorCreateNestedOneWithoutTrackEventsInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedCreateWithoutTrackEventsInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutTrackEventsInput;
	connect?: Prisma.VisitorWhereUniqueInput;
};

export type VisitorUpdateOneRequiredWithoutTrackEventsNestedInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedCreateWithoutTrackEventsInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutTrackEventsInput;
	upsert?: Prisma.VisitorUpsertWithoutTrackEventsInput;
	connect?: Prisma.VisitorWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.VisitorUpdateToOneWithWhereWithoutTrackEventsInput,
			Prisma.VisitorUpdateWithoutTrackEventsInput
		>,
		Prisma.VisitorUncheckedUpdateWithoutTrackEventsInput
	>;
};

export type VisitorCreateNestedOneWithoutPerformanceEntriesInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutPerformanceEntriesInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutPerformanceEntriesInput;
	connect?: Prisma.VisitorWhereUniqueInput;
};

export type VisitorUpdateOneRequiredWithoutPerformanceEntriesNestedInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutPerformanceEntriesInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutPerformanceEntriesInput;
	upsert?: Prisma.VisitorUpsertWithoutPerformanceEntriesInput;
	connect?: Prisma.VisitorWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.VisitorUpdateToOneWithWhereWithoutPerformanceEntriesInput,
			Prisma.VisitorUpdateWithoutPerformanceEntriesInput
		>,
		Prisma.VisitorUncheckedUpdateWithoutPerformanceEntriesInput
	>;
};

export type VisitorCreateNestedOneWithoutErrorEntriesInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutErrorEntriesInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutErrorEntriesInput;
	connect?: Prisma.VisitorWhereUniqueInput;
};

export type VisitorUpdateOneRequiredWithoutErrorEntriesNestedInput = {
	create?: Prisma.XOR<
		Prisma.VisitorCreateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutErrorEntriesInput
	>;
	connectOrCreate?: Prisma.VisitorCreateOrConnectWithoutErrorEntriesInput;
	upsert?: Prisma.VisitorUpsertWithoutErrorEntriesInput;
	connect?: Prisma.VisitorWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.VisitorUpdateToOneWithWhereWithoutErrorEntriesInput,
			Prisma.VisitorUpdateWithoutErrorEntriesInput
		>,
		Prisma.VisitorUncheckedUpdateWithoutErrorEntriesInput
	>;
};

export type VisitorCreateWithoutUserInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateWithoutUserInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewUncheckedCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventUncheckedCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorCreateOrConnectWithoutUserInput = {
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutUserInput,
		Prisma.VisitorUncheckedCreateWithoutUserInput
	>;
};

export type VisitorCreateManyUserInputEnvelope = {
	data: Prisma.VisitorCreateManyUserInput | Prisma.VisitorCreateManyUserInput[];
	skipDuplicates?: boolean;
};

export type VisitorUpsertWithWhereUniqueWithoutUserInput = {
	where: Prisma.VisitorWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.VisitorUpdateWithoutUserInput,
		Prisma.VisitorUncheckedUpdateWithoutUserInput
	>;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutUserInput,
		Prisma.VisitorUncheckedCreateWithoutUserInput
	>;
};

export type VisitorUpdateWithWhereUniqueWithoutUserInput = {
	where: Prisma.VisitorWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateWithoutUserInput,
		Prisma.VisitorUncheckedUpdateWithoutUserInput
	>;
};

export type VisitorUpdateManyWithWhereWithoutUserInput = {
	where: Prisma.VisitorScalarWhereInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateManyMutationInput,
		Prisma.VisitorUncheckedUpdateManyWithoutUserInput
	>;
};

export type VisitorScalarWhereInput = {
	AND?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
	OR?: Prisma.VisitorScalarWhereInput[];
	NOT?: Prisma.VisitorScalarWhereInput | Prisma.VisitorScalarWhereInput[];
	id?: Prisma.StringFilter<"Visitor"> | string;
	anonymousId?: Prisma.StringFilter<"Visitor"> | string;
	userId?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"Visitor"> | Date | string;
	browser?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	os?: Prisma.StringNullableFilter<"Visitor"> | string | null;
	device?: Prisma.StringNullableFilter<"Visitor"> | string | null;
};

export type VisitorCreateWithoutPageViewsInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	user?: Prisma.UserCreateNestedOneWithoutVisitorsInput;
	trackEvents?: Prisma.TrackEventCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateWithoutPageViewsInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	trackEvents?: Prisma.TrackEventUncheckedCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorCreateOrConnectWithoutPageViewsInput = {
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutPageViewsInput,
		Prisma.VisitorUncheckedCreateWithoutPageViewsInput
	>;
};

export type VisitorUpsertWithoutPageViewsInput = {
	update: Prisma.XOR<
		Prisma.VisitorUpdateWithoutPageViewsInput,
		Prisma.VisitorUncheckedUpdateWithoutPageViewsInput
	>;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutPageViewsInput,
		Prisma.VisitorUncheckedCreateWithoutPageViewsInput
	>;
	where?: Prisma.VisitorWhereInput;
};

export type VisitorUpdateToOneWithWhereWithoutPageViewsInput = {
	where?: Prisma.VisitorWhereInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateWithoutPageViewsInput,
		Prisma.VisitorUncheckedUpdateWithoutPageViewsInput
	>;
};

export type VisitorUpdateWithoutPageViewsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	user?: Prisma.UserUpdateOneWithoutVisitorsNestedInput;
	trackEvents?: Prisma.TrackEventUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateWithoutPageViewsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	trackEvents?: Prisma.TrackEventUncheckedUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorCreateWithoutTrackEventsInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	user?: Prisma.UserCreateNestedOneWithoutVisitorsInput;
	pageViews?: Prisma.PageViewCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateWithoutTrackEventsInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewUncheckedCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorCreateOrConnectWithoutTrackEventsInput = {
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedCreateWithoutTrackEventsInput
	>;
};

export type VisitorUpsertWithoutTrackEventsInput = {
	update: Prisma.XOR<
		Prisma.VisitorUpdateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedUpdateWithoutTrackEventsInput
	>;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedCreateWithoutTrackEventsInput
	>;
	where?: Prisma.VisitorWhereInput;
};

export type VisitorUpdateToOneWithWhereWithoutTrackEventsInput = {
	where?: Prisma.VisitorWhereInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateWithoutTrackEventsInput,
		Prisma.VisitorUncheckedUpdateWithoutTrackEventsInput
	>;
};

export type VisitorUpdateWithoutTrackEventsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	user?: Prisma.UserUpdateOneWithoutVisitorsNestedInput;
	pageViews?: Prisma.PageViewUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateWithoutTrackEventsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUncheckedUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorCreateWithoutPerformanceEntriesInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	user?: Prisma.UserCreateNestedOneWithoutVisitorsInput;
	pageViews?: Prisma.PageViewCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateWithoutPerformanceEntriesInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewUncheckedCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventUncheckedCreateNestedManyWithoutVisitorInput;
	errorEntries?: Prisma.ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorCreateOrConnectWithoutPerformanceEntriesInput = {
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutPerformanceEntriesInput
	>;
};

export type VisitorUpsertWithoutPerformanceEntriesInput = {
	update: Prisma.XOR<
		Prisma.VisitorUpdateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedUpdateWithoutPerformanceEntriesInput
	>;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutPerformanceEntriesInput
	>;
	where?: Prisma.VisitorWhereInput;
};

export type VisitorUpdateToOneWithWhereWithoutPerformanceEntriesInput = {
	where?: Prisma.VisitorWhereInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateWithoutPerformanceEntriesInput,
		Prisma.VisitorUncheckedUpdateWithoutPerformanceEntriesInput
	>;
};

export type VisitorUpdateWithoutPerformanceEntriesInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	user?: Prisma.UserUpdateOneWithoutVisitorsNestedInput;
	pageViews?: Prisma.PageViewUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateWithoutPerformanceEntriesInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUncheckedUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUncheckedUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorCreateWithoutErrorEntriesInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	user?: Prisma.UserCreateNestedOneWithoutVisitorsInput;
	pageViews?: Prisma.PageViewCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryCreateNestedManyWithoutVisitorInput;
};

export type VisitorUncheckedCreateWithoutErrorEntriesInput = {
	id?: string;
	anonymousId: string;
	userId?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
	pageViews?: Prisma.PageViewUncheckedCreateNestedManyWithoutVisitorInput;
	trackEvents?: Prisma.TrackEventUncheckedCreateNestedManyWithoutVisitorInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput;
};

export type VisitorCreateOrConnectWithoutErrorEntriesInput = {
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutErrorEntriesInput
	>;
};

export type VisitorUpsertWithoutErrorEntriesInput = {
	update: Prisma.XOR<
		Prisma.VisitorUpdateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedUpdateWithoutErrorEntriesInput
	>;
	create: Prisma.XOR<
		Prisma.VisitorCreateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedCreateWithoutErrorEntriesInput
	>;
	where?: Prisma.VisitorWhereInput;
};

export type VisitorUpdateToOneWithWhereWithoutErrorEntriesInput = {
	where?: Prisma.VisitorWhereInput;
	data: Prisma.XOR<
		Prisma.VisitorUpdateWithoutErrorEntriesInput,
		Prisma.VisitorUncheckedUpdateWithoutErrorEntriesInput
	>;
};

export type VisitorUpdateWithoutErrorEntriesInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	user?: Prisma.UserUpdateOneWithoutVisitorsNestedInput;
	pageViews?: Prisma.PageViewUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateWithoutErrorEntriesInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUncheckedUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUncheckedUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorCreateManyUserInput = {
	id?: string;
	anonymousId: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	browser?: string | null;
	os?: string | null;
	device?: string | null;
};

export type VisitorUpdateWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pageViews?: Prisma.PageViewUncheckedUpdateManyWithoutVisitorNestedInput;
	trackEvents?: Prisma.TrackEventUncheckedUpdateManyWithoutVisitorNestedInput;
	performanceEntries?: Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput;
	errorEntries?: Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput;
};

export type VisitorUncheckedUpdateManyWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	anonymousId?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	browser?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	device?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};

export type VisitorCountOutputType = {
	pageViews: number;
	trackEvents: number;
	performanceEntries: number;
	errorEntries: number;
};

export type VisitorCountOutputTypeSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	pageViews?: boolean | VisitorCountOutputTypeCountPageViewsArgs;
	trackEvents?: boolean | VisitorCountOutputTypeCountTrackEventsArgs;
	performanceEntries?:
		| boolean
		| VisitorCountOutputTypeCountPerformanceEntriesArgs;
	errorEntries?: boolean | VisitorCountOutputTypeCountErrorEntriesArgs;
};

export type VisitorCountOutputTypeDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorCountOutputTypeSelect<ExtArgs> | null;
};

export type VisitorCountOutputTypeCountPageViewsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PageViewWhereInput;
};

export type VisitorCountOutputTypeCountTrackEventsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.TrackEventWhereInput;
};

export type VisitorCountOutputTypeCountPerformanceEntriesArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PerformanceEntryWhereInput;
};

export type VisitorCountOutputTypeCountErrorEntriesArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.ErrorEntryWhereInput;
};

export type VisitorSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		anonymousId?: boolean;
		userId?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		browser?: boolean;
		os?: boolean;
		device?: boolean;
		user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
		pageViews?: boolean | Prisma.Visitor$pageViewsArgs<ExtArgs>;
		trackEvents?: boolean | Prisma.Visitor$trackEventsArgs<ExtArgs>;
		performanceEntries?:
			| boolean
			| Prisma.Visitor$performanceEntriesArgs<ExtArgs>;
		errorEntries?: boolean | Prisma.Visitor$errorEntriesArgs<ExtArgs>;
		_count?: boolean | Prisma.VisitorCountOutputTypeDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["visitor"]
>;

export type VisitorSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		anonymousId?: boolean;
		userId?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		browser?: boolean;
		os?: boolean;
		device?: boolean;
		user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
	},
	ExtArgs["result"]["visitor"]
>;

export type VisitorSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		anonymousId?: boolean;
		userId?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		browser?: boolean;
		os?: boolean;
		device?: boolean;
		user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
	},
	ExtArgs["result"]["visitor"]
>;

export type VisitorSelectScalar = {
	id?: boolean;
	anonymousId?: boolean;
	userId?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
	browser?: boolean;
	os?: boolean;
	device?: boolean;
};

export type VisitorOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	| "id"
	| "anonymousId"
	| "userId"
	| "createdAt"
	| "updatedAt"
	| "browser"
	| "os"
	| "device",
	ExtArgs["result"]["visitor"]
>;
export type VisitorInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
	pageViews?: boolean | Prisma.Visitor$pageViewsArgs<ExtArgs>;
	trackEvents?: boolean | Prisma.Visitor$trackEventsArgs<ExtArgs>;
	performanceEntries?: boolean | Prisma.Visitor$performanceEntriesArgs<ExtArgs>;
	errorEntries?: boolean | Prisma.Visitor$errorEntriesArgs<ExtArgs>;
	_count?: boolean | Prisma.VisitorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VisitorIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
};
export type VisitorIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.Visitor$userArgs<ExtArgs>;
};

export type $VisitorPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "Visitor";
	objects: {
		user: Prisma.$UserPayload<ExtArgs> | null;
		pageViews: Prisma.$PageViewPayload<ExtArgs>[];
		trackEvents: Prisma.$TrackEventPayload<ExtArgs>[];
		performanceEntries: Prisma.$PerformanceEntryPayload<ExtArgs>[];
		errorEntries: Prisma.$ErrorEntryPayload<ExtArgs>[];
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			anonymousId: string;
			userId: string | null;
			createdAt: Date;
			updatedAt: Date;
			browser: string | null;
			os: string | null;
			device: string | null;
		},
		ExtArgs["result"]["visitor"]
	>;
	composites: {};
};

export type VisitorGetPayload<
	S extends boolean | null | undefined | VisitorDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$VisitorPayload, S>;

export type VisitorCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<VisitorFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: VisitorCountAggregateInputType | true;
};

export interface VisitorDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["Visitor"];
		meta: { name: "Visitor" };
	};
	findUnique<T extends VisitorFindUniqueArgs>(
		args: Prisma.SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends VisitorFindFirstArgs>(
		args?: Prisma.SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends VisitorFindManyArgs>(
		args?: Prisma.SelectSubset<T, VisitorFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends VisitorCreateArgs>(
		args: Prisma.SelectSubset<T, VisitorCreateArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends VisitorCreateManyArgs>(
		args?: Prisma.SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends VisitorDeleteArgs>(
		args: Prisma.SelectSubset<T, VisitorDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends VisitorUpdateArgs>(
		args: Prisma.SelectSubset<T, VisitorUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends VisitorDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends VisitorUpdateManyArgs>(
		args: Prisma.SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends VisitorUpsertArgs>(
		args: Prisma.SelectSubset<T, VisitorUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		runtime.Types.Result.GetResult<
			Prisma.$VisitorPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends VisitorCountArgs>(
		args?: Prisma.Subset<T, VisitorCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], VisitorCountAggregateOutputType>
			: number
	>;

	aggregate<T extends VisitorAggregateArgs>(
		args: Prisma.Subset<T, VisitorAggregateArgs>,
	): Prisma.PrismaPromise<GetVisitorAggregateType<T>>;

	groupBy<
		T extends VisitorGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: VisitorGroupByArgs["orderBy"] }
			: { orderBy?: VisitorGroupByArgs["orderBy"] },
		OrderFields extends Prisma.ExcludeUnderscoreKeys<
			Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
		>,
		ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
		ByValid extends Prisma.Has<ByFields, OrderFields>,
		HavingFields extends Prisma.GetHavingFields<T["having"]>,
		HavingValid extends Prisma.Has<ByFields, HavingFields>,
		ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
		InputErrors extends ByEmpty extends Prisma.True
			? `Error: "by" must not be empty.`
			: HavingValid extends Prisma.False
				? {
						[P in HavingFields]: P extends ByFields
							? never
							: P extends string
								? `Error: Field "${P}" used in "having" needs to be provided in "by".`
								: [
										Error,
										"Field ",
										P,
										` in "having" needs to be provided in "by"`,
									];
					}[HavingFields]
				: "take" extends Prisma.Keys<T>
					? "orderBy" extends Prisma.Keys<T>
						? ByValid extends Prisma.True
							? {}
							: {
									[P in OrderFields]: P extends ByFields
										? never
										: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								}[OrderFields]
						: 'Error: If you provide "take", you also need to provide "orderBy"'
					: "skip" extends Prisma.Keys<T>
						? "orderBy" extends Prisma.Keys<T>
							? ByValid extends Prisma.True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "skip", you also need to provide "orderBy"'
						: ByValid extends Prisma.True
							? {}
							: {
									[P in OrderFields]: P extends ByFields
										? never
										: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
								}[OrderFields],
	>(
		args: Prisma.SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetVisitorGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: VisitorFieldRefs;
}

export interface Prisma__VisitorClient<
	T,
	Null = never,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
	readonly [Symbol.toStringTag]: "PrismaPromise";
	user<T extends Prisma.Visitor$userArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.Visitor$userArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;
	pageViews<T extends Prisma.Visitor$pageViewsArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.Visitor$pageViewsArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$PageViewPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
		  >
		| Null
	>;
	trackEvents<T extends Prisma.Visitor$trackEventsArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.Visitor$trackEventsArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$TrackEventPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
		  >
		| Null
	>;
	performanceEntries<
		T extends Prisma.Visitor$performanceEntriesArgs<ExtArgs> = {},
	>(
		args?: Prisma.Subset<T, Prisma.Visitor$performanceEntriesArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$PerformanceEntryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
		  >
		| Null
	>;
	errorEntries<T extends Prisma.Visitor$errorEntriesArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.Visitor$errorEntriesArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$ErrorEntryPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
		  >
		| Null
	>;
	then<TResult1 = T, TResult2 = never>(
		onfulfilled?:
			| ((value: T) => TResult1 | PromiseLike<TResult1>)
			| undefined
			| null,
		onrejected?:
			| ((reason: any) => TResult2 | PromiseLike<TResult2>)
			| undefined
			| null,
	): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
	catch<TResult = never>(
		onrejected?:
			| ((reason: any) => TResult | PromiseLike<TResult>)
			| undefined
			| null,
	): runtime.Types.Utils.JsPromise<T | TResult>;
	finally(
		onfinally?: (() => void) | undefined | null,
	): runtime.Types.Utils.JsPromise<T>;
}

export interface VisitorFieldRefs {
	readonly id: Prisma.FieldRef<"Visitor", "String">;
	readonly anonymousId: Prisma.FieldRef<"Visitor", "String">;
	readonly userId: Prisma.FieldRef<"Visitor", "String">;
	readonly createdAt: Prisma.FieldRef<"Visitor", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"Visitor", "DateTime">;
	readonly browser: Prisma.FieldRef<"Visitor", "String">;
	readonly os: Prisma.FieldRef<"Visitor", "String">;
	readonly device: Prisma.FieldRef<"Visitor", "String">;
}

export type VisitorFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where: Prisma.VisitorWhereUniqueInput;
};

export type VisitorFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where: Prisma.VisitorWhereUniqueInput;
};

export type VisitorFindFirstArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where?: Prisma.VisitorWhereInput;
	orderBy?:
		| Prisma.VisitorOrderByWithRelationInput
		| Prisma.VisitorOrderByWithRelationInput[];
	cursor?: Prisma.VisitorWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};

export type VisitorFindFirstOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where?: Prisma.VisitorWhereInput;
	orderBy?:
		| Prisma.VisitorOrderByWithRelationInput
		| Prisma.VisitorOrderByWithRelationInput[];
	cursor?: Prisma.VisitorWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};

export type VisitorFindManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where?: Prisma.VisitorWhereInput;
	orderBy?:
		| Prisma.VisitorOrderByWithRelationInput
		| Prisma.VisitorOrderByWithRelationInput[];
	cursor?: Prisma.VisitorWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.VisitorScalarFieldEnum | Prisma.VisitorScalarFieldEnum[];
};

export type VisitorCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.VisitorCreateInput,
		Prisma.VisitorUncheckedCreateInput
	>;
};

export type VisitorCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
	skipDuplicates?: boolean;
};

export type VisitorCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	data: Prisma.VisitorCreateManyInput | Prisma.VisitorCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.VisitorIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type VisitorUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.VisitorUpdateInput,
		Prisma.VisitorUncheckedUpdateInput
	>;
	where: Prisma.VisitorWhereUniqueInput;
};

export type VisitorUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.VisitorUpdateManyMutationInput,
		Prisma.VisitorUncheckedUpdateManyInput
	>;
	where?: Prisma.VisitorWhereInput;
	limit?: number;
};

export type VisitorUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.VisitorUpdateManyMutationInput,
		Prisma.VisitorUncheckedUpdateManyInput
	>;
	where?: Prisma.VisitorWhereInput;
	limit?: number;
	include?: Prisma.VisitorIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type VisitorUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where: Prisma.VisitorWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.VisitorCreateInput,
		Prisma.VisitorUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.VisitorUpdateInput,
		Prisma.VisitorUncheckedUpdateInput
	>;
};

export type VisitorDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
	where: Prisma.VisitorWhereUniqueInput;
};

export type VisitorDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.VisitorWhereInput;
	limit?: number;
};

export type Visitor$userArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where?: Prisma.UserWhereInput;
};

export type Visitor$pageViewsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	where?: Prisma.PageViewWhereInput;
	orderBy?:
		| Prisma.PageViewOrderByWithRelationInput
		| Prisma.PageViewOrderByWithRelationInput[];
	cursor?: Prisma.PageViewWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.PageViewScalarFieldEnum | Prisma.PageViewScalarFieldEnum[];
};

export type Visitor$trackEventsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	where?: Prisma.TrackEventWhereInput;
	orderBy?:
		| Prisma.TrackEventOrderByWithRelationInput
		| Prisma.TrackEventOrderByWithRelationInput[];
	cursor?: Prisma.TrackEventWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?:
		| Prisma.TrackEventScalarFieldEnum
		| Prisma.TrackEventScalarFieldEnum[];
};

export type Visitor$performanceEntriesArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	where?: Prisma.PerformanceEntryWhereInput;
	orderBy?:
		| Prisma.PerformanceEntryOrderByWithRelationInput
		| Prisma.PerformanceEntryOrderByWithRelationInput[];
	cursor?: Prisma.PerformanceEntryWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?:
		| Prisma.PerformanceEntryScalarFieldEnum
		| Prisma.PerformanceEntryScalarFieldEnum[];
};

export type Visitor$errorEntriesArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	where?: Prisma.ErrorEntryWhereInput;
	orderBy?:
		| Prisma.ErrorEntryOrderByWithRelationInput
		| Prisma.ErrorEntryOrderByWithRelationInput[];
	cursor?: Prisma.ErrorEntryWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?:
		| Prisma.ErrorEntryScalarFieldEnum
		| Prisma.ErrorEntryScalarFieldEnum[];
};

export type VisitorDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.VisitorSelect<ExtArgs> | null;
	omit?: Prisma.VisitorOmit<ExtArgs> | null;
	include?: Prisma.VisitorInclude<ExtArgs> | null;
};
