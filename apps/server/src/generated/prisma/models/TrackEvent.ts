/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type TrackEventModel =
	runtime.Types.Result.DefaultSelection<Prisma.$TrackEventPayload>;

export type AggregateTrackEvent = {
	_count: TrackEventCountAggregateOutputType | null;
	_min: TrackEventMinAggregateOutputType | null;
	_max: TrackEventMaxAggregateOutputType | null;
};

export type TrackEventMinAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	event: string | null;
	url: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type TrackEventMaxAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	event: string | null;
	url: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type TrackEventCountAggregateOutputType = {
	id: number;
	visitorId: number;
	event: number;
	payload: number;
	url: number;
	createdAt: number;
	updatedAt: number;
	_all: number;
};

export type TrackEventMinAggregateInputType = {
	id?: true;
	visitorId?: true;
	event?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type TrackEventMaxAggregateInputType = {
	id?: true;
	visitorId?: true;
	event?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type TrackEventCountAggregateInputType = {
	id?: true;
	visitorId?: true;
	event?: true;
	payload?: true;
	url?: true;
	createdAt?: true;
	updatedAt?: true;
	_all?: true;
};

export type TrackEventAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.TrackEventWhereInput;
	orderBy?:
		| Prisma.TrackEventOrderByWithRelationInput
		| Prisma.TrackEventOrderByWithRelationInput[];
	cursor?: Prisma.TrackEventWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | TrackEventCountAggregateInputType;
	_min?: TrackEventMinAggregateInputType;
	_max?: TrackEventMaxAggregateInputType;
};

export type GetTrackEventAggregateType<T extends TrackEventAggregateArgs> = {
	[P in keyof T & keyof AggregateTrackEvent]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateTrackEvent[P]>
		: Prisma.GetScalarType<T[P], AggregateTrackEvent[P]>;
};

export type TrackEventGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.TrackEventWhereInput;
	orderBy?:
		| Prisma.TrackEventOrderByWithAggregationInput
		| Prisma.TrackEventOrderByWithAggregationInput[];
	by: Prisma.TrackEventScalarFieldEnum[] | Prisma.TrackEventScalarFieldEnum;
	having?: Prisma.TrackEventScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: TrackEventCountAggregateInputType | true;
	_min?: TrackEventMinAggregateInputType;
	_max?: TrackEventMaxAggregateInputType;
};

export type TrackEventGroupByOutputType = {
	id: string;
	visitorId: string;
	event: string;
	payload: runtime.JsonValue | null;
	url: string | null;
	createdAt: Date;
	updatedAt: Date;
	_count: TrackEventCountAggregateOutputType | null;
	_min: TrackEventMinAggregateOutputType | null;
	_max: TrackEventMaxAggregateOutputType | null;
};

export type GetTrackEventGroupByPayload<T extends TrackEventGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<TrackEventGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof TrackEventGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], TrackEventGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], TrackEventGroupByOutputType[P]>;
			}
		>
	>;

export type TrackEventWhereInput = {
	AND?: Prisma.TrackEventWhereInput | Prisma.TrackEventWhereInput[];
	OR?: Prisma.TrackEventWhereInput[];
	NOT?: Prisma.TrackEventWhereInput | Prisma.TrackEventWhereInput[];
	id?: Prisma.StringFilter<"TrackEvent"> | string;
	visitorId?: Prisma.StringFilter<"TrackEvent"> | string;
	event?: Prisma.StringFilter<"TrackEvent"> | string;
	payload?: Prisma.JsonNullableFilter<"TrackEvent">;
	url?: Prisma.StringNullableFilter<"TrackEvent"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
	visitor?: Prisma.XOR<
		Prisma.VisitorScalarRelationFilter,
		Prisma.VisitorWhereInput
	>;
};

export type TrackEventOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	event?: Prisma.SortOrder;
	payload?: Prisma.SortOrderInput | Prisma.SortOrder;
	url?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	visitor?: Prisma.VisitorOrderByWithRelationInput;
};

