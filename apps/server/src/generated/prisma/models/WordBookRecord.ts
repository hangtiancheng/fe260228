/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type WordBookRecordModel =
	runtime.Types.Result.DefaultSelection<Prisma.$WordBookRecordPayload>;

export type AggregateWordBookRecord = {
	_count: WordBookRecordCountAggregateOutputType | null;
	_min: WordBookRecordMinAggregateOutputType | null;
	_max: WordBookRecordMaxAggregateOutputType | null;
};

export type WordBookRecordMinAggregateOutputType = {
	id: string | null;
	wordId: string | null;
	isMaster: boolean | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	userId: string | null;
};

export type WordBookRecordMaxAggregateOutputType = {
	id: string | null;
	wordId: string | null;
	isMaster: boolean | null;
	createdAt: Date | null;
	updatedAt: Date | null;
	userId: string | null;
};

export type WordBookRecordCountAggregateOutputType = {
	id: number;
	wordId: number;
	isMaster: number;
	createdAt: number;
	updatedAt: number;
	userId: number;
	_all: number;
};

export type WordBookRecordMinAggregateInputType = {
	id?: true;
	wordId?: true;
	isMaster?: true;
	createdAt?: true;
	updatedAt?: true;
	userId?: true;
};

export type WordBookRecordMaxAggregateInputType = {
	id?: true;
	wordId?: true;
	isMaster?: true;
	createdAt?: true;
	updatedAt?: true;
	userId?: true;
};

export type WordBookRecordCountAggregateInputType = {
	id?: true;
	wordId?: true;
	isMaster?: true;
	createdAt?: true;
	updatedAt?: true;
	userId?: true;
	_all?: true;
};

export type WordBookRecordAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookRecordWhereInput;
	orderBy?:
		| Prisma.WordBookRecordOrderByWithRelationInput
		| Prisma.WordBookRecordOrderByWithRelationInput[];
	cursor?: Prisma.WordBookRecordWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | WordBookRecordCountAggregateInputType;
	_min?: WordBookRecordMinAggregateInputType;
	_max?: WordBookRecordMaxAggregateInputType;
};

export type GetWordBookRecordAggregateType<
	T extends WordBookRecordAggregateArgs,
> = {
	[P in keyof T & keyof AggregateWordBookRecord]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateWordBookRecord[P]>
		: Prisma.GetScalarType<T[P], AggregateWordBookRecord[P]>;
};

export type WordBookRecordGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookRecordWhereInput;
	orderBy?:
		| Prisma.WordBookRecordOrderByWithAggregationInput
		| Prisma.WordBookRecordOrderByWithAggregationInput[];
	by:
		| Prisma.WordBookRecordScalarFieldEnum[]
		| Prisma.WordBookRecordScalarFieldEnum;
	having?: Prisma.WordBookRecordScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: WordBookRecordCountAggregateInputType | true;
	_min?: WordBookRecordMinAggregateInputType;
	_max?: WordBookRecordMaxAggregateInputType;
};

export type WordBookRecordGroupByOutputType = {
	id: string;
	wordId: string;
	isMaster: boolean;
	createdAt: Date;
	updatedAt: Date;
	userId: string;
	_count: WordBookRecordCountAggregateOutputType | null;
	_min: WordBookRecordMinAggregateOutputType | null;
	_max: WordBookRecordMaxAggregateOutputType | null;
};

export type GetWordBookRecordGroupByPayload<
	T extends WordBookRecordGroupByArgs,
> = Prisma.PrismaPromise<
	Array<
		Prisma.PickEnumerable<WordBookRecordGroupByOutputType, T["by"]> & {
			[P in keyof T & keyof WordBookRecordGroupByOutputType]: P extends "_count"
				? T[P] extends boolean
					? number
					: Prisma.GetScalarType<T[P], WordBookRecordGroupByOutputType[P]>
				: Prisma.GetScalarType<T[P], WordBookRecordGroupByOutputType[P]>;
		}
	>
>;

