/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type PerformanceEntryModel =
	runtime.Types.Result.DefaultSelection<Prisma.$PerformanceEntryPayload>;

export type AggregatePerformanceEntry = {
	_count: PerformanceEntryCountAggregateOutputType | null;
	_avg: PerformanceEntryAvgAggregateOutputType | null;
	_sum: PerformanceEntrySumAggregateOutputType | null;
	_min: PerformanceEntryMinAggregateOutputType | null;
	_max: PerformanceEntryMaxAggregateOutputType | null;
};

export type PerformanceEntryAvgAggregateOutputType = {
	fp: number | null;
	fcp: number | null;
	lcp: number | null;
	inp: number | null;
	cls: number | null;
};

export type PerformanceEntrySumAggregateOutputType = {
	fp: number | null;
	fcp: number | null;
	lcp: number | null;
	inp: number | null;
	cls: number | null;
};

export type PerformanceEntryMinAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	fp: number | null;
	fcp: number | null;
	lcp: number | null;
	inp: number | null;
	cls: number | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type PerformanceEntryMaxAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	fp: number | null;
	fcp: number | null;
	lcp: number | null;
	inp: number | null;
	cls: number | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type PerformanceEntryCountAggregateOutputType = {
	id: number;
	visitorId: number;
	fp: number;
	fcp: number;
	lcp: number;
	inp: number;
	cls: number;
	createdAt: number;
	updatedAt: number;
	_all: number;
};

export type PerformanceEntryAvgAggregateInputType = {
	fp?: true;
	fcp?: true;
	lcp?: true;
	inp?: true;
	cls?: true;
};

export type PerformanceEntrySumAggregateInputType = {
	fp?: true;
	fcp?: true;
	lcp?: true;
	inp?: true;
	cls?: true;
};

export type PerformanceEntryMinAggregateInputType = {
	id?: true;
	visitorId?: true;
	fp?: true;
	fcp?: true;
	lcp?: true;
	inp?: true;
	cls?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type PerformanceEntryMaxAggregateInputType = {
	id?: true;
	visitorId?: true;
	fp?: true;
	fcp?: true;
	lcp?: true;
	inp?: true;
	cls?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type PerformanceEntryCountAggregateInputType = {
	id?: true;
	visitorId?: true;
	fp?: true;
	fcp?: true;
	lcp?: true;
	inp?: true;
	cls?: true;
	createdAt?: true;
	updatedAt?: true;
	_all?: true;
};

export type PerformanceEntryAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PerformanceEntryWhereInput;
	orderBy?:
		| Prisma.PerformanceEntryOrderByWithRelationInput
		| Prisma.PerformanceEntryOrderByWithRelationInput[];
	cursor?: Prisma.PerformanceEntryWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | PerformanceEntryCountAggregateInputType;
	_avg?: PerformanceEntryAvgAggregateInputType;
	_sum?: PerformanceEntrySumAggregateInputType;
	_min?: PerformanceEntryMinAggregateInputType;
	_max?: PerformanceEntryMaxAggregateInputType;
};

export type GetPerformanceEntryAggregateType<
	T extends PerformanceEntryAggregateArgs,
> = {
	[P in keyof T & keyof AggregatePerformanceEntry]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregatePerformanceEntry[P]>
		: Prisma.GetScalarType<T[P], AggregatePerformanceEntry[P]>;
};

export type PerformanceEntryGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PerformanceEntryWhereInput;
	orderBy?:
		| Prisma.PerformanceEntryOrderByWithAggregationInput
		| Prisma.PerformanceEntryOrderByWithAggregationInput[];
	by:
		| Prisma.PerformanceEntryScalarFieldEnum[]
		| Prisma.PerformanceEntryScalarFieldEnum;
	having?: Prisma.PerformanceEntryScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: PerformanceEntryCountAggregateInputType | true;
	_avg?: PerformanceEntryAvgAggregateInputType;
	_sum?: PerformanceEntrySumAggregateInputType;
	_min?: PerformanceEntryMinAggregateInputType;
	_max?: PerformanceEntryMaxAggregateInputType;
};

