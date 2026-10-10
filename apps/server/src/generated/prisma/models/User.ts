/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type UserModel =
	runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;

export type AggregateUser = {
	_count: UserCountAggregateOutputType | null;
	_avg: UserAvgAggregateOutputType | null;
	_sum: UserSumAggregateOutputType | null;
	_min: UserMinAggregateOutputType | null;
	_max: UserMaxAggregateOutputType | null;
};

export type UserAvgAggregateOutputType = {
	wordNumber: number | null;
	dayNumber: number | null;
};

export type UserSumAggregateOutputType = {
	wordNumber: number | null;
	dayNumber: number | null;
};

export type UserMinAggregateOutputType = {
	id: string | null;
	name: string | null;
	email: string | null;
	phone: string | null;
	address: string | null;
	password: string | null;
	avatar: string | null;
	bio: string | null;
	isTimingTask: boolean | null;
	timingTaskTime: string | null;
	wordNumber: number | null;
	dayNumber: number | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	lastLoginAt: Date | null;
};

export type UserMaxAggregateOutputType = {
	id: string | null;
	name: string | null;
	email: string | null;
	phone: string | null;
	address: string | null;
	password: string | null;
	avatar: string | null;
	bio: string | null;
	isTimingTask: boolean | null;
	timingTaskTime: string | null;
	wordNumber: number | null;
	dayNumber: number | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	lastLoginAt: Date | null;
};

export type UserCountAggregateOutputType = {
	id: number;
	name: number;
	email: number;
	phone: number;
	address: number;
	password: number;
	avatar: number;
	bio: number;
	isTimingTask: number;
	timingTaskTime: number;
	wordNumber: number;
	dayNumber: number;
	createdAt: number;
	updatedAt: number;
	lastLoginAt: number;
	_all: number;
};

export type UserAvgAggregateInputType = {
	wordNumber?: true;
	dayNumber?: true;
};

export type UserSumAggregateInputType = {
	wordNumber?: true;
	dayNumber?: true;
};

export type UserMinAggregateInputType = {
	id?: true;
	name?: true;
	email?: true;
	phone?: true;
	address?: true;
	password?: true;
	avatar?: true;
	bio?: true;
	isTimingTask?: true;
	timingTaskTime?: true;
	wordNumber?: true;
	dayNumber?: true;
	createdAt?: true;
	updatedAt?: true;
	lastLoginAt?: true;
};

export type UserMaxAggregateInputType = {
	id?: true;
	name?: true;
	email?: true;
	phone?: true;
	address?: true;
	password?: true;
	avatar?: true;
	bio?: true;
	isTimingTask?: true;
	timingTaskTime?: true;
	wordNumber?: true;
	dayNumber?: true;
	createdAt?: true;
	updatedAt?: true;
	lastLoginAt?: true;
};

export type UserCountAggregateInputType = {
	id?: true;
	name?: true;
	email?: true;
	phone?: true;
	address?: true;
	password?: true;
	avatar?: true;
	bio?: true;
	isTimingTask?: true;
	timingTaskTime?: true;
	wordNumber?: true;
	dayNumber?: true;
	createdAt?: true;
	updatedAt?: true;
	lastLoginAt?: true;
	_all?: true;
};

export type UserAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.UserWhereInput;
	orderBy?:
		| Prisma.UserOrderByWithRelationInput
		| Prisma.UserOrderByWithRelationInput[];
	cursor?: Prisma.UserWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | UserCountAggregateInputType;
	_avg?: UserAvgAggregateInputType;
	_sum?: UserSumAggregateInputType;
	_min?: UserMinAggregateInputType;
	_max?: UserMaxAggregateInputType;
};

export type GetUserAggregateType<T extends UserAggregateArgs> = {
	[P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateUser[P]>
		: Prisma.GetScalarType<T[P], AggregateUser[P]>;
};

export type UserGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.UserWhereInput;
	orderBy?:
		| Prisma.UserOrderByWithAggregationInput
		| Prisma.UserOrderByWithAggregationInput[];
	by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
	having?: Prisma.UserScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: UserCountAggregateInputType | true;
	_avg?: UserAvgAggregateInputType;
	_sum?: UserSumAggregateInputType;
	_min?: UserMinAggregateInputType;
	_max?: UserMaxAggregateInputType;
};