export type WordBookRecordWhereInput = {
	AND?: Prisma.WordBookRecordWhereInput | Prisma.WordBookRecordWhereInput[];
	OR?: Prisma.WordBookRecordWhereInput[];
	NOT?: Prisma.WordBookRecordWhereInput | Prisma.WordBookRecordWhereInput[];
	id?: Prisma.StringFilter<"WordBookRecord"> | string;
	wordId?: Prisma.StringFilter<"WordBookRecord"> | string;
	isMaster?: Prisma.BoolFilter<"WordBookRecord"> | boolean;
	createdAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
	userId?: Prisma.StringFilter<"WordBookRecord"> | string;
	user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
	word?: Prisma.XOR<
		Prisma.WordBookScalarRelationFilter,
		Prisma.WordBookWhereInput
	>;
};

export type WordBookRecordOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	wordId?: Prisma.SortOrder;
	isMaster?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
	user?: Prisma.UserOrderByWithRelationInput;
	word?: Prisma.WordBookOrderByWithRelationInput;
};

export type WordBookRecordWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		userId_wordId?: Prisma.WordBookRecordUserIdWordIdCompoundUniqueInput;
		AND?: Prisma.WordBookRecordWhereInput | Prisma.WordBookRecordWhereInput[];
		OR?: Prisma.WordBookRecordWhereInput[];
		NOT?: Prisma.WordBookRecordWhereInput | Prisma.WordBookRecordWhereInput[];
		wordId?: Prisma.StringFilter<"WordBookRecord"> | string;
		isMaster?: Prisma.BoolFilter<"WordBookRecord"> | boolean;
		createdAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
		userId?: Prisma.StringFilter<"WordBookRecord"> | string;
		user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
		word?: Prisma.XOR<
			Prisma.WordBookScalarRelationFilter,
			Prisma.WordBookWhereInput
		>;
	},
	"id" | "userId_wordId"
>;

export type WordBookRecordOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	wordId?: Prisma.SortOrder;
	isMaster?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
	_count?: Prisma.WordBookRecordCountOrderByAggregateInput;
	_max?: Prisma.WordBookRecordMaxOrderByAggregateInput;
	_min?: Prisma.WordBookRecordMinOrderByAggregateInput;
};

export type WordBookRecordScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.WordBookRecordScalarWhereWithAggregatesInput
		| Prisma.WordBookRecordScalarWhereWithAggregatesInput[];
	OR?: Prisma.WordBookRecordScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.WordBookRecordScalarWhereWithAggregatesInput
		| Prisma.WordBookRecordScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"WordBookRecord"> | string;
	wordId?: Prisma.StringWithAggregatesFilter<"WordBookRecord"> | string;
	isMaster?: Prisma.BoolWithAggregatesFilter<"WordBookRecord"> | boolean;
	createdAt?:
		| Prisma.DateTimeWithAggregatesFilter<"WordBookRecord">
		| Date
		| string;
	updatedAt?:
		| Prisma.DateTimeWithAggregatesFilter<"WordBookRecord">
		| Date
		| string;
	userId?: Prisma.StringWithAggregatesFilter<"WordBookRecord"> | string;
};

export type WordBookRecordCreateInput = {
	id?: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	user: Prisma.UserCreateNestedOneWithoutWordBookRecordsInput;
	word: Prisma.WordBookCreateNestedOneWithoutWordBookRecordsInput;
};

export type WordBookRecordUncheckedCreateInput = {
	id?: string;
	wordId: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	userId: string;
};

export type WordBookRecordUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	user?: Prisma.UserUpdateOneRequiredWithoutWordBookRecordsNestedInput;
	word?: Prisma.WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput;
};

export type WordBookRecordUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	wordId?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	userId?: Prisma.StringFieldUpdateOperationsInput | string;
};

export type WordBookRecordCreateManyInput = {
	id?: string;
	wordId: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	userId: string;
};

export type WordBookRecordUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookRecordUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	wordId?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	userId?: Prisma.StringFieldUpdateOperationsInput | string;
};

export type WordBookRecordListRelationFilter = {
	every?: Prisma.WordBookRecordWhereInput;
	some?: Prisma.WordBookRecordWhereInput;
	none?: Prisma.WordBookRecordWhereInput;
};

export type WordBookRecordOrderByRelationAggregateInput = {
	_count?: Prisma.SortOrder;
};