export type PerformanceEntryGroupByOutputType = {
	id: string;
	visitorId: string;
	fp: number | null;
	fcp: number | null;
	lcp: number | null;
	inp: number | null;
	cls: number | null;
	createdAt: Date;
	updatedAt: Date;
	_count: PerformanceEntryCountAggregateOutputType | null;
	_avg: PerformanceEntryAvgAggregateOutputType | null;
	_sum: PerformanceEntrySumAggregateOutputType | null;
	_min: PerformanceEntryMinAggregateOutputType | null;
	_max: PerformanceEntryMaxAggregateOutputType | null;
};

export type GetPerformanceEntryGroupByPayload<
	T extends PerformanceEntryGroupByArgs,
> = Prisma.PrismaPromise<
	Array<
		Prisma.PickEnumerable<PerformanceEntryGroupByOutputType, T["by"]> & {
			[P in keyof T &
				keyof PerformanceEntryGroupByOutputType]: P extends "_count"
				? T[P] extends boolean
					? number
					: Prisma.GetScalarType<T[P], PerformanceEntryGroupByOutputType[P]>
				: Prisma.GetScalarType<T[P], PerformanceEntryGroupByOutputType[P]>;
		}
	>
>;

export type PerformanceEntryWhereInput = {
	AND?: Prisma.PerformanceEntryWhereInput | Prisma.PerformanceEntryWhereInput[];
	OR?: Prisma.PerformanceEntryWhereInput[];
	NOT?: Prisma.PerformanceEntryWhereInput | Prisma.PerformanceEntryWhereInput[];
	id?: Prisma.StringFilter<"PerformanceEntry"> | string;
	visitorId?: Prisma.StringFilter<"PerformanceEntry"> | string;
	fp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	fcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	lcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	inp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	cls?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	createdAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
	visitor?: Prisma.XOR<
		Prisma.VisitorScalarRelationFilter,
		Prisma.VisitorWhereInput
	>;
};

export type PerformanceEntryOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	fp?: Prisma.SortOrderInput | Prisma.SortOrder;
	fcp?: Prisma.SortOrderInput | Prisma.SortOrder;
	lcp?: Prisma.SortOrderInput | Prisma.SortOrder;
	inp?: Prisma.SortOrderInput | Prisma.SortOrder;
	cls?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	visitor?: Prisma.VisitorOrderByWithRelationInput;
};

export type PerformanceEntryWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		AND?:
			| Prisma.PerformanceEntryWhereInput
			| Prisma.PerformanceEntryWhereInput[];
		OR?: Prisma.PerformanceEntryWhereInput[];
		NOT?:
			| Prisma.PerformanceEntryWhereInput
			| Prisma.PerformanceEntryWhereInput[];
		visitorId?: Prisma.StringFilter<"PerformanceEntry"> | string;
		fp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
		fcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
		lcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
		inp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
		cls?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
		createdAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
		visitor?: Prisma.XOR<
			Prisma.VisitorScalarRelationFilter,
			Prisma.VisitorWhereInput
		>;
	},
	"id"
>;

export type PerformanceEntryOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	fp?: Prisma.SortOrderInput | Prisma.SortOrder;
	fcp?: Prisma.SortOrderInput | Prisma.SortOrder;
	lcp?: Prisma.SortOrderInput | Prisma.SortOrder;
	inp?: Prisma.SortOrderInput | Prisma.SortOrder;
	cls?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	_count?: Prisma.PerformanceEntryCountOrderByAggregateInput;
	_avg?: Prisma.PerformanceEntryAvgOrderByAggregateInput;
	_max?: Prisma.PerformanceEntryMaxOrderByAggregateInput;
	_min?: Prisma.PerformanceEntryMinOrderByAggregateInput;
	_sum?: Prisma.PerformanceEntrySumOrderByAggregateInput;
};