export type UserGroupByOutputType = {
	id: string;
	name: string;
	email: string | null;
	phone: string;
	address: string | null;
	password: string;
	avatar: string | null;
	bio: string | null;
	isTimingTask: boolean;
	timingTaskTime: string | null;
	wordNumber: number;
	dayNumber: number;
	createdAt: Date;
	updatedAt: Date;
	lastLoginAt: Date | null;
	_count: UserCountAggregateOutputType | null;
	_avg: UserAvgAggregateOutputType | null;
	_sum: UserSumAggregateOutputType | null;
	_min: UserMinAggregateOutputType | null;
	_max: UserMaxAggregateOutputType | null;
};

export type GetUserGroupByPayload<T extends UserGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<UserGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

export type UserWhereInput = {
	AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
	OR?: Prisma.UserWhereInput[];
	NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
	id?: Prisma.StringFilter<"User"> | string;
	name?: Prisma.StringFilter<"User"> | string;
	email?: Prisma.StringNullableFilter<"User"> | string | null;
	phone?: Prisma.StringFilter<"User"> | string;
	address?: Prisma.StringNullableFilter<"User"> | string | null;
	password?: Prisma.StringFilter<"User"> | string;
	avatar?: Prisma.StringNullableFilter<"User"> | string | null;
	bio?: Prisma.StringNullableFilter<"User"> | string | null;
	isTimingTask?: Prisma.BoolFilter<"User"> | boolean;
	timingTaskTime?: Prisma.StringNullableFilter<"User"> | string | null;
	wordNumber?: Prisma.IntFilter<"User"> | number;
	dayNumber?: Prisma.IntFilter<"User"> | number;
	createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
	lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
	wordBookRecords?: Prisma.WordBookRecordListRelationFilter;
	visitors?: Prisma.VisitorListRelationFilter;
};

export type UserOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	name?: Prisma.SortOrder;
	email?: Prisma.SortOrderInput | Prisma.SortOrder;
	phone?: Prisma.SortOrder;
	address?: Prisma.SortOrderInput | Prisma.SortOrder;
	password?: Prisma.SortOrder;
	avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
	bio?: Prisma.SortOrderInput | Prisma.SortOrder;
	isTimingTask?: Prisma.SortOrder;
	timingTaskTime?: Prisma.SortOrderInput | Prisma.SortOrder;
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
	wordBookRecords?: Prisma.WordBookRecordOrderByRelationAggregateInput;
	visitors?: Prisma.VisitorOrderByRelationAggregateInput;
};

export type UserWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		email?: string;
		phone?: string;
		AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
		OR?: Prisma.UserWhereInput[];
		NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
		name?: Prisma.StringFilter<"User"> | string;
		address?: Prisma.StringNullableFilter<"User"> | string | null;
		password?: Prisma.StringFilter<"User"> | string;
		avatar?: Prisma.StringNullableFilter<"User"> | string | null;
		bio?: Prisma.StringNullableFilter<"User"> | string | null;
		isTimingTask?: Prisma.BoolFilter<"User"> | boolean;
		timingTaskTime?: Prisma.StringNullableFilter<"User"> | string | null;
		wordNumber?: Prisma.IntFilter<"User"> | number;
		dayNumber?: Prisma.IntFilter<"User"> | number;
		createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
		lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
		wordBookRecords?: Prisma.WordBookRecordListRelationFilter;
		visitors?: Prisma.VisitorListRelationFilter;
	},
	"id" | "email" | "phone"
>;