export type TrackEventWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		AND?: Prisma.TrackEventWhereInput | Prisma.TrackEventWhereInput[];
		OR?: Prisma.TrackEventWhereInput[];
		NOT?: Prisma.TrackEventWhereInput | Prisma.TrackEventWhereInput[];
		visitorId?: Prisma.StringFilter<"TrackEvent"> | string;
		event?: Prisma.StringFilter<"TrackEvent"> | string;
		payload?: Prisma.JsonNullableFilter<"TrackEvent">;
		url?: Prisma.StringNullableFilter<"TrackEvent"> | string | null;
		createdAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
		visitor?: Prisma.XOR<
			Prisma.VisitorScalarRelationFilter,
			Prisma.VisitorWhereInput
		>;
	},
	"id"
>;

export type TrackEventOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	event?: Prisma.SortOrder;
	payload?: Prisma.SortOrderInput | Prisma.SortOrder;
	url?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	_count?: Prisma.TrackEventCountOrderByAggregateInput;
	_max?: Prisma.TrackEventMaxOrderByAggregateInput;
	_min?: Prisma.TrackEventMinOrderByAggregateInput;
};

export type TrackEventScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.TrackEventScalarWhereWithAggregatesInput
		| Prisma.TrackEventScalarWhereWithAggregatesInput[];
	OR?: Prisma.TrackEventScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.TrackEventScalarWhereWithAggregatesInput
		| Prisma.TrackEventScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"TrackEvent"> | string;
	visitorId?: Prisma.StringWithAggregatesFilter<"TrackEvent"> | string;
	event?: Prisma.StringWithAggregatesFilter<"TrackEvent"> | string;
	payload?: Prisma.JsonNullableWithAggregatesFilter<"TrackEvent">;
	url?: Prisma.StringNullableWithAggregatesFilter<"TrackEvent"> | string | null;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"TrackEvent"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TrackEvent"> | Date | string;
};

export type TrackEventCreateInput = {
	id?: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	visitor: Prisma.VisitorCreateNestedOneWithoutTrackEventsInput;
};

export type TrackEventUncheckedCreateInput = {
	id?: string;
	visitorId: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type TrackEventUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	visitor?: Prisma.VisitorUpdateOneRequiredWithoutTrackEventsNestedInput;
};

export type TrackEventUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventCreateManyInput = {
	id?: string;
	visitorId: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type TrackEventUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventListRelationFilter = {
	every?: Prisma.TrackEventWhereInput;
	some?: Prisma.TrackEventWhereInput;
	none?: Prisma.TrackEventWhereInput;
};

export type TrackEventOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type TrackEventCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	event?: Prisma.SortOrder;
	payload?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type TrackEventMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	event?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type TrackEventMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	event?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type TrackEventCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.TrackEventCreateWithoutVisitorInput,
				Prisma.TrackEventUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.TrackEventCreateWithoutVisitorInput[]
		| Prisma.TrackEventUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.TrackEventCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
};

export type TrackEventUncheckedCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.TrackEventCreateWithoutVisitorInput,
				Prisma.TrackEventUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.TrackEventCreateWithoutVisitorInput[]
		| Prisma.TrackEventUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.TrackEventCreateManyVisitorInputEnvelope;
	connect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
};

export type TrackEventUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.TrackEventCreateWithoutVisitorInput,
				Prisma.TrackEventUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.TrackEventCreateWithoutVisitorInput[]
		| Prisma.TrackEventUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.TrackEventUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.TrackEventUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.TrackEventCreateManyVisitorInputEnvelope;
	set?: Prisma.TrackEventWhereUniqueInput | Prisma.TrackEventWhereUniqueInput[];
	disconnect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	delete?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	connect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	update?:
		| Prisma.TrackEventUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.TrackEventUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.TrackEventUpdateManyWithWhereWithoutVisitorInput
		| Prisma.TrackEventUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.TrackEventScalarWhereInput
		| Prisma.TrackEventScalarWhereInput[];
};

export type TrackEventUncheckedUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.TrackEventCreateWithoutVisitorInput,
				Prisma.TrackEventUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.TrackEventCreateWithoutVisitorInput[]
		| Prisma.TrackEventUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput
		| Prisma.TrackEventCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.TrackEventUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.TrackEventUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.TrackEventCreateManyVisitorInputEnvelope;
	set?: Prisma.TrackEventWhereUniqueInput | Prisma.TrackEventWhereUniqueInput[];
	disconnect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	delete?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	connect?:
		| Prisma.TrackEventWhereUniqueInput
		| Prisma.TrackEventWhereUniqueInput[];
	update?:
		| Prisma.TrackEventUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.TrackEventUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.TrackEventUpdateManyWithWhereWithoutVisitorInput
		| Prisma.TrackEventUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.TrackEventScalarWhereInput
		| Prisma.TrackEventScalarWhereInput[];
};

