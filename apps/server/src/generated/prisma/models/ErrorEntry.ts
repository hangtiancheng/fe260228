/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type ErrorEntryModel =
	runtime.Types.Result.DefaultSelection<Prisma.$ErrorEntryPayload>;

export type AggregateErrorEntry = {
	_count: ErrorEntryCountAggregateOutputType | null;
	_min: ErrorEntryMinAggregateOutputType | null;
	_max: ErrorEntryMaxAggregateOutputType | null;
};

export type ErrorEntryMinAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	error: string | null;
	message: string | null;
	stack: string | null;
	url: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type ErrorEntryMaxAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	error: string | null;
	message: string | null;
	stack: string | null;
	url: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type ErrorEntryCountAggregateOutputType = {
	id: number;
	visitorId: number;
	error: number;
	message: number;
	stack: number;
	url: number;
	createdAt: number;
	updatedAt: number;
	_all: number;
};

export type ErrorEntryMinAggregateInputType = {
	id?: true;
	visitorId?: true;
	error?: true;
	message?: true;
	stack?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type ErrorEntryMaxAggregateInputType = {
	id?: true;
	visitorId?: true;
	error?: true;
	message?: true;
	stack?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type ErrorEntryCountAggregateInputType = {
	id?: true;
	visitorId?: true;
	error?: true;
	message?: true;
	stack?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
	_all?: true;
};

export type ErrorEntryAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.ErrorEntryWhereInput;
	orderBy?:
		| Prisma.ErrorEntryOrderByWithRelationInput
		| Prisma.ErrorEntryOrderByWithRelationInput[];
	cursor?: Prisma.ErrorEntryWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | ErrorEntryCountAggregateInputType;
	_min?: ErrorEntryMinAggregateInputType;
	_max?: ErrorEntryMaxAggregateInputType;
};

export type GetErrorEntryAggregateType<T extends ErrorEntryAggregateArgs> = {
	[P in keyof T & keyof AggregateErrorEntry]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateErrorEntry[P]>
		: Prisma.GetScalarType<T[P], AggregateErrorEntry[P]>;
};

export type ErrorEntryGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.ErrorEntryWhereInput;
	orderBy?:
		| Prisma.ErrorEntryOrderByWithAggregationInput
		| Prisma.ErrorEntryOrderByWithAggregationInput[];
	by: Prisma.ErrorEntryScalarFieldEnum[] | Prisma.ErrorEntryScalarFieldEnum;
	having?: Prisma.ErrorEntryScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: ErrorEntryCountAggregateInputType | true;
	_min?: ErrorEntryMinAggregateInputType;
	_max?: ErrorEntryMaxAggregateInputType;
};

export type ErrorEntryGroupByOutputType = {
	id: string;
	visitorId: string;
	error: string;
	message: string | null;
	stack: string | null;
	url: string | null;
	createdAt: Date;
	updatedAt: Date;
	_count: ErrorEntryCountAggregateOutputType | null;
	_min: ErrorEntryMinAggregateOutputType | null;
	_max: ErrorEntryMaxAggregateOutputType | null;
};

export type GetErrorEntryGroupByPayload<T extends ErrorEntryGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<ErrorEntryGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof ErrorEntryGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], ErrorEntryGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], ErrorEntryGroupByOutputType[P]>;
			}
		>
	>;

export type ErrorEntryWhereInput = {
	AND?: Prisma.ErrorEntryWhereInput | Prisma.ErrorEntryWhereInput[];
	OR?: Prisma.ErrorEntryWhereInput[];
	NOT?: Prisma.ErrorEntryWhereInput | Prisma.ErrorEntryWhereInput[];
	id?: Prisma.StringFilter<"ErrorEntry"> | string;
	visitorId?: Prisma.StringFilter<"ErrorEntry"> | string;
	error?: Prisma.StringFilter<"ErrorEntry"> | string;
	message?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	stack?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	url?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
	visitor?: Prisma.XOR<
		Prisma.VisitorScalarRelationFilter,
		Prisma.VisitorWhereInput
	>;
};

export type ErrorEntryOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	error?: Prisma.SortOrder;
	message?: Prisma.SortOrderInput | Prisma.SortOrder;
	stack?: Prisma.SortOrderInput | Prisma.SortOrder;
	url?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	visitor?: Prisma.VisitorOrderByWithRelationInput;
};