export type UserOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	name?: Prisma.SortOrder;
	email?: Prisma.SortOrderInput | Prisma.SortOrder;
	phone?: Prisma.SortOrder;
	address?: Prisma.SortOrderInput | Prisma.SortOrder;
	password?: Prisma.SortOrder;
	avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
	bio?: Prisma.SortOrderInput | Prisma.SortOrder;
	isTimingTask?: Prisma.SortOrder;
	timingTaskTime?: Prisma.SortOrderInput | Prisma.SortOrder;
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
	_count?: Prisma.UserCountOrderByAggregateInput;
	_avg?: Prisma.UserAvgOrderByAggregateInput;
	_max?: Prisma.UserMaxOrderByAggregateInput;
	_min?: Prisma.UserMinOrderByAggregateInput;
	_sum?: Prisma.UserSumOrderByAggregateInput;
};

export type UserScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.UserScalarWhereWithAggregatesInput
		| Prisma.UserScalarWhereWithAggregatesInput[];
	OR?: Prisma.UserScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.UserScalarWhereWithAggregatesInput
		| Prisma.UserScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"User"> | string;
	name?: Prisma.StringWithAggregatesFilter<"User"> | string;
	email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
	phone?: Prisma.StringWithAggregatesFilter<"User"> | string;
	address?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
	password?: Prisma.StringWithAggregatesFilter<"User"> | string;
	avatar?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
	bio?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
	isTimingTask?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
	timingTaskTime?:
		| Prisma.StringNullableWithAggregatesFilter<"User">
		| string
		| null;
	wordNumber?: Prisma.IntWithAggregatesFilter<"User"> | number;
	dayNumber?: Prisma.IntWithAggregatesFilter<"User"> | number;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
	lastLoginAt?:
		| Prisma.DateTimeNullableWithAggregatesFilter<"User">
		| Date
		| string
		| null;
};

export type UserCreateInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	wordBookRecords?: Prisma.WordBookRecordCreateNestedManyWithoutUserInput;
	visitors?: Prisma.VisitorCreateNestedManyWithoutUserInput;
};

export type UserUncheckedCreateInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	wordBookRecords?: Prisma.WordBookRecordUncheckedCreateNestedManyWithoutUserInput;
	visitors?: Prisma.VisitorUncheckedCreateNestedManyWithoutUserInput;
};

export type UserUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	wordBookRecords?: Prisma.WordBookRecordUpdateManyWithoutUserNestedInput;
	visitors?: Prisma.VisitorUpdateManyWithoutUserNestedInput;
};

export type UserUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	wordBookRecords?: Prisma.WordBookRecordUncheckedUpdateManyWithoutUserNestedInput;
	visitors?: Prisma.VisitorUncheckedUpdateManyWithoutUserNestedInput;
};

export type UserCreateManyInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
};

export type UserUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
};

export type UserUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
};

export type UserCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	name?: Prisma.SortOrder;
	email?: Prisma.SortOrder;
	phone?: Prisma.SortOrder;
	address?: Prisma.SortOrder;
	password?: Prisma.SortOrder;
	avatar?: Prisma.SortOrder;
	bio?: Prisma.SortOrder;
	isTimingTask?: Prisma.SortOrder;
	timingTaskTime?: Prisma.SortOrder;
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	lastLoginAt?: Prisma.SortOrder;
};

export type UserAvgOrderByAggregateInput = {
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
};

export type UserMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	name?: Prisma.SortOrder;
	email?: Prisma.SortOrder;
	phone?: Prisma.SortOrder;
	address?: Prisma.SortOrder;
	password?: Prisma.SortOrder;
	avatar?: Prisma.SortOrder;
	bio?: Prisma.SortOrder;
	isTimingTask?: Prisma.SortOrder;
	timingTaskTime?: Prisma.SortOrder;
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	lastLoginAt?: Prisma.SortOrder;
};

export type UserMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	name?: Prisma.SortOrder;
	email?: Prisma.SortOrder;
	phone?: Prisma.SortOrder;
	address?: Prisma.SortOrder;
	password?: Prisma.SortOrder;
	avatar?: Prisma.SortOrder;
	bio?: Prisma.SortOrder;
	isTimingTask?: Prisma.SortOrder;
	timingTaskTime?: Prisma.SortOrder;
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	lastLoginAt?: Prisma.SortOrder;
};