export type PerformanceEntryScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.PerformanceEntryScalarWhereWithAggregatesInput
		| Prisma.PerformanceEntryScalarWhereWithAggregatesInput[];
	OR?: Prisma.PerformanceEntryScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.PerformanceEntryScalarWhereWithAggregatesInput
		| Prisma.PerformanceEntryScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"PerformanceEntry"> | string;
	visitorId?: Prisma.StringWithAggregatesFilter<"PerformanceEntry"> | string;
	fp?:
		| Prisma.FloatNullableWithAggregatesFilter<"PerformanceEntry">
		| number
		| null;
	fcp?:
		| Prisma.FloatNullableWithAggregatesFilter<"PerformanceEntry">
		| number
		| null;
	lcp?:
		| Prisma.FloatNullableWithAggregatesFilter<"PerformanceEntry">
		| number
		| null;
	inp?:
		| Prisma.FloatNullableWithAggregatesFilter<"PerformanceEntry">
		| number
		| null;
	cls?:
		| Prisma.FloatNullableWithAggregatesFilter<"PerformanceEntry">
		| number
		| null;
	createdAt?:
		| Prisma.DateTimeWithAggregatesFilter<"PerformanceEntry">
		| Date
		| string;
	updatedAt?:
		| Prisma.DateTimeWithAggregatesFilter<"PerformanceEntry">
		| Date
		| string;
};

export type PerformanceEntryCreateInput = {
	id?: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	visitor: Prisma.VisitorCreateNestedOneWithoutPerformanceEntriesInput;
};

export type PerformanceEntryUncheckedCreateInput = {
	id?: string;
	visitorId: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PerformanceEntryUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	visitor?: Prisma.VisitorUpdateOneRequiredWithoutPerformanceEntriesNestedInput;
};

export type PerformanceEntryUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntryCreateManyInput = {
	id?: string;
	visitorId: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PerformanceEntryUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntryUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntryListRelationFilter = {
	every?: Prisma.PerformanceEntryWhereInput;
	some?: Prisma.PerformanceEntryWhereInput;
	none?: Prisma.PerformanceEntryWhereInput;
};

export type PerformanceEntryOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type PerformanceEntryCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	fp?: Prisma.SortOrder;
	fcp?: Prisma.SortOrder;
	lcp?: Prisma.SortOrder;
	inp?: Prisma.SortOrder;
	cls?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PerformanceEntryAvgOrderByAggregateInput = {
	fp?: Prisma.SortOrder;
	fcp?: Prisma.SortOrder;
	lcp?: Prisma.SortOrder;
	inp?: Prisma.SortOrder;
	cls?: Prisma.SortOrder;
};

export type PerformanceEntryMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	fp?: Prisma.SortOrder;
	fcp?: Prisma.SortOrder;
	lcp?: Prisma.SortOrder;
	inp?: Prisma.SortOrder;
	cls?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PerformanceEntryMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	fp?: Prisma.SortOrder;
	fcp?: Prisma.SortOrder;
	lcp?: Prisma.SortOrder;
	inp?: Prisma.SortOrder;
	cls?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PerformanceEntrySumOrderByAggregateInput = {
	fp?: Prisma.SortOrder;
	fcp?: Prisma.SortOrder;
	lcp?: Prisma.SortOrder;
	inp?: Prisma.SortOrder;
	cls?: Prisma.SortOrder;
};

export type PerformanceEntryCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.PerformanceEntryCreateWithoutVisitorInput,
				Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PerformanceEntryCreateWithoutVisitorInput[]
		| Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.PerformanceEntryCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
};

export type PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.PerformanceEntryCreateWithoutVisitorInput,
				Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PerformanceEntryCreateWithoutVisitorInput[]
		| Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.PerformanceEntryCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
};

