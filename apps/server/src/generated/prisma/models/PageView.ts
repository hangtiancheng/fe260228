/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type PageViewModel =
	runtime.Types.Result.DefaultSelection<Prisma.$PageViewPayload>;

export type AggregatePageView = {
	_count: PageViewCountAggregateOutputType | null;
	_min: PageViewMinAggregateOutputType | null;
	_max: PageViewMaxAggregateOutputType | null;
};

export type PageViewMinAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	url: string | null;
	referrer: string | null;
	path: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type PageViewMaxAggregateOutputType = {
	id: string | null;
	visitorId: string | null;
	url: string | null;
	referrer: string | null;
	path: string | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type PageViewCountAggregateOutputType = {
	id: number;
	visitorId: number;
	url: number;
	referrer: number;
	path: number;
	createdAt: number;
	updatedAt: number;
	_all: number;
};

export type PageViewMinAggregateInputType = {
	id?: true;
	visitorId?: true;
	url?: true;
	referrer?: true;
	path?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type PageViewMaxAggregateInputType = {
	id?: true;
	visitorId?: true;
	url?: true;
	referrer?: true;
	path?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type PageViewCountAggregateInputType = {
	id?: true;
	visitorId?: true;
	url?: true;
	referrer?: true;
	path?: true;
	createdAt?: true;
	updatedAt?: true;
	_all?: true;
};

export type PageViewAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PageViewWhereInput;
	orderBy?:
		| Prisma.PageViewOrderByWithRelationInput
		| Prisma.PageViewOrderByWithRelationInput[];
	cursor?: Prisma.PageViewWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | PageViewCountAggregateInputType;
	_min?: PageViewMinAggregateInputType;
	_max?: PageViewMaxAggregateInputType;
};

export type GetPageViewAggregateType<T extends PageViewAggregateArgs> = {
	[P in keyof T & keyof AggregatePageView]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregatePageView[P]>
		: Prisma.GetScalarType<T[P], AggregatePageView[P]>;
};

export type PageViewGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PageViewWhereInput;
	orderBy?:
		| Prisma.PageViewOrderByWithAggregationInput
		| Prisma.PageViewOrderByWithAggregationInput[];
	by: Prisma.PageViewScalarFieldEnum[] | Prisma.PageViewScalarFieldEnum;
	having?: Prisma.PageViewScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: PageViewCountAggregateInputType | true;
	_min?: PageViewMinAggregateInputType;
	_max?: PageViewMaxAggregateInputType;
};

export type PageViewGroupByOutputType = {
	id: string;
	visitorId: string;
	url: string;
	referrer: string | null;
	path: string;
	createdAt: Date;
	updatedAt: Date;
	_count: PageViewCountAggregateOutputType | null;
	_min: PageViewMinAggregateOutputType | null;
	_max: PageViewMaxAggregateOutputType | null;
};

export type GetPageViewGroupByPayload<T extends PageViewGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<PageViewGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof PageViewGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], PageViewGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], PageViewGroupByOutputType[P]>;
			}
		>
	>;

export type PageViewWhereInput = {
	AND?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
	OR?: Prisma.PageViewWhereInput[];
	NOT?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
	id?: Prisma.StringFilter<"PageView"> | string;
	visitorId?: Prisma.StringFilter<"PageView"> | string;
	url?: Prisma.StringFilter<"PageView"> | string;
	referrer?: Prisma.StringNullableFilter<"PageView"> | string | null;
	path?: Prisma.StringFilter<"PageView"> | string;
	createdAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
	visitor?: Prisma.XOR<
		Prisma.VisitorScalarRelationFilter,
		Prisma.VisitorWhereInput
	>;
};

export type PageViewOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
	path?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	visitor?: Prisma.VisitorOrderByWithRelationInput;
};

export type PageViewWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		AND?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
		OR?: Prisma.PageViewWhereInput[];
		NOT?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
		visitorId?: Prisma.StringFilter<"PageView"> | string;
		url?: Prisma.StringFilter<"PageView"> | string;
		referrer?: Prisma.StringNullableFilter<"PageView"> | string | null;
		path?: Prisma.StringFilter<"PageView"> | string;
		createdAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
		visitor?: Prisma.XOR<
			Prisma.VisitorScalarRelationFilter,
			Prisma.VisitorWhereInput
		>;
	},
	"id"