export type UserSumOrderByAggregateInput = {
	wordNumber?: Prisma.SortOrder;
	dayNumber?: Prisma.SortOrder;
};

export type UserScalarRelationFilter = {
	is?: Prisma.UserWhereInput;
	isNot?: Prisma.UserWhereInput;
};

export type UserNullableScalarRelationFilter = {
	is?: Prisma.UserWhereInput | null;
	isNot?: Prisma.UserWhereInput | null;
};

export type StringFieldUpdateOperationsInput = {
	set?: string;
};

export type NullableStringFieldUpdateOperationsInput = {
	set?: string | null;
};

export type BoolFieldUpdateOperationsInput = {
	set?: boolean;
};

export type IntFieldUpdateOperationsInput = {
	set?: number;
	increment?: number;
	decrement?: number;
	multiply?: number;
	divide?: number;
};

export type DateTimeFieldUpdateOperationsInput = {
	set?: Date | string;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
	set?: Date | string | null;
};

export type UserCreateNestedOneWithoutWordBookRecordsInput = {
	create?: Prisma.XOR<
		Prisma.UserCreateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedCreateWithoutWordBookRecordsInput
	>;
	connectOrCreate?: Prisma.UserCreateOrConnectWithoutWordBookRecordsInput;
	connect?: Prisma.UserWhereUniqueInput;
};

export type UserUpdateOneRequiredWithoutWordBookRecordsNestedInput = {
	create?: Prisma.XOR<
		Prisma.UserCreateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedCreateWithoutWordBookRecordsInput
	>;
	connectOrCreate?: Prisma.UserCreateOrConnectWithoutWordBookRecordsInput;
	upsert?: Prisma.UserUpsertWithoutWordBookRecordsInput;
	connect?: Prisma.UserWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.UserUpdateToOneWithWhereWithoutWordBookRecordsInput,
			Prisma.UserUpdateWithoutWordBookRecordsInput
		>,
		Prisma.UserUncheckedUpdateWithoutWordBookRecordsInput
	>;
};

export type UserCreateNestedOneWithoutVisitorsInput = {
	create?: Prisma.XOR<
		Prisma.UserCreateWithoutVisitorsInput,
		Prisma.UserUncheckedCreateWithoutVisitorsInput
	>;
	connectOrCreate?: Prisma.UserCreateOrConnectWithoutVisitorsInput;
	connect?: Prisma.UserWhereUniqueInput;
};

export type UserUpdateOneWithoutVisitorsNestedInput = {
	create?: Prisma.XOR<
		Prisma.UserCreateWithoutVisitorsInput,
		Prisma.UserUncheckedCreateWithoutVisitorsInput
	>;
	connectOrCreate?: Prisma.UserCreateOrConnectWithoutVisitorsInput;
	upsert?: Prisma.UserUpsertWithoutVisitorsInput;
	disconnect?: Prisma.UserWhereInput | boolean;
	delete?: Prisma.UserWhereInput | boolean;
	connect?: Prisma.UserWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.UserUpdateToOneWithWhereWithoutVisitorsInput,
			Prisma.UserUpdateWithoutVisitorsInput
		>,
		Prisma.UserUncheckedUpdateWithoutVisitorsInput
	>;
};

export type UserCreateWithoutWordBookRecordsInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	visitors?: Prisma.VisitorCreateNestedManyWithoutUserInput;
};

export type UserUncheckedCreateWithoutWordBookRecordsInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	visitors?: Prisma.VisitorUncheckedCreateNestedManyWithoutUserInput;
};

export type UserCreateOrConnectWithoutWordBookRecordsInput = {
	where: Prisma.UserWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.UserCreateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedCreateWithoutWordBookRecordsInput
	>;
};