export type WordBookRecordUserIdWordIdCompoundUniqueInput = {
	userId: string;
	wordId: string;
};

export type WordBookRecordCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	wordId?: Prisma.SortOrder;
	isMaster?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
};

export type WordBookRecordMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	wordId?: Prisma.SortOrder;
	isMaster?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
};

export type WordBookRecordMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	wordId?: Prisma.SortOrder;
	isMaster?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	userId?: Prisma.SortOrder;
};

export type WordBookRecordCreateNestedManyWithoutUserInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutUserInput,
				Prisma.WordBookRecordUncheckedCreateWithoutUserInput
		  >
		| Prisma.WordBookRecordCreateWithoutUserInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput[];
	createMany?: Prisma.WordBookRecordCreateManyUserInputEnvelope;
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
};

export type WordBookRecordUncheckedCreateNestedManyWithoutUserInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutUserInput,
				Prisma.WordBookRecordUncheckedCreateWithoutUserInput
		  >
		| Prisma.WordBookRecordCreateWithoutUserInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput[];
	createMany?: Prisma.WordBookRecordCreateManyUserInputEnvelope;
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
};

export type WordBookRecordUpdateManyWithoutUserNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutUserInput,
				Prisma.WordBookRecordUncheckedCreateWithoutUserInput
		  >
		| Prisma.WordBookRecordCreateWithoutUserInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput[];
	upsert?:
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutUserInput
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutUserInput[];
	createMany?: Prisma.WordBookRecordCreateManyUserInputEnvelope;
	set?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	disconnect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	delete?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	update?:
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutUserInput
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutUserInput[];
	updateMany?:
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutUserInput
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutUserInput[];
	deleteMany?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
};

export type WordBookRecordUncheckedUpdateManyWithoutUserNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutUserInput,
				Prisma.WordBookRecordUncheckedCreateWithoutUserInput
		  >
		| Prisma.WordBookRecordCreateWithoutUserInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutUserInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput
		| Prisma.WordBookRecordCreateOrConnectWithoutUserInput[];
	upsert?:
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutUserInput
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutUserInput[];
	createMany?: Prisma.WordBookRecordCreateManyUserInputEnvelope;
	set?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	disconnect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	delete?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	update?:
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutUserInput
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutUserInput[];
	updateMany?:
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutUserInput
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutUserInput[];
	deleteMany?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
};

export type WordBookRecordCreateNestedManyWithoutWordInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutWordInput,
				Prisma.WordBookRecordUncheckedCreateWithoutWordInput
		  >
		| Prisma.WordBookRecordCreateWithoutWordInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutWordInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput[];
	createMany?: Prisma.WordBookRecordCreateManyWordInputEnvelope;
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
};

export type WordBookRecordUncheckedCreateNestedManyWithoutWordInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutWordInput,
				Prisma.WordBookRecordUncheckedCreateWithoutWordInput
		  >
		| Prisma.WordBookRecordCreateWithoutWordInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutWordInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput[];
	createMany?: Prisma.WordBookRecordCreateManyWordInputEnvelope;
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
};

export type WordBookRecordUpdateManyWithoutWordNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutWordInput,
				Prisma.WordBookRecordUncheckedCreateWithoutWordInput
		  >
		| Prisma.WordBookRecordCreateWithoutWordInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutWordInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput[];
	upsert?:
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutWordInput
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutWordInput[];
	createMany?: Prisma.WordBookRecordCreateManyWordInputEnvelope;
	set?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	disconnect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	delete?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	update?:
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutWordInput
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutWordInput[];
	updateMany?:
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutWordInput
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutWordInput[];
	deleteMany?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
};