export type ErrorEntryWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		AND?: Prisma.ErrorEntryWhereInput | Prisma.ErrorEntryWhereInput[];
		OR?: Prisma.ErrorEntryWhereInput[];
		NOT?: Prisma.ErrorEntryWhereInput | Prisma.ErrorEntryWhereInput[];
		visitorId?: Prisma.StringFilter<"ErrorEntry"> | string;
		error?: Prisma.StringFilter<"ErrorEntry"> | string;
		message?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
		stack?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
		url?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
		createdAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
		visitor?: Prisma.XOR<
			Prisma.VisitorScalarRelationFilter,
			Prisma.VisitorWhereInput
		>;
	},
	"id"
>;

export type ErrorEntryOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	error?: Prisma.SortOrder;
	message?: Prisma.SortOrderInput | Prisma.SortOrder;
	stack?: Prisma.SortOrderInput | Prisma.SortOrder;
	url?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	_count?: Prisma.ErrorEntryCountOrderByAggregateInput;
	_max?: Prisma.ErrorEntryMaxOrderByAggregateInput;
	_min?: Prisma.ErrorEntryMinOrderByAggregateInput;
};

export type ErrorEntryScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.ErrorEntryScalarWhereWithAggregatesInput
		| Prisma.ErrorEntryScalarWhereWithAggregatesInput[];
	OR?: Prisma.ErrorEntryScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.ErrorEntryScalarWhereWithAggregatesInput
		| Prisma.ErrorEntryScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"ErrorEntry"> | string;
	visitorId?: Prisma.StringWithAggregatesFilter<"ErrorEntry"> | string;
	error?: Prisma.StringWithAggregatesFilter<"ErrorEntry"> | string;
	message?:
		| Prisma.StringNullableWithAggregatesFilter<"ErrorEntry">
		| string
		| null;
	stack?:
		| Prisma.StringNullableWithAggregatesFilter<"ErrorEntry">
		| string
		| null;
	url?: Prisma.StringNullableWithAggregatesFilter<"ErrorEntry"> | string | null;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"ErrorEntry"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ErrorEntry"> | Date | string;
};

export type ErrorEntryCreateInput = {
	id?: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	visitor: Prisma.VisitorCreateNestedOneWithoutErrorEntriesInput;
};

export type ErrorEntryUncheckedCreateInput = {
	id?: string;
	visitorId: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type ErrorEntryUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	visitor?: Prisma.VisitorUpdateOneRequiredWithoutErrorEntriesNestedInput;
};

export type ErrorEntryUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntryCreateManyInput = {
	id?: string;
	visitorId: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type ErrorEntryUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntryUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntryListRelationFilter = {
	every?: Prisma.ErrorEntryWhereInput;
	some?: Prisma.ErrorEntryWhereInput;
	none?: Prisma.ErrorEntryWhereInput;
};

export type ErrorEntryOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type ErrorEntryCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	error?: Prisma.SortOrder;
	message?: Prisma.SortOrder;
	stack?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type ErrorEntryMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	error?: Prisma.SortOrder;
	message?: Prisma.SortOrder;
	stack?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type ErrorEntryMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	error?: Prisma.SortOrder;
	message?: Prisma.SortOrder;
	stack?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type ErrorEntryCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.ErrorEntryCreateWithoutVisitorInput,
				Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.ErrorEntryCreateWithoutVisitorInput[]
		| Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.ErrorEntryCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
};

export type ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.ErrorEntryCreateWithoutVisitorInput,
				Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.ErrorEntryCreateWithoutVisitorInput[]
		| Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.ErrorEntryCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
};

export type ErrorEntryUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.ErrorEntryCreateWithoutVisitorInput,
				Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.ErrorEntryCreateWithoutVisitorInput[]
		| Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.ErrorEntryCreateManyVisitorInputEnvelope;
	set?: Prisma.ErrorEntryWhereUniqueInput | Prisma.ErrorEntryWhereUniqueInput[];
	disconnect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	delete?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	connect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	update?:
		| Prisma.ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.ErrorEntryUpdateManyWithWhereWithoutVisitorInput
		| Prisma.ErrorEntryUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.ErrorEntryScalarWhereInput
		| Prisma.ErrorEntryScalarWhereInput[];
};