export type UserUpsertWithoutWordBookRecordsInput = {
	update: Prisma.XOR<
		Prisma.UserUpdateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedUpdateWithoutWordBookRecordsInput
	>;
	create: Prisma.XOR<
		Prisma.UserCreateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedCreateWithoutWordBookRecordsInput
	>;
	where?: Prisma.UserWhereInput;
};

export type UserUpdateToOneWithWhereWithoutWordBookRecordsInput = {
	where?: Prisma.UserWhereInput;
	data: Prisma.XOR<
		Prisma.UserUpdateWithoutWordBookRecordsInput,
		Prisma.UserUncheckedUpdateWithoutWordBookRecordsInput
	>;
};

export type UserUpdateWithoutWordBookRecordsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	visitors?: Prisma.VisitorUpdateManyWithoutUserNestedInput;
};

export type UserUncheckedUpdateWithoutWordBookRecordsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	visitors?: Prisma.VisitorUncheckedUpdateManyWithoutUserNestedInput;
};

export type UserCreateWithoutVisitorsInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	wordBookRecords?: Prisma.WordBookRecordCreateNestedManyWithoutUserInput;
};

export type UserUncheckedCreateWithoutVisitorsInput = {
	id?: string;
	name: string;
	email?: string | null;
	phone: string;
	address?: string | null;
	password: string;
	avatar?: string | null;
	bio?: string | null;
	isTimingTask?: boolean;
	timingTaskTime?: string | null;
	wordNumber?: number;
	dayNumber?: number;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	lastLoginAt?: Date | string | null;
	wordBookRecords?: Prisma.WordBookRecordUncheckedCreateNestedManyWithoutUserInput;
};

export type UserCreateOrConnectWithoutVisitorsInput = {
	where: Prisma.UserWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.UserCreateWithoutVisitorsInput,
		Prisma.UserUncheckedCreateWithoutVisitorsInput
	>;
};

export type UserUpsertWithoutVisitorsInput = {
	update: Prisma.XOR<
		Prisma.UserUpdateWithoutVisitorsInput,
		Prisma.UserUncheckedUpdateWithoutVisitorsInput
	>;
	create: Prisma.XOR<
		Prisma.UserCreateWithoutVisitorsInput,
		Prisma.UserUncheckedCreateWithoutVisitorsInput
	>;
	where?: Prisma.UserWhereInput;
};

export type UserUpdateToOneWithWhereWithoutVisitorsInput = {
	where?: Prisma.UserWhereInput;
	data: Prisma.XOR<
		Prisma.UserUpdateWithoutVisitorsInput,
		Prisma.UserUncheckedUpdateWithoutVisitorsInput
	>;
};

export type UserUpdateWithoutVisitorsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	wordBookRecords?: Prisma.WordBookRecordUpdateManyWithoutUserNestedInput;
};

export type UserUncheckedUpdateWithoutVisitorsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	name?: Prisma.StringFieldUpdateOperationsInput | string;
	email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	phone?: Prisma.StringFieldUpdateOperationsInput | string;
	address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	password?: Prisma.StringFieldUpdateOperationsInput | string;
	avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	isTimingTask?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	timingTaskTime?:
		| Prisma.NullableStringFieldUpdateOperationsInput
		| string
		| null;
	wordNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	dayNumber?: Prisma.IntFieldUpdateOperationsInput | number;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	lastLoginAt?:
		| Prisma.NullableDateTimeFieldUpdateOperationsInput
		| Date
		| string
		| null;
	wordBookRecords?: Prisma.WordBookRecordUncheckedUpdateManyWithoutUserNestedInput;
};

export type UserCountOutputType = {
	wordBookRecords: number;
	visitors: number;
};

export type UserCountOutputTypeSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	wordBookRecords?: boolean | UserCountOutputTypeCountWordBookRecordsArgs;
	visitors?: boolean | UserCountOutputTypeCountVisitorsArgs;
};

export type UserCountOutputTypeDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};

export type UserCountOutputTypeCountWordBookRecordsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookRecordWhereInput;
};

export type UserCountOutputTypeCountVisitorsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.VisitorWhereInput;
};