export type WordBookRecordUncheckedUpdateManyWithoutWordNestedInput = {
	create?:
		| Prisma.XOR<
				Prisma.WordBookRecordCreateWithoutWordInput,
				Prisma.WordBookRecordUncheckedCreateWithoutWordInput
		  >
		| Prisma.WordBookRecordCreateWithoutWordInput[]
		| Prisma.WordBookRecordUncheckedCreateWithoutWordInput[];
	connectOrCreate?:
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput
		| Prisma.WordBookRecordCreateOrConnectWithoutWordInput[];
	upsert?:
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutWordInput
		| Prisma.WordBookRecordUpsertWithWhereUniqueWithoutWordInput[];
	createMany?: Prisma.WordBookRecordCreateManyWordInputEnvelope;
	set?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	disconnect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	delete?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	connect?:
		| Prisma.WordBookRecordWhereUniqueInput
		| Prisma.WordBookRecordWhereUniqueInput[];
	update?:
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutWordInput
		| Prisma.WordBookRecordUpdateWithWhereUniqueWithoutWordInput[];
	updateMany?:
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutWordInput
		| Prisma.WordBookRecordUpdateManyWithWhereWithoutWordInput[];
	deleteMany?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
};

export type WordBookRecordCreateWithoutUserInput = {
	id?: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	word: Prisma.WordBookCreateNestedOneWithoutWordBookRecordsInput;
};

export type WordBookRecordUncheckedCreateWithoutUserInput = {
	id?: string;
	wordId: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type WordBookRecordCreateOrConnectWithoutUserInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.WordBookRecordCreateWithoutUserInput,
		Prisma.WordBookRecordUncheckedCreateWithoutUserInput
	>;
};

export type WordBookRecordCreateManyUserInputEnvelope = {
	data:
		| Prisma.WordBookRecordCreateManyUserInput
		| Prisma.WordBookRecordCreateManyUserInput[];
	skipDuplicates?: boolean;
};

export type WordBookRecordUpsertWithWhereUniqueWithoutUserInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.WordBookRecordUpdateWithoutUserInput,
		Prisma.WordBookRecordUncheckedUpdateWithoutUserInput
	>;
	create: Prisma.XOR<
		Prisma.WordBookRecordCreateWithoutUserInput,
		Prisma.WordBookRecordUncheckedCreateWithoutUserInput
	>;
};

export type WordBookRecordUpdateWithWhereUniqueWithoutUserInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateWithoutUserInput,
		Prisma.WordBookRecordUncheckedUpdateWithoutUserInput
	>;
};

export type WordBookRecordUpdateManyWithWhereWithoutUserInput = {
	where: Prisma.WordBookRecordScalarWhereInput;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateManyMutationInput,
		Prisma.WordBookRecordUncheckedUpdateManyWithoutUserInput
	>;
};

export type WordBookRecordScalarWhereInput = {
	AND?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
	OR?: Prisma.WordBookRecordScalarWhereInput[];
	NOT?:
		| Prisma.WordBookRecordScalarWhereInput
		| Prisma.WordBookRecordScalarWhereInput[];
	id?: Prisma.StringFilter<"WordBookRecord"> | string;
	wordId?: Prisma.StringFilter<"WordBookRecord"> | string;
	isMaster?: Prisma.BoolFilter<"WordBookRecord"> | boolean;
	createdAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"WordBookRecord"> | Date | string;
	userId?: Prisma.StringFilter<"WordBookRecord"> | string;
};

export type WordBookRecordCreateWithoutWordInput = {
	id?: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	user: Prisma.UserCreateNestedOneWithoutWordBookRecordsInput;
};

export type WordBookRecordUncheckedCreateWithoutWordInput = {
	id?: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	userId: string;
};

export type WordBookRecordCreateOrConnectWithoutWordInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.WordBookRecordCreateWithoutWordInput,
		Prisma.WordBookRecordUncheckedCreateWithoutWordInput
	>;
};

export type WordBookRecordCreateManyWordInputEnvelope = {
	data:
		| Prisma.WordBookRecordCreateManyWordInput
		| Prisma.WordBookRecordCreateManyWordInput[];
	skipDuplicates?: boolean;
};

export type WordBookRecordUpsertWithWhereUniqueWithoutWordInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	update: Prisma.XOR<
		Prisma.WordBookRecordUpdateWithoutWordInput,
		Prisma.WordBookRecordUncheckedUpdateWithoutWordInput
	>;
	create: Prisma.XOR<
		Prisma.WordBookRecordCreateWithoutWordInput,
		Prisma.WordBookRecordUncheckedCreateWithoutWordInput
	>;
};