export type ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.ErrorEntryCreateWithoutVisitorInput,
				Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.ErrorEntryCreateWithoutVisitorInput[]
		| Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput
		| Prisma.ErrorEntryCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.ErrorEntryCreateManyVisitorInputEnvelope;
	set?: Prisma.ErrorEntryWhereUniqueInput | Prisma.ErrorEntryWhereUniqueInput[];
	disconnect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	delete?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	connect?:
		| Prisma.ErrorEntryWhereUniqueInput
		| Prisma.ErrorEntryWhereUniqueInput[];
	update?:
		| Prisma.ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.ErrorEntryUpdateManyWithWhereWithoutVisitorInput
		| Prisma.ErrorEntryUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.ErrorEntryScalarWhereInput
		| Prisma.ErrorEntryScalarWhereInput[];
};

export type ErrorEntryCreateWithoutVisitorInput = {
	id?: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type ErrorEntryUncheckedCreateWithoutVisitorInput = {
	id?: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type ErrorEntryCreateOrConnectWithoutVisitorInput = {
	where: Prisma.ErrorEntryWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.ErrorEntryCreateWithoutVisitorInput,
		Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
	>;
};

export type ErrorEntryCreateManyVisitorInputEnvelope = {
	data:
		| Prisma.ErrorEntryCreateManyVisitorInput
		| Prisma.ErrorEntryCreateManyVisitorInput[];
	skipDuplicates?: boolean;
};

export type ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.ErrorEntryWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.ErrorEntryUpdateWithoutVisitorInput,
		Prisma.ErrorEntryUncheckedUpdateWithoutVisitorInput
	>;
	create: Prisma.XOR<
		Prisma.ErrorEntryCreateWithoutVisitorInput,
		Prisma.ErrorEntryUncheckedCreateWithoutVisitorInput
	>;
};

export type ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.ErrorEntryWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.ErrorEntryUpdateWithoutVisitorInput,
		Prisma.ErrorEntryUncheckedUpdateWithoutVisitorInput
	>;
};

export type ErrorEntryUpdateManyWithWhereWithoutVisitorInput = {
	where: Prisma.ErrorEntryScalarWhereInput;
	data: Prisma.XOR<
		Prisma.ErrorEntryUpdateManyMutationInput,
		Prisma.ErrorEntryUncheckedUpdateManyWithoutVisitorInput
	>;
};

export type ErrorEntryScalarWhereInput = {
	AND?: Prisma.ErrorEntryScalarWhereInput | Prisma.ErrorEntryScalarWhereInput[];
	OR?: Prisma.ErrorEntryScalarWhereInput[];
	NOT?: Prisma.ErrorEntryScalarWhereInput | Prisma.ErrorEntryScalarWhereInput[];
	id?: Prisma.StringFilter<"ErrorEntry"> | string;
	visitorId?: Prisma.StringFilter<"ErrorEntry"> | string;
	error?: Prisma.StringFilter<"ErrorEntry"> | string;
	message?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	stack?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	url?: Prisma.StringNullableFilter<"ErrorEntry"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"ErrorEntry"> | Date | string;
};

export type ErrorEntryCreateManyVisitorInput = {
	id?: string;
	error: string;
	message?: string | null;
	stack?: string | null;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type ErrorEntryUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntryUncheckedUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntryUncheckedUpdateManyWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	error?: Prisma.StringFieldUpdateOperationsInput | string;
	message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	stack?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type ErrorEntrySelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		error?: boolean;
		message?: boolean;
		stack?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["errorEntry"]
>;

export type ErrorEntrySelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		error?: boolean;
		message?: boolean;
		stack?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["errorEntry"]
>;

export type ErrorEntrySelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		error?: boolean;
		message?: boolean;
		stack?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["errorEntry"]
>;

export type ErrorEntrySelectScalar = {
	id?: boolean;
	visitorId?: boolean;
	error?: boolean;
	message?: boolean;
	stack?: boolean;
	url?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
};

export type ErrorEntryOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	| "id"
	| "visitorId"
	| "error"
	| "message"
	| "stack"
	| "url"
	| "createdAt"
	| "updatedAt",
	ExtArgs["result"]["errorEntry"]
>;
export type ErrorEntryInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type ErrorEntryIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type ErrorEntryIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};

export type $ErrorEntryPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "ErrorEntry";
	objects: {
		visitor: Prisma.$VisitorPayload<ExtArgs>;
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			visitorId: string;
			error: string;
			message: string | null;
			stack: string | null;
			url: string | null;
			createdAt: Date;
			updatedAt: Date;
		},
		ExtArgs["result"]["errorEntry"]
	>;
	composites: {};
};