export type UserSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		name?: boolean;
		email?: boolean;
		phone?: boolean;
		address?: boolean;
		password?: boolean;
		avatar?: boolean;
		bio?: boolean;
		isTimingTask?: boolean;
		timingTaskTime?: boolean;
		wordNumber?: boolean;
		dayNumber?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		lastLoginAt?: boolean;
		wordBookRecords?: boolean | Prisma.User$wordBookRecordsArgs<ExtArgs>;
		visitors?: boolean | Prisma.User$visitorsArgs<ExtArgs>;
		_count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["user"]
>;

export type UserSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		name?: boolean;
		email?: boolean;
		phone?: boolean;
		address?: boolean;
		password?: boolean;
		avatar?: boolean;
		bio?: boolean;
		isTimingTask?: boolean;
		timingTaskTime?: boolean;
		wordNumber?: boolean;
		dayNumber?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		lastLoginAt?: boolean;
	},
	ExtArgs["result"]["user"]
>;

export type UserSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		name?: boolean;
		email?: boolean;
		phone?: boolean;
		address?: boolean;
		password?: boolean;
		avatar?: boolean;
		bio?: boolean;
		isTimingTask?: boolean;
		timingTaskTime?: boolean;
		wordNumber?: boolean;
		dayNumber?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		lastLoginAt?: boolean;
	},
	ExtArgs["result"]["user"]
>;

export type UserSelectScalar = {
	id?: boolean;
	name?: boolean;
	email?: boolean;
	phone?: boolean;
	address?: boolean;
	password?: boolean;
	avatar?: boolean;
	bio?: boolean;
	isTimingTask?: boolean;
	timingTaskTime?: boolean;
	wordNumber?: boolean;
	dayNumber?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
	lastLoginAt?: boolean;
};

export type UserOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	| "id"
	| "name"
	| "email"
	| "phone"
	| "address"
	| "password"
	| "avatar"
	| "bio"
	| "isTimingTask"
	| "timingTaskTime"
	| "wordNumber"
	| "dayNumber"
	| "createdAt"
	| "updatedAt"
	| "lastLoginAt",
	ExtArgs["result"]["user"]
>;
export type UserInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	wordBookRecords?: boolean | Prisma.User$wordBookRecordsArgs<ExtArgs>;
	visitors?: boolean | Prisma.User$visitorsArgs<ExtArgs>;
	_count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};
export type UserIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};

export type $UserPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "User";
	objects: {
		wordBookRecords: Prisma.$WordBookRecordPayload<ExtArgs>[];
		visitors: Prisma.$VisitorPayload<ExtArgs>[];
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			name: string;
			email: string | null;
			phone: string;
			address: string | null;
			password: string;
			avatar: string | null;
			bio: string | null;
			isTimingTask: boolean;
			timingTaskTime: string | null;
			wordNumber: number;
			dayNumber: number;
			createdAt: Date;
			updatedAt: Date;
			lastLoginAt: Date | null;
		},
		ExtArgs["result"]["user"]
	>;
	composites: {};
};

export type UserGetPayload<
	S extends boolean | null | undefined | UserDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;

export type UserCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: UserCountAggregateInputType | true;
};