>;

export type PageViewOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
	path?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	_count?: Prisma.PageViewCountOrderByAggregateInput;
	_max?: Prisma.PageViewMaxOrderByAggregateInput;
	_min?: Prisma.PageViewMinOrderByAggregateInput;
};

export type PageViewScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.PageViewScalarWhereWithAggregatesInput
		| Prisma.PageViewScalarWhereWithAggregatesInput[];
	OR?: Prisma.PageViewScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.PageViewScalarWhereWithAggregatesInput
		| Prisma.PageViewScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
	visitorId?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
	url?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
	referrer?:
		| Prisma.StringNullableWithAggregatesFilter<"PageView">
		| string
		| null;
	path?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"PageView"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PageView"> | Date | string;
};

export type PageViewCreateInput = {
	id?: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	visitor: Prisma.VisitorCreateNestedOneWithoutPageViewsInput;
};

export type PageViewUncheckedCreateInput = {
	id?: string;
	visitorId: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PageViewUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	visitor?: Prisma.VisitorUpdateOneRequiredWithoutPageViewsNestedInput;
};

export type PageViewUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewCreateManyInput = {
	id?: string;
	visitorId: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PageViewUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	visitorId?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewListRelationFilter = {
	every?: Prisma.PageViewWhereInput;
	some?: Prisma.PageViewWhereInput;
	none?: Prisma.PageViewWhereInput;
};

export type PageViewOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type PageViewCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	referrer?: Prisma.SortOrder;
	path?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PageViewMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	referrer?: Prisma.SortOrder;
	path?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PageViewMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	visitorId?: Prisma.SortOrder;
	url?: Prisma.SortOrder;
	referrer?: Prisma.SortOrder;
	path?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type PageViewCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.PageViewCreateWithoutVisitorInput,
				Prisma.PageViewUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PageViewCreateWithoutVisitorInput[]
		| Prisma.PageViewUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.PageViewCreateManyVisitorInputEnvelope;
	connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
};

export type PageViewUncheckedCreateNestedManyWithoutVisitorInput = {
	create?:
		| Prisma.XOR<
				Prisma.PageViewCreateWithoutVisitorInput,
				Prisma.PageViewUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PageViewCreateWithoutVisitorInput[]
		| Prisma.PageViewUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput[];
	createMany?: Prisma.PageViewCreateManyVisitorInputEnvelope;
	connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
};

export type PageViewUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.PageViewCreateWithoutVisitorInput,
				Prisma.PageViewUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PageViewCreateWithoutVisitorInput[]
		| Prisma.PageViewUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.PageViewUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.PageViewUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.PageViewCreateManyVisitorInputEnvelope;
	set?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	disconnect?:
		| Prisma.PageViewWhereUniqueInput
		| Prisma.PageViewWhereUniqueInput[];
	delete?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	update?:
		| Prisma.PageViewUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.PageViewUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.PageViewUpdateManyWithWhereWithoutVisitorInput
		| Prisma.PageViewUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.PageViewScalarWhereInput
		| Prisma.PageViewScalarWhereInput[];
};

export type PageViewUncheckedUpdateManyWithoutVisitorNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.PageViewCreateWithoutVisitorInput,
				Prisma.PageViewUncheckedCreateWithoutVisitorInput
		  >
		| Prisma.PageViewCreateWithoutVisitorInput[]
		| Prisma.PageViewUncheckedCreateWithoutVisitorInput[];
	connectOrCreate?:
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput
		| Prisma.PageViewCreateOrConnectWithoutVisitorInput[];
	upsert?:
		| Prisma.PageViewUpsertWithWhereUniqueWithoutVisitorInput
		| Prisma.PageViewUpsertWithWhereUniqueWithoutVisitorInput[];
	createMany?: Prisma.PageViewCreateManyVisitorInputEnvelope;
	set?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	disconnect?:
		| Prisma.PageViewWhereUniqueInput
		| Prisma.PageViewWhereUniqueInput[];
	delete?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
	update?:
		| Prisma.PageViewUpdateWithWhereUniqueWithoutVisitorInput
		| Prisma.PageViewUpdateWithWhereUniqueWithoutVisitorInput[];
	updateMany?:
		| Prisma.PageViewUpdateManyWithWhereWithoutVisitorInput
		| Prisma.PageViewUpdateManyWithWhereWithoutVisitorInput[];
	deleteMany?:
		| Prisma.PageViewScalarWhereInput
		| Prisma.PageViewScalarWhereInput[];
};