export type PerformanceEntryUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.PerformanceEntryCreateWithoutVisitorInput,
				Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PerformanceEntryCreateWithoutVisitorInput[]
		| Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.PerformanceEntryCreateManyVisitorInputEnvelope;
	set?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	disconnect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	delete?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	connect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	update?:
		| Prisma.PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.PerformanceEntryUpdateManyWithWhereWithoutVisitorInput
		| Prisma.PerformanceEntryUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.PerformanceEntryScalarWhereInput
		| Prisma.PerformanceEntryScalarWhereInput[];
};

export type PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.PerformanceEntryCreateWithoutVisitorInput,
				Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PerformanceEntryCreateWithoutVisitorInput[]
		| Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput
		| Prisma.PerformanceEntryCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.PerformanceEntryCreateManyVisitorInputEnvelope;
	set?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	disconnect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	delete?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	connect?:
		| Prisma.PerformanceEntryWhereUniqueInput
		| Prisma.PerformanceEntryWhereUniqueInput[];
	update?:
		| Prisma.PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.PerformanceEntryUpdateManyWithWhereWithoutVisitorInput
		| Prisma.PerformanceEntryUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.PerformanceEntryScalarWhereInput
		| Prisma.PerformanceEntryScalarWhereInput[];
};

export type NullableFloatFieldUpdateOperationsInput = {
	set?: number | null;
	increment?: number;
	decrement?: number;
	multiply?: number;
	divide?: number;
};

export type PerformanceEntryCreateWithoutVisitorInput = {
	id?: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PerformanceEntryUncheckedCreateWithoutVisitorInput = {
	id?: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PerformanceEntryCreateOrConnectWithoutVisitorInput = {
	where: Prisma.PerformanceEntryWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.PerformanceEntryCreateWithoutVisitorInput,
		Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
	>;
};

export type PerformanceEntryCreateManyVisitorInputEnvelope = {
	data:
		| Prisma.PerformanceEntryCreateManyVisitorInput
		| Prisma.PerformanceEntryCreateManyVisitorInput[];
	skipDuplicates?: boolean;
};

export type PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.PerformanceEntryWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.PerformanceEntryUpdateWithoutVisitorInput,
		Prisma.PerformanceEntryUncheckedUpdateWithoutVisitorInput
	>;
	create: Prisma.XOR<
		Prisma.PerformanceEntryCreateWithoutVisitorInput,
		Prisma.PerformanceEntryUncheckedCreateWithoutVisitorInput
	>;
};

export type PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.PerformanceEntryWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.PerformanceEntryUpdateWithoutVisitorInput,
		Prisma.PerformanceEntryUncheckedUpdateWithoutVisitorInput
	>;
};

export type PerformanceEntryUpdateManyWithWhereWithoutVisitorInput = {
	where: Prisma.PerformanceEntryScalarWhereInput;
	data: Prisma.XOR<
		Prisma.PerformanceEntryUpdateManyMutationInput,
		Prisma.PerformanceEntryUncheckedUpdateManyWithoutVisitorInput
	>;
};

export type PerformanceEntryScalarWhereInput = {
	AND?:
		| Prisma.PerformanceEntryScalarWhereInput
		| Prisma.PerformanceEntryScalarWhereInput[];
	OR?: Prisma.PerformanceEntryScalarWhereInput[];
	NOT?:
		| Prisma.PerformanceEntryScalarWhereInput
		| Prisma.PerformanceEntryScalarWhereInput[];
	id?: Prisma.StringFilter<"PerformanceEntry"> | string;
	visitorId?: Prisma.StringFilter<"PerformanceEntry"> | string;
	fp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	fcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	lcp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	inp?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	cls?: Prisma.FloatNullableFilter<"PerformanceEntry"> | number | null;
	createdAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"PerformanceEntry"> | Date | string;
};