export interface UserDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["User"];
		meta: { name: "User" };
	};
	findUnique<T extends UserFindUniqueArgs>(
		args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends UserFindFirstArgs>(
		args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends UserFindManyArgs>(
		args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends UserCreateArgs>(
		args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends UserCreateManyArgs>(
		args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends UserDeleteArgs>(
		args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends UserUpdateArgs>(
		args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends UserDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends UserUpdateManyArgs>(
		args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends UserUpsertArgs>(
		args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		runtime.Types.Result.GetResult<
			Prisma.$UserPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends UserCountArgs>(
		args?: Prisma.Subset<T, UserCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], UserCountAggregateOutputType>
			: number
	>;

	aggregate<T extends UserAggregateArgs>(
		args: Prisma.Subset<T, UserAggregateArgs>,
	): Prisma.PrismaPromise<GetUserAggregateType<T>>;

	groupBy<
		T extends UserGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: UserGroupByArgs["orderBy"] }
			: { orderBy?: UserGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetUserGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: UserFieldRefs;
}

export interface Prisma__UserClient<
	T,
	Null = never,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
	readonly [Symbol.toStringTag]: "PrismaPromise";
	wordBookRecords<T extends Prisma.User$wordBookRecordsArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.User$wordBookRecordsArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$WordBookRecordPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
		  >
		| Null
	>;
	visitors<T extends Prisma.User$visitorsArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.User$visitorsArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$VisitorPayload<ExtArgs>,
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

export interface UserFieldRefs {
	readonly id: Prisma.FieldRef<"User", "String">;
	readonly name: Prisma.FieldRef<"User", "String">;
	readonly email: Prisma.FieldRef<"User", "String">;
	readonly phone: Prisma.FieldRef<"User", "String">;
	readonly address: Prisma.FieldRef<"User", "String">;
	readonly password: Prisma.FieldRef<"User", "String">;
	readonly avatar: Prisma.FieldRef<"User", "String">;
	readonly bio: Prisma.FieldRef<"User", "String">;
	readonly isTimingTask: Prisma.FieldRef<"User", "Boolean">;
	readonly timingTaskTime: Prisma.FieldRef<"User", "String">;
	readonly wordNumber: Prisma.FieldRef<"User", "Int">;
	readonly dayNumber: Prisma.FieldRef<"User", "Int">;
	readonly createdAt: Prisma.FieldRef<"User", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"User", "DateTime">;
	readonly lastLoginAt: Prisma.FieldRef<"User", "DateTime">;
}

export type UserFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where: Prisma.UserWhereUniqueInput;
};

export type UserFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where: Prisma.UserWhereUniqueInput;
};

export type UserFindFirstArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where?: Prisma.UserWhereInput;
	orderBy?:
		| Prisma.UserOrderByWithRelationInput
		| Prisma.UserOrderByWithRelationInput[];
	cursor?: Prisma.UserWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};

export type UserFindFirstOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where?: Prisma.UserWhereInput;
	orderBy?:
		| Prisma.UserOrderByWithRelationInput
		| Prisma.UserOrderByWithRelationInput[];
	cursor?: Prisma.UserWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};

export type UserFindManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where?: Prisma.UserWhereInput;
	orderBy?:
		| Prisma.UserOrderByWithRelationInput
		| Prisma.UserOrderByWithRelationInput[];
	cursor?: Prisma.UserWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};

export type UserCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};

export type UserCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
	skipDuplicates?: boolean;
};

export type UserCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
	skipDuplicates?: boolean;
};

export type UserUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
	where: Prisma.UserWhereUniqueInput;
};

export type UserUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.UserUpdateManyMutationInput,
		Prisma.UserUncheckedUpdateManyInput
	>;
	where?: Prisma.UserWhereInput;
	limit?: number;
};

export type UserUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.UserUpdateManyMutationInput,
		Prisma.UserUncheckedUpdateManyInput
	>;
	where?: Prisma.UserWhereInput;
	limit?: number;
};

export type UserUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where: Prisma.UserWhereUniqueInput;
	create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
	update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};

export type UserDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
	where: Prisma.UserWhereUniqueInput;
};

export type UserDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.UserWhereInput;
	limit?: number;
};

export type User$wordBookRecordsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	where?: Prisma.WordBookRecordWhereInput;
	orderBy?:
		| Prisma.WordBookRecordOrderByWithRelationInput
		| Prisma.WordBookRecordOrderByWithRelationInput[];
	cursor?: Prisma.WordBookRecordWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?:
		| Prisma.WordBookRecordScalarFieldEnum
		| Prisma.WordBookRecordScalarFieldEnum[];
};

export type User$visitorsArgs<
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

export type UserDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.UserSelect<ExtArgs> | null;
	omit?: Prisma.UserOmit<ExtArgs> | null;
	include?: Prisma.UserInclude<ExtArgs> | null;
};