export type TrackEventCreateWithoutVisitorInput = {
	id?: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type TrackEventUncheckedCreateWithoutVisitorInput = {
	id?: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type TrackEventCreateOrConnectWithoutVisitorInput = {
	where: Prisma.TrackEventWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.TrackEventCreateWithoutVisitorInput,
		Prisma.TrackEventUncheckedCreateWithoutVisitorInput
	>;
};

export type TrackEventCreateManyVisitorInputEnvelope = {
	data:
		| Prisma.TrackEventCreateManyVisitorInput
		| Prisma.TrackEventCreateManyVisitorInput[];
	skipDuplicates?: boolean;
};

export type TrackEventUpsertWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.TrackEventWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.TrackEventUpdateWithoutVisitorInput,
		Prisma.TrackEventUncheckedUpdateWithoutVisitorInput
	>;
	create: Prisma.XOR<
		Prisma.TrackEventCreateWithoutVisitorInput,
		Prisma.TrackEventUncheckedCreateWithoutVisitorInput
	>;
};

export type TrackEventUpdateWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.TrackEventWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.TrackEventUpdateWithoutVisitorInput,
		Prisma.TrackEventUncheckedUpdateWithoutVisitorInput
	>;
};

export type TrackEventUpdateManyWithWhereWithoutVisitorInput = {
	where: Prisma.TrackEventScalarWhereInput;
	data: Prisma.XOR<
		Prisma.TrackEventUpdateManyMutationInput,
		Prisma.TrackEventUncheckedUpdateManyWithoutVisitorInput
	>;
};

export type TrackEventScalarWhereInput = {
	AND?: Prisma.TrackEventScalarWhereInput | Prisma.TrackEventScalarWhereInput[];
	OR?: Prisma.TrackEventScalarWhereInput[];
	NOT?: Prisma.TrackEventScalarWhereInput | Prisma.TrackEventScalarWhereInput[];
	id?: Prisma.StringFilter<"TrackEvent"> | string;
	visitorId?: Prisma.StringFilter<"TrackEvent"> | string;
	event?: Prisma.StringFilter<"TrackEvent"> | string;
	payload?: Prisma.JsonNullableFilter<"TrackEvent">;
	url?: Prisma.StringNullableFilter<"TrackEvent"> | string | null;
	createdAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"TrackEvent"> | Date | string;
};

export type TrackEventCreateManyVisitorInput = {
	id?: string;
	event: string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: string | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type TrackEventUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventUncheckedUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventUncheckedUpdateManyWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	event?: Prisma.StringFieldUpdateOperationsInput | string;
	payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
	url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type TrackEventSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		event?: boolean;
		payload?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["trackEvent"]
>;

export type TrackEventSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		event?: boolean;
		payload?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["trackEvent"]
>;

export type TrackEventSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		event?: boolean;
		payload?: boolean;
		url?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["trackEvent"]
>;

export type TrackEventSelectScalar = {
	id?: boolean;
	visitorId?: boolean;
	event?: boolean;
	payload?: boolean;
	url?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
};

export type TrackEventOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	"id" | "visitorId" | "event" | "payload" | "url" | "createdAt" | "updatedAt",
	ExtArgs["result"]["trackEvent"]
>;
export type TrackEventInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type TrackEventIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type TrackEventIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};

export type $TrackEventPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "TrackEvent";
	objects: {
		visitor: Prisma.$VisitorPayload<ExtArgs>;
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			visitorId: string;
			event: string;
			payload: runtime.JsonValue | null;
			url: string | null;
			createdAt: Date;
			updatedAt: Date;
		},
		ExtArgs["result"]["trackEvent"]
	>;
	composites: {};
};

export type TrackEventGetPayload<
	S extends boolean | null | undefined | TrackEventDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$TrackEventPayload, S>;

export type TrackEventCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<TrackEventFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: TrackEventCountAggregateInputType | true;
};