export type PageViewCreateWithoutVisitorInput = {
	id?: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PageViewUncheckedCreateWithoutVisitorInput = {
	id?: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PageViewCreateOrConnectWithoutVisitorInput = {
	where: Prisma.PageViewWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.PageViewCreateWithoutVisitorInput,
		Prisma.PageViewUncheckedCreateWithoutVisitorInput
	>;
};

export type PageViewCreateManyVisitorInputEnvelope = {
	data:
		| Prisma.PageViewCreateManyVisitorInput
		| Prisma.PageViewCreateManyVisitorInput[];
	skipDuplicates?: boolean;
};

export type PageViewUpsertWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.PageViewWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.PageViewUpdateWithoutVisitorInput,
		Prisma.PageViewUncheckedUpdateWithoutVisitorInput
	>;
	create: Prisma.XOR<
		Prisma.PageViewCreateWithoutVisitorInput,
		Prisma.PageViewUncheckedCreateWithoutVisitorInput
	>;
};

export type PageViewUpdateWithWhereUniqueWithoutVisitorInput = {
	where: Prisma.PageViewWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.PageViewUpdateWithoutVisitorInput,
		Prisma.PageViewUncheckedUpdateWithoutVisitorInput
	>;
};

export type PageViewUpdateManyWithWhereWithoutVisitorInput = {
	where: Prisma.PageViewScalarWhereInput;
	data: Prisma.XOR<
		Prisma.PageViewUpdateManyMutationInput,
		Prisma.PageViewUncheckedUpdateManyWithoutVisitorInput
	>;
};

export type PageViewScalarWhereInput = {
	AND?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
	OR?: Prisma.PageViewScalarWhereInput[];
	NOT?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
	id?: Prisma.StringFilter<"PageView"> | string;
	visitorId?: Prisma.StringFilter<"PageView"> | string;
	url?: Prisma.StringFilter<"PageView"> | string;
	referrer?: Prisma.StringNullableFilter<"PageView"> | string | null;
	path?: Prisma.StringFilter<"PageView"> | string;
	createdAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"PageView"> | Date | string;
};

export type PageViewCreateManyVisitorInput = {
	id?: string;
	url: string;
	referrer?: string | null;
	path: string;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type PageViewUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewUncheckedUpdateWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewUncheckedUpdateManyWithoutVisitorInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	url?: Prisma.StringFieldUpdateOperationsInput | string;
	referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	path?: Prisma.StringFieldUpdateOperationsInput | string;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type PageViewSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		url?: boolean;
		referrer?: boolean;
		path?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["pageView"]
>;

export type PageViewSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		url?: boolean;
		referrer?: boolean;
		path?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["pageView"]
>;

export type PageViewSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		visitorId?: boolean;
		url?: boolean;
		referrer?: boolean;
		path?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["pageView"]
>;

export type PageViewSelectScalar = {
	id?: boolean;
	visitorId?: boolean;
	url?: boolean;
	referrer?: boolean;
	path?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
};

export type PageViewOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	"id" | "visitorId" | "url" | "referrer" | "path" | "createdAt" | "updatedAt",
	ExtArgs["result"]["pageView"]
>;
export type PageViewInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type PageViewIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};
export type PageViewIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	visitor?: boolean | Prisma.VisitorDefaultArgs<ExtArgs>;
};

export type $PageViewPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "PageView";
	objects: {
		visitor: Prisma.$VisitorPayload<ExtArgs>;
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			visitorId: string;
			url: string;
			referrer: string | null;
			path: string;
			createdAt: Date;
			updatedAt: Date;
		},
		ExtArgs["result"]["pageView"]
	>;
	composites: {};
};

export type PageViewGetPayload<
	S extends boolean | null | undefined | PageViewDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$PageViewPayload, S>;

export type PageViewCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<PageViewFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: PageViewCountAggregateInputType | true;
};