export type PerformanceEntryCreateManyVisitorInput = {
	id?: string;
	fp?: number | null;
	fcp?: number | null;
	lcp?: number | null;
	inp?: number | null;
	cls?: number | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PerformanceEntryUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntryUncheckedUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntryUncheckedUpdateManyWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	fp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	fcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	lcp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	inp?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	cls?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PerformanceEntrySelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		fp?: boolean;
		fcp?: boolean;
		lcp?: boolean;
		inp?: boolean;
		cls?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["performanceEntry"]
>;

export type PerformanceEntrySelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		fp?: boolean;
		fcp?: boolean;
		lcp?: boolean;
		inp?: boolean;
		cls?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["performanceEntry"]
>;

export type PerformanceEntrySelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		fp?: boolean;
		fcp?: boolean;
		lcp?: boolean;
		inp?: boolean;
		cls?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["performanceEntry"]
>;

export type PerformanceEntrySelectScalar = {
	id?: boolean;
	visitorId?: boolean;
	fp?: boolean;
	fcp?: boolean;
	lcp?: boolean;
	inp?: boolean;
	cls?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
};

export type PerformanceEntryOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	| "id"
	| "visitorId"
	| "fp"
	| "fcp"
	| "lcp"
	| "inp"
	| "cls"
	| "createdAt"
	| "updatedAt",
	ExtArgs["result"]["performanceEntry"]
>;
export type PerformanceEntryInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type PerformanceEntryIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type PerformanceEntryIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};

export type $PerformanceEntryPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "PerformanceEntry";
	objects: {
		visitor: Prisma.$VisitorPayload<ExtArgs>;
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			visitorId: string;
			fp: number | null;
			fcp: number | null;
			lcp: number | null;
			inp: number | null;
			cls: number | null;
			createdAt: Date;
			updatedAt: Date;
		},
		ExtArgs["result"]["performanceEntry"]
	>;
	composites: {};
};

export type PerformanceEntryGetPayload<
	S extends boolean | null | undefined | PerformanceEntryDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$PerformanceEntryPayload, S>;

export type PerformanceEntryCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<
	PerformanceEntryFindManyArgs,
	"select" | "include" | "distinct" | "omit"
> & {
	select?: PerformanceEntryCountAggregateInputType | true;
};

export interface PerformanceEntryDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["PerformanceEntry"];
		meta: { name: "PerformanceEntry" };
	};
	findUnique<T extends PerformanceEntryFindUniqueArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends PerformanceEntryFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<
			T,
			PerformanceEntryFindUniqueOrThrowArgs<ExtArgs>
		>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends PerformanceEntryFindFirstArgs>(
		args?: Prisma.SelectSubset<T, PerformanceEntryFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends PerformanceEntryFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<
			T,
			PerformanceEntryFindFirstOrThrowArgs<ExtArgs>
		>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends PerformanceEntryFindManyArgs>(
		args?: Prisma.SelectSubset<T, PerformanceEntryFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends PerformanceEntryCreateArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryCreateArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends PerformanceEntryCreateManyArgs>(
		args?: Prisma.SelectSubset<T, PerformanceEntryCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends PerformanceEntryCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<
			T,
			PerformanceEntryCreateManyAndReturnArgs<ExtArgs>
		>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends PerformanceEntryDeleteArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends PerformanceEntryUpdateArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends PerformanceEntryDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, PerformanceEntryDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends PerformanceEntryUpdateManyArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends PerformanceEntryUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<
			T,
			PerformanceEntryUpdateManyAndReturnArgs<ExtArgs>
		>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends PerformanceEntryUpsertArgs>(
		args: Prisma.SelectSubset<T, PerformanceEntryUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__PerformanceEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$PerformanceEntryPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends PerformanceEntryCountArgs>(
		args?: Prisma.Subset<T, PerformanceEntryCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<
						T["select"],
						PerformanceEntryCountAggregateOutputType
					>
			: number
	>;

	aggregate<T extends PerformanceEntryAggregateArgs>(
		args: Prisma.Subset<T, PerformanceEntryAggregateArgs>,
	): Prisma.PrismaPromise<GetPerformanceEntryAggregateType<T>>;

	groupBy<
		T extends PerformanceEntryGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: PerformanceEntryGroupByArgs["orderBy"] }
			: { orderBy?: PerformanceEntryGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<
			T,
			PerformanceEntryGroupByArgs,
			OrderByArg
		> &
			InputErrors,
	): {} extends InputErrors
		? GetPerformanceEntryGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: PerformanceEntryFieldRefs;
}

export interface Prisma__PerformanceEntryClient<
	T,
	Null = never,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
	readonly [Symbol.toStringTag]: "PrismaPromise";
	visitor<T extends Prisma.VisitorDefaultArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.VisitorDefaultArgs<ExtArgs>>,
	): Prisma.Prisma__VisitorClient<
		| runtime.Types.Result.GetResult<
				Prisma.$VisitorPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
		  >
		| Null,
		Null,
		ExtArgs,
		GlobalOmitOptions
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

export interface PerformanceEntryFieldRefs {
	readonly id: Prisma.FieldRef<"PerformanceEntry", "String">;
	readonly visitorId: Prisma.FieldRef<"PerformanceEntry", "String">;
	readonly fp: Prisma.FieldRef<"PerformanceEntry", "Float">;
	readonly fcp: Prisma.FieldRef<"PerformanceEntry", "Float">;
	readonly lcp: Prisma.FieldRef<"PerformanceEntry", "Float">;
	readonly inp: Prisma.FieldRef<"PerformanceEntry", "Float">;
	readonly cls: Prisma.FieldRef<"PerformanceEntry", "Float">;
	readonly createdAt: Prisma.FieldRef<"PerformanceEntry", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"PerformanceEntry", "DateTime">;
}

export type PerformanceEntryFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	where: Prisma.PerformanceEntryWhereUniqueInput;
};

export type PerformanceEntryFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	where: Prisma.PerformanceEntryWhereUniqueInput;
};