export interface TrackEventDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["TrackEvent"];
		meta: { name: "TrackEvent" };
	};
	findUnique<T extends TrackEventFindUniqueArgs>(
		args: Prisma.SelectSubset<T, TrackEventFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends TrackEventFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, TrackEventFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends TrackEventFindFirstArgs>(
		args?: Prisma.SelectSubset<T, TrackEventFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends TrackEventFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, TrackEventFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends TrackEventFindManyArgs>(
		args?: Prisma.SelectSubset<T, TrackEventFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends TrackEventCreateArgs>(
		args: Prisma.SelectSubset<T, TrackEventCreateArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends TrackEventCreateManyArgs>(
		args?: Prisma.SelectSubset<T, TrackEventCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends TrackEventCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, TrackEventCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends TrackEventDeleteArgs>(
		args: Prisma.SelectSubset<T, TrackEventDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends TrackEventUpdateArgs>(
		args: Prisma.SelectSubset<T, TrackEventUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends TrackEventDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, TrackEventDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends TrackEventUpdateManyArgs>(
		args: Prisma.SelectSubset<T, TrackEventUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends TrackEventUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, TrackEventUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends TrackEventUpsertArgs>(
		args: Prisma.SelectSubset<T, TrackEventUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__TrackEventClient<
		runtime.Types.Result.GetResult<
			Prisma.$TrackEventPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends TrackEventCountArgs>(
		args?: Prisma.Subset<T, TrackEventCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], TrackEventCountAggregateOutputType>
			: number
	>;

	aggregate<T extends TrackEventAggregateArgs>(
		args: Prisma.Subset<T, TrackEventAggregateArgs>,
	): Prisma.PrismaPromise<GetTrackEventAggregateType<T>>;

	groupBy<
		T extends TrackEventGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: TrackEventGroupByArgs["orderBy"] }
			: { orderBy?: TrackEventGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, TrackEventGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetTrackEventGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: TrackEventFieldRefs;
}

export interface Prisma__TrackEventClient<
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

export interface TrackEventFieldRefs {
	readonly id: Prisma.FieldRef<"TrackEvent", "String">;
	readonly visitorId: Prisma.FieldRef<"TrackEvent", "String">;
	readonly event: Prisma.FieldRef<"TrackEvent", "String">;
	readonly payload: Prisma.FieldRef<"TrackEvent", "Json">;
	readonly url: Prisma.FieldRef<"TrackEvent", "String">;
	readonly createdAt: Prisma.FieldRef<"TrackEvent", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"TrackEvent", "DateTime">;
}

export type TrackEventFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	where: Prisma.TrackEventWhereUniqueInput;
};

export type TrackEventFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	where: Prisma.TrackEventWhereUniqueInput;
};

export type TrackEventFindFirstArgs<
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

export type TrackEventFindFirstOrThrowArgs<
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

export type TrackEventFindManyArgs<
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

export type TrackEventCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.TrackEventCreateInput,
		Prisma.TrackEventUncheckedCreateInput
	>;
};

export type TrackEventCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.TrackEventCreateManyInput | Prisma.TrackEventCreateManyInput[];
	skipDuplicates?: boolean;
};

export type TrackEventCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	data: Prisma.TrackEventCreateManyInput | Prisma.TrackEventCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.TrackEventIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type TrackEventUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.TrackEventUpdateInput,
		Prisma.TrackEventUncheckedUpdateInput
	>;
	where: Prisma.TrackEventWhereUniqueInput;
};

export type TrackEventUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.TrackEventUpdateManyMutationInput,
		Prisma.TrackEventUncheckedUpdateManyInput
	>;
	where?: Prisma.TrackEventWhereInput;
	limit?: number;
};

export type TrackEventUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.TrackEventUpdateManyMutationInput,
		Prisma.TrackEventUncheckedUpdateManyInput
	>;
	where?: Prisma.TrackEventWhereInput;
	limit?: number;
	include?: Prisma.TrackEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type TrackEventUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	where: Prisma.TrackEventWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.TrackEventCreateInput,
		Prisma.TrackEventUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.TrackEventUpdateInput,
		Prisma.TrackEventUncheckedUpdateInput
	>;
};

export type TrackEventDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
	where: Prisma.TrackEventWhereUniqueInput;
};

export type TrackEventDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.TrackEventWhereInput;
	limit?: number;
};

export type TrackEventDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.TrackEventSelect<ExtArgs> | null;
	omit?: Prisma.TrackEventOmit<ExtArgs> | null;
	include?: Prisma.TrackEventInclude<ExtArgs> | null;
};