export interface PageViewDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["PageView"];
		meta: { name: "PageView" };
	};
	findUnique<T extends PageViewFindUniqueArgs>(
		args: Prisma.SelectSubset<T, PageViewFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends PageViewFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, PageViewFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends PageViewFindFirstArgs>(
		args?: Prisma.SelectSubset<T, PageViewFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends PageViewFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, PageViewFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends PageViewFindManyArgs>(
		args?: Prisma.SelectSubset<T, PageViewFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends PageViewCreateArgs>(
		args: Prisma.SelectSubset<T, PageViewCreateArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends PageViewCreateManyArgs>(
		args?: Prisma.SelectSubset<T, PageViewCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends PageViewCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, PageViewCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends PageViewDeleteArgs>(
		args: Prisma.SelectSubset<T, PageViewDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends PageViewUpdateArgs>(
		args: Prisma.SelectSubset<T, PageViewUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends PageViewDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, PageViewDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends PageViewUpdateManyArgs>(
		args: Prisma.SelectSubset<T, PageViewUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends PageViewUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, PageViewUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends PageViewUpsertArgs>(
		args: Prisma.SelectSubset<T, PageViewUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__PageViewClient<
		runtime.Types.Result.GetResult<
			Prisma.$PageViewPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends PageViewCountArgs>(
		args?: Prisma.Subset<T, PageViewCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], PageViewCountAggregateOutputType>
			: number
	>;

	aggregate<T extends PageViewAggregateArgs>(
		args: Prisma.Subset<T, PageViewAggregateArgs>,
	): Prisma.PrismaPromise<GetPageViewAggregateType<T>>;

	groupBy<
		T extends PageViewGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: PageViewGroupByArgs["orderBy"] }
			: { orderBy?: PageViewGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, PageViewGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetPageViewGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: PageViewFieldRefs;
}

export interface Prisma__PageViewClient<
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

export interface PageViewFieldRefs {
	readonly id: Prisma.FieldRef<"PageView", "String">;
	readonly visitorId: Prisma.FieldRef<"PageView", "String">;
	readonly url: Prisma.FieldRef<"PageView", "String">;
	readonly referrer: Prisma.FieldRef<"PageView", "String">;
	readonly path: Prisma.FieldRef<"PageView", "String">;
	readonly createdAt: Prisma.FieldRef<"PageView", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"PageView", "DateTime">;
}

export type PageViewFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	where: Prisma.PageViewWhereUniqueInput;
};

export type PageViewFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	where: Prisma.PageViewWhereUniqueInput;
};

export type PageViewFindFirstArgs<
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

export type PageViewFindFirstOrThrowArgs<
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

export type PageViewFindManyArgs<
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

export type PageViewCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PageViewCreateInput,
		Prisma.PageViewUncheckedCreateInput
	>;
};

export type PageViewCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.PageViewCreateManyInput | Prisma.PageViewCreateManyInput[];
	skipDuplicates?: boolean;
};

export type PageViewCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	data: Prisma.PageViewCreateManyInput | Prisma.PageViewCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.PageViewIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type PageViewUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PageViewUpdateInput,
		Prisma.PageViewUncheckedUpdateInput
	>;
	where: Prisma.PageViewWhereUniqueInput;
};

export type PageViewUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.PageViewUpdateManyMutationInput,
		Prisma.PageViewUncheckedUpdateManyInput
	>;
	where?: Prisma.PageViewWhereInput;
	limit?: number;
};

export type PageViewUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.PageViewUpdateManyMutationInput,
		Prisma.PageViewUncheckedUpdateManyInput
	>;
	where?: Prisma.PageViewWhereInput;
	limit?: number;
	include?: Prisma.PageViewIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type PageViewUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	where: Prisma.PageViewWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.PageViewCreateInput,
		Prisma.PageViewUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.PageViewUpdateInput,
		Prisma.PageViewUncheckedUpdateInput
	>;
};

export type PageViewDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
	where: Prisma.PageViewWhereUniqueInput;
};

export type PageViewDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.PageViewWhereInput;
	limit?: number;
};

export type PageViewDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.PageViewSelect<ExtArgs> | null;
	omit?: Prisma.PageViewOmit<ExtArgs> | null;
	include?: Prisma.PageViewInclude<ExtArgs> | null;
};