export type ErrorEntryGetPayload<
	S extends boolean | null | undefined | ErrorEntryDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$ErrorEntryPayload, S>;

export type ErrorEntryCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<ErrorEntryFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: ErrorEntryCountAggregateInputType | true;
};

export interface ErrorEntryDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["ErrorEntry"];
		meta: { name: "ErrorEntry" };
	};
	findUnique<T extends ErrorEntryFindUniqueArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends ErrorEntryFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends ErrorEntryFindFirstArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends ErrorEntryFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends ErrorEntryFindManyArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends ErrorEntryCreateArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryCreateArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends ErrorEntryCreateManyArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends ErrorEntryCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends ErrorEntryDeleteArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends ErrorEntryUpdateArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends ErrorEntryDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, ErrorEntryDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends ErrorEntryUpdateManyArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends ErrorEntryUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends ErrorEntryUpsertArgs>(
		args: Prisma.SelectSubset<T, ErrorEntryUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__ErrorEntryClient<
		runtime.Types.Result.GetResult<
			Prisma.$ErrorEntryPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends ErrorEntryCountArgs>(
		args?: Prisma.Subset<T, ErrorEntryCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], ErrorEntryCountAggregateOutputType>
			: number
	>;

	aggregate<T extends ErrorEntryAggregateArgs>(
		args: Prisma.Subset<T, ErrorEntryAggregateArgs>,
	): Prisma.PrismaPromise<GetErrorEntryAggregateType<T>>;

	groupBy<
		T extends ErrorEntryGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: ErrorEntryGroupByArgs["orderBy"] }
			: { orderBy?: ErrorEntryGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, ErrorEntryGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetErrorEntryGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: ErrorEntryFieldRefs;
}

export interface Prisma__ErrorEntryClient<
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

export interface ErrorEntryFieldRefs {
	readonly id: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly visitorId: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly error: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly message: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly stack: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly url: Prisma.FieldRef<"ErrorEntry", "String">;
	readonly createdAt: Prisma.FieldRef<"ErrorEntry", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"ErrorEntry", "DateTime">;
}

export type ErrorEntryFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	where: Prisma.ErrorEntryWhereUniqueInput;
};

export type ErrorEntryFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	where: Prisma.ErrorEntryWhereUniqueInput;
};

export type ErrorEntryFindFirstArgs<
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

export type ErrorEntryFindFirstOrThrowArgs<
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

export type ErrorEntryFindManyArgs<
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

export type ErrorEntryCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.ErrorEntryCreateInput,
		Prisma.ErrorEntryUncheckedCreateInput
	>;
};

export type ErrorEntryCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.ErrorEntryCreateManyInput | Prisma.ErrorEntryCreateManyInput[];
	skipDuplicates?: boolean;
};

export type ErrorEntryCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	data: Prisma.ErrorEntryCreateManyInput | Prisma.ErrorEntryCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.ErrorEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type ErrorEntryUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.ErrorEntryUpdateInput,
		Prisma.ErrorEntryUncheckedUpdateInput
	>;
	where: Prisma.ErrorEntryWhereUniqueInput;
};

export type ErrorEntryUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.ErrorEntryUpdateManyMutationInput,
		Prisma.ErrorEntryUncheckedUpdateManyInput
	>;
	where?: Prisma.ErrorEntryWhereInput;
	limit?: number;
};

export type ErrorEntryUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.ErrorEntryUpdateManyMutationInput,
		Prisma.ErrorEntryUncheckedUpdateManyInput
	>;
	where?: Prisma.ErrorEntryWhereInput;
	limit?: number;
	include?: Prisma.ErrorEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type ErrorEntryUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	where: Prisma.ErrorEntryWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.ErrorEntryCreateInput,
		Prisma.ErrorEntryUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.ErrorEntryUpdateInput,
		Prisma.ErrorEntryUncheckedUpdateInput
	>;
};

export type ErrorEntryDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
	where: Prisma.ErrorEntryWhereUniqueInput;
};

export type ErrorEntryDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.ErrorEntryWhereInput;
	limit?: number;
};

export type ErrorEntryDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.ErrorEntrySelect<ExtArgs> | null;
	omit?: Prisma.ErrorEntryOmit<ExtArgs> | null;
	include?: Prisma.ErrorEntryInclude<ExtArgs> | null;
};