export type WordBookRecordUpdateWithWhereUniqueWithoutWordInput = {
	where: Prisma.WordBookRecordWhereUniqueInput;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateWithoutWordInput,
		Prisma.WordBookRecordUncheckedUpdateWithoutWordInput
	>;
};

export type WordBookRecordUpdateManyWithWhereWithoutWordInput = {
	where: Prisma.WordBookRecordScalarWhereInput;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateManyMutationInput,
		Prisma.WordBookRecordUncheckedUpdateManyWithoutWordInput
	>;
};

export type WordBookRecordCreateManyUserInput = {
	id?: string;
	wordId: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type WordBookRecordUpdateWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	word?: Prisma.WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput;
};

export type WordBookRecordUncheckedUpdateWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	wordId?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookRecordUncheckedUpdateManyWithoutUserInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	wordId?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookRecordCreateManyWordInput = {
	id?: string;
	isMaster?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	userId: string;
};

export type WordBookRecordUpdateWithoutWordInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	user?: Prisma.UserUpdateOneRequiredWithoutWordBookRecordsNestedInput;
};

export type WordBookRecordUncheckedUpdateWithoutWordInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	userId?: Prisma.StringFieldUpdateOperationsInput | string;
};

export type WordBookRecordUncheckedUpdateManyWithoutWordInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	isMaster?: Prisma.BoolFieldUpdateOperationsInput | boolean;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	userId?: Prisma.StringFieldUpdateOperationsInput | string;
};

export type WordBookRecordSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		wordId?: boolean;
		isMaster?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
		user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
		word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["wordBookRecord"]
>;

export type WordBookRecordSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		wordId?: boolean;
		isMaster?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
		user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
		word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["wordBookRecord"]
>;

export type WordBookRecordSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		wordId?: boolean;
		isMaster?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		userId?: boolean;
		user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
		word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["wordBookRecord"]
>;

export type WordBookRecordSelectScalar = {
	id?: boolean;
	wordId?: boolean;
	isMaster?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
	userId?: boolean;
};

export type WordBookRecordOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	"id" | "wordId" | "isMaster" | "createdAt" | "updatedAt" | "userId",
	ExtArgs["result"]["wordBookRecord"]
>;
export type WordBookRecordInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
	word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
};
export type WordBookRecordIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
	word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
};
export type WordBookRecordIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
	word?: boolean | Prisma.WordBookDefaultArgs<ExtArgs>;
};

export type $WordBookRecordPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "WordBookRecord";
	objects: {
		user: Prisma.$UserPayload<ExtArgs>;
		word: Prisma.$WordBookPayload<ExtArgs>;
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			wordId: string;
			isMaster: boolean;
			createdAt: Date;
			updatedAt: Date;
			userId: string;
		},
		ExtArgs["result"]["wordBookRecord"]
	>;
	composites: {};
};

export type WordBookRecordGetPayload<
	S extends boolean | null | undefined | WordBookRecordDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$WordBookRecordPayload, S>;

export type WordBookRecordCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<
	WordBookRecordFindManyArgs,
	"select" | "include" | "distinct" | "omit"
> & {
	select?: WordBookRecordCountAggregateInputType | true;
};