export type PerformanceEntryFindFirstArgs<
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

export type PerformanceEntryFindFirstOrThrowArgs<
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

export type PerformanceEntryFindManyArgs<
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

export type PerformanceEntryCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PerformanceEntryCreateInput,
		Prisma.PerformanceEntryUncheckedCreateInput
	>;
};

export type PerformanceEntryCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data:
		| Prisma.PerformanceEntryCreateManyInput
		| Prisma.PerformanceEntryCreateManyInput[];
	skipDuplicates?: boolean;
};

export type PerformanceEntryCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	data:
		| Prisma.PerformanceEntryCreateManyInput
		| Prisma.PerformanceEntryCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.PerformanceEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type PerformanceEntryUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PerformanceEntryUpdateInput,
		Prisma.PerformanceEntryUncheckedUpdateInput
	>;
	where: Prisma.PerformanceEntryWhereUniqueInput;
};

export type PerformanceEntryUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.PerformanceEntryUpdateManyMutationInput,
		Prisma.PerformanceEntryUncheckedUpdateManyInput
	>;
	where?: Prisma.PerformanceEntryWhereInput;
	limit?: number;
};

export type PerformanceEntryUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PerformanceEntryUpdateManyMutationInput,
		Prisma.PerformanceEntryUncheckedUpdateManyInput
	>;
	where?: Prisma.PerformanceEntryWhereInput;
	limit?: number;
	include?: Prisma.PerformanceEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type PerformanceEntryUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	where: Prisma.PerformanceEntryWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.PerformanceEntryCreateInput,
		Prisma.PerformanceEntryUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.PerformanceEntryUpdateInput,
		Prisma.PerformanceEntryUncheckedUpdateInput
	>;
};

export type PerformanceEntryDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
	where: Prisma.PerformanceEntryWhereUniqueInput;
};

export type PerformanceEntryDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PerformanceEntryWhereInput;
	limit?: number;
};

export type PerformanceEntryDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PerformanceEntrySelect<ExtArgs> | null;
	omit?: Prisma.PerformanceEntryOmit<ExtArgs> | null;
	include?: Prisma.PerformanceEntryInclude<ExtArgs> | null;
};