export interface WordBookRecordDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["WordBookRecord"];
		meta: { name: "WordBookRecord" };
	};
	findUnique<T extends WordBookRecordFindUniqueArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends WordBookRecordFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends WordBookRecordFindFirstArgs>(
		args?: Prisma.SelectSubset<T, WordBookRecordFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends WordBookRecordFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, WordBookRecordFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends WordBookRecordFindManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookRecordFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends WordBookRecordCreateArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordCreateArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends WordBookRecordCreateManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookRecordCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends WordBookRecordCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<
			T,
			WordBookRecordCreateManyAndReturnArgs<ExtArgs>
		>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends WordBookRecordDeleteArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends WordBookRecordUpdateArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends WordBookRecordDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookRecordDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends WordBookRecordUpdateManyArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends WordBookRecordUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<
			T,
			WordBookRecordUpdateManyAndReturnArgs<ExtArgs>
		>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends WordBookRecordUpsertArgs>(
		args: Prisma.SelectSubset<T, WordBookRecordUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookRecordClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookRecordPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends WordBookRecordCountArgs>(
		args?: Prisma.Subset<T, WordBookRecordCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<
						T["select"],
						WordBookRecordCountAggregateOutputType
					>
			: number
	>;

	aggregate<T extends WordBookRecordAggregateArgs>(
		args: Prisma.Subset<T, WordBookRecordAggregateArgs>,
	): Prisma.PrismaPromise<GetWordBookRecordAggregateType<T>>;

	groupBy<
		T extends WordBookRecordGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: WordBookRecordGroupByArgs["orderBy"] }
			: { orderBy?: WordBookRecordGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, WordBookRecordGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetWordBookRecordGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: WordBookRecordFieldRefs;
}

export interface Prisma__WordBookRecordClient<
	T,
	Null = never,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
	readonly [Symbol.toStringTag]: "PrismaPromise";
	user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>,
	): Prisma.Prisma__UserClient<
		| runtime.Types.Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
		  >
		| Null,
		Null,
		ExtArgs,
		GlobalOmitOptions
	>;
	word<T extends Prisma.WordBookDefaultArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.WordBookDefaultArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		| runtime.Types.Result.GetResult<
				Prisma.$WordBookPayload<ExtArgs>,
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

export interface WordBookRecordFieldRefs {
	readonly id: Prisma.FieldRef<"WordBookRecord", "String">;
	readonly wordId: Prisma.FieldRef<"WordBookRecord", "String">;
	readonly isMaster: Prisma.FieldRef<"WordBookRecord", "Boolean">;
	readonly createdAt: Prisma.FieldRef<"WordBookRecord", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"WordBookRecord", "DateTime">;
	readonly userId: Prisma.FieldRef<"WordBookRecord", "String">;
}

export type WordBookRecordFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	where: Prisma.WordBookRecordWhereUniqueInput;
};

export type WordBookRecordFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	where: Prisma.WordBookRecordWhereUniqueInput;
};

export type WordBookRecordFindFirstArgs<
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

export type WordBookRecordFindFirstOrThrowArgs<
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

export type WordBookRecordFindManyArgs<
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

export type WordBookRecordCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookRecordCreateInput,
		Prisma.WordBookRecordUncheckedCreateInput
	>;
};

export type WordBookRecordCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data:
		| Prisma.WordBookRecordCreateManyInput
		| Prisma.WordBookRecordCreateManyInput[];
	skipDuplicates?: boolean;
};

export type WordBookRecordCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	data:
		| Prisma.WordBookRecordCreateManyInput
		| Prisma.WordBookRecordCreateManyInput[];
	skipDuplicates?: boolean;
	include?: Prisma.WordBookRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};

export type WordBookRecordUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateInput,
		Prisma.WordBookRecordUncheckedUpdateInput
	>;
	where: Prisma.WordBookRecordWhereUniqueInput;
};

export type WordBookRecordUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateManyMutationInput,
		Prisma.WordBookRecordUncheckedUpdateManyInput
	>;
	where?: Prisma.WordBookRecordWhereInput;
	limit?: number;
};

export type WordBookRecordUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookRecordUpdateManyMutationInput,
		Prisma.WordBookRecordUncheckedUpdateManyInput
	>;
	where?: Prisma.WordBookRecordWhereInput;
	limit?: number;
	include?: Prisma.WordBookRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};

export type WordBookRecordUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	where: Prisma.WordBookRecordWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.WordBookRecordCreateInput,
		Prisma.WordBookRecordUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.WordBookRecordUpdateInput,
		Prisma.WordBookRecordUncheckedUpdateInput
	>;
};

export type WordBookRecordDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
	where: Prisma.WordBookRecordWhereUniqueInput;
};

export type WordBookRecordDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookRecordWhereInput;
	limit?: number;
};

export type WordBookRecordDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookRecordSelect<ExtArgs> | null;
	omit?: Prisma.WordBookRecordOmit<ExtArgs> | null;
	include?: Prisma.WordBookRecordInclude<ExtArgs> | null;
};
