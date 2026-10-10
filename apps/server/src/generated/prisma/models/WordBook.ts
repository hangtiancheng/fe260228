/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck
import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";

export type WordBookModel =
	runtime.Types.Result.DefaultSelection<Prisma.$WordBookPayload>;

export type AggregateWordBook = {
	_count: WordBookCountAggregateOutputType | null;
	_min: WordBookMinAggregateOutputType | null;
	_max: WordBookMaxAggregateOutputType | null;
};

export type WordBookMinAggregateOutputType = {
	id: string | null;
	word: string | null;
	phonetic: string | null;
	definition: string | null;
	translation: string | null;
	pos: string | null;
	collins: string | null;
	oxford: string | null;
	tag: string | null;
	bnc: string | null;
	frq: string | null;
	exchange: string | null;
	gk: boolean | null;
	zk: boolean | null;
	gre: boolean | null;
	toefl: boolean | null;
	ielts: boolean | null;
	cet6: boolean | null;
	cet4: boolean | null;
	ky: boolean | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type WordBookMaxAggregateOutputType = {
	id: string | null;
	word: string | null;
	phonetic: string | null;
	definition: string | null;
	translation: string | null;
	pos: string | null;
	collins: string | null;
	oxford: string | null;
	tag: string | null;
	bnc: string | null;
	frq: string | null;
	exchange: string | null;
	gk: boolean | null;
	zk: boolean | null;
	gre: boolean | null;
	toefl: boolean | null;
	ielts: boolean | null;
	cet6: boolean | null;
	cet4: boolean | null;
	ky: boolean | null;
	createdAt: Date | null;
	updatedAt: Date | null;
};

export type WordBookCountAggregateOutputType = {
	id: number;
	word: number;
	phonetic: number;
	definition: number;
	translation: number;
	pos: number;
	collins: number;
	oxford: number;
	tag: number;
	bnc: number;
	frq: number;
	exchange: number;
	gk: number;
	zk: number;
	gre: number;
	toefl: number;
	ielts: number;
	cet6: number;
	cet4: number;
	ky: number;
	createdAt: number;
	updatedAt: number;
	_all: number;
};

export type WordBookMinAggregateInputType = {
	id?: true;
	word?: true;
	phonetic?: true;
	definition?: true;
	translation?: true;
	pos?: true;
	collins?: true;
	oxford?: true;
	tag?: true;
	bnc?: true;
	frq?: true;
	exchange?: true;
	gk?: true;
	zk?: true;
	gre?: true;
	toefl?: true;
	ielts?: true;
	cet6?: true;
	cet4?: true;
	ky?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type WordBookMaxAggregateInputType = {
	id?: true;
	word?: true;
	phonetic?: true;
	definition?: true;
	translation?: true;
	pos?: true;
	collins?: true;
	oxford?: true;
	tag?: true;
	bnc?: true;
	frq?: true;
	exchange?: true;
	gk?: true;
	zk?: true;
	gre?: true;
	toefl?: true;
	ielts?: true;
	cet6?: true;
	cet4?: true;
	ky?: true;
	createdAt?: true;
	updatedAt?: true;
};

export type WordBookCountAggregateInputType = {
	id?: true;
	word?: true;
	phonetic?: true;
	definition?: true;
	translation?: true;
	pos?: true;
	collins?: true;
	oxford?: true;
	tag?: true;
	bnc?: true;
	frq?: true;
	exchange?: true;
	gk?: true;
	zk?: true;
	gre?: true;
	toefl?: true;
	ielts?: true;
	cet6?: true;
	cet4?: true;
	ky?: true;
	createdAt?: true;
	updatedAt?: true;
	_all?: true;
};

export type WordBookAggregateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookWhereInput;
	orderBy?:
		| Prisma.WordBookOrderByWithRelationInput
		| Prisma.WordBookOrderByWithRelationInput[];
	cursor?: Prisma.WordBookWhereUniqueInput;
	take?: number;
	skip?: number;
	_count?: true | WordBookCountAggregateInputType;
	_min?: WordBookMinAggregateInputType;
	_max?: WordBookMaxAggregateInputType;
};

export type GetWordBookAggregateType<T extends WordBookAggregateArgs> = {
	[P in keyof T & keyof AggregateWordBook]: P extends "_count" | "count"
		? T[P] extends true
			? number
			: Prisma.GetScalarType<T[P], AggregateWordBook[P]>
		: Prisma.GetScalarType<T[P], AggregateWordBook[P]>;
};

export type WordBookGroupByArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookWhereInput;
	orderBy?:
		| Prisma.WordBookOrderByWithAggregationInput
		| Prisma.WordBookOrderByWithAggregationInput[];
	by: Prisma.WordBookScalarFieldEnum[] | Prisma.WordBookScalarFieldEnum;
	having?: Prisma.WordBookScalarWhereWithAggregatesInput;
	take?: number;
	skip?: number;
	_count?: WordBookCountAggregateInputType | true;
	_min?: WordBookMinAggregateInputType;
	_max?: WordBookMaxAggregateInputType;
};

export type WordBookGroupByOutputType = {
	id: string;
	word: string;
	phonetic: string | null;
	definition: string | null;
	translation: string | null;
	pos: string | null;
	collins: string | null;
	oxford: string | null;
	tag: string | null;
	bnc: string | null;
	frq: string | null;
	exchange: string | null;
	gk: boolean | null;
	zk: boolean | null;
	gre: boolean | null;
	toefl: boolean | null;
	ielts: boolean | null;
	cet6: boolean | null;
	cet4: boolean | null;
	ky: boolean | null;
	createdAt: Date;
	updatedAt: Date;
	_count: WordBookCountAggregateOutputType | null;
	_min: WordBookMinAggregateOutputType | null;
	_max: WordBookMaxAggregateOutputType | null;
};

export type GetWordBookGroupByPayload<T extends WordBookGroupByArgs> =
	Prisma.PrismaPromise<
		Array<
			Prisma.PickEnumerable<WordBookGroupByOutputType, T["by"]> & {
				[P in keyof T & keyof WordBookGroupByOutputType]: P extends "_count"
					? T[P] extends boolean
						? number
						: Prisma.GetScalarType<T[P], WordBookGroupByOutputType[P]>
					: Prisma.GetScalarType<T[P], WordBookGroupByOutputType[P]>;
			}
		>
	>;

export type WordBookWhereInput = {
	AND?: Prisma.WordBookWhereInput | Prisma.WordBookWhereInput[];
	OR?: Prisma.WordBookWhereInput[];
	NOT?: Prisma.WordBookWhereInput | Prisma.WordBookWhereInput[];
	id?: Prisma.StringFilter<"WordBook"> | string;
	word?: Prisma.StringFilter<"WordBook"> | string;
	phonetic?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	definition?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	translation?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	pos?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	collins?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	oxford?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	tag?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	bnc?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	frq?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	exchange?: Prisma.StringNullableFilter<"WordBook"> | string | null;
	gk?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	zk?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	gre?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	toefl?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	ielts?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	cet6?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	cet4?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	ky?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
	createdAt?: Prisma.DateTimeFilter<"WordBook"> | Date | string;
	updatedAt?: Prisma.DateTimeFilter<"WordBook"> | Date | string;
	wordBookRecords?: Prisma.WordBookRecordListRelationFilter;
};

export type WordBookOrderByWithRelationInput = {
	id?: Prisma.SortOrder;
	word?: Prisma.SortOrder;
	phonetic?: Prisma.SortOrderInput | Prisma.SortOrder;
	definition?: Prisma.SortOrderInput | Prisma.SortOrder;
	translation?: Prisma.SortOrderInput | Prisma.SortOrder;
	pos?: Prisma.SortOrderInput | Prisma.SortOrder;
	collins?: Prisma.SortOrderInput | Prisma.SortOrder;
	oxford?: Prisma.SortOrderInput | Prisma.SortOrder;
	tag?: Prisma.SortOrderInput | Prisma.SortOrder;
	bnc?: Prisma.SortOrderInput | Prisma.SortOrder;
	frq?: Prisma.SortOrderInput | Prisma.SortOrder;
	exchange?: Prisma.SortOrderInput | Prisma.SortOrder;
	gk?: Prisma.SortOrderInput | Prisma.SortOrder;
	zk?: Prisma.SortOrderInput | Prisma.SortOrder;
	gre?: Prisma.SortOrderInput | Prisma.SortOrder;
	toefl?: Prisma.SortOrderInput | Prisma.SortOrder;
	ielts?: Prisma.SortOrderInput | Prisma.SortOrder;
	cet6?: Prisma.SortOrderInput | Prisma.SortOrder;
	cet4?: Prisma.SortOrderInput | Prisma.SortOrder;
	ky?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	wordBookRecords?: Prisma.WordBookRecordOrderByRelationAggregateInput;
};

export type WordBookWhereUniqueInput = Prisma.AtLeast<
	{
		id?: string;
		AND?: Prisma.WordBookWhereInput | Prisma.WordBookWhereInput[];
		OR?: Prisma.WordBookWhereInput[];
		NOT?: Prisma.WordBookWhereInput | Prisma.WordBookWhereInput[];
		word?: Prisma.StringFilter<"WordBook"> | string;
		phonetic?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		definition?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		translation?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		pos?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		collins?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		oxford?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		tag?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		bnc?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		frq?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		exchange?: Prisma.StringNullableFilter<"WordBook"> | string | null;
		gk?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		zk?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		gre?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		toefl?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		ielts?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		cet6?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		cet4?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		ky?: Prisma.BoolNullableFilter<"WordBook"> | boolean | null;
		createdAt?: Prisma.DateTimeFilter<"WordBook"> | Date | string;
		updatedAt?: Prisma.DateTimeFilter<"WordBook"> | Date | string;
		wordBookRecords?: Prisma.WordBookRecordListRelationFilter;
	},
	"id"
>;

export type WordBookOrderByWithAggregationInput = {
	id?: Prisma.SortOrder;
	word?: Prisma.SortOrder;
	phonetic?: Prisma.SortOrderInput | Prisma.SortOrder;
	definition?: Prisma.SortOrderInput | Prisma.SortOrder;
	translation?: Prisma.SortOrderInput | Prisma.SortOrder;
	pos?: Prisma.SortOrderInput | Prisma.SortOrder;
	collins?: Prisma.SortOrderInput | Prisma.SortOrder;
	oxford?: Prisma.SortOrderInput | Prisma.SortOrder;
	tag?: Prisma.SortOrderInput | Prisma.SortOrder;
	bnc?: Prisma.SortOrderInput | Prisma.SortOrder;
	frq?: Prisma.SortOrderInput | Prisma.SortOrder;
	exchange?: Prisma.SortOrderInput | Prisma.SortOrder;
	gk?: Prisma.SortOrderInput | Prisma.SortOrder;
	zk?: Prisma.SortOrderInput | Prisma.SortOrder;
	gre?: Prisma.SortOrderInput | Prisma.SortOrder;
	toefl?: Prisma.SortOrderInput | Prisma.SortOrder;
	ielts?: Prisma.SortOrderInput | Prisma.SortOrder;
	cet6?: Prisma.SortOrderInput | Prisma.SortOrder;
	cet4?: Prisma.SortOrderInput | Prisma.SortOrder;
	ky?: Prisma.SortOrderInput | Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
	_count?: Prisma.WordBookCountOrderByAggregateInput;
	_max?: Prisma.WordBookMaxOrderByAggregateInput;
	_min?: Prisma.WordBookMinOrderByAggregateInput;
};

export type WordBookScalarWhereWithAggregatesInput = {
	AND?:
		| Prisma.WordBookScalarWhereWithAggregatesInput
		| Prisma.WordBookScalarWhereWithAggregatesInput[];
	OR?: Prisma.WordBookScalarWhereWithAggregatesInput[];
	NOT?:
		| Prisma.WordBookScalarWhereWithAggregatesInput
		| Prisma.WordBookScalarWhereWithAggregatesInput[];
	id?: Prisma.StringWithAggregatesFilter<"WordBook"> | string;
	word?: Prisma.StringWithAggregatesFilter<"WordBook"> | string;
	phonetic?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	definition?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	translation?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	pos?: Prisma.StringNullableWithAggregatesFilter<"WordBook"> | string | null;
	collins?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	oxford?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	tag?: Prisma.StringNullableWithAggregatesFilter<"WordBook"> | string | null;
	bnc?: Prisma.StringNullableWithAggregatesFilter<"WordBook"> | string | null;
	frq?: Prisma.StringNullableWithAggregatesFilter<"WordBook"> | string | null;
	exchange?:
		| Prisma.StringNullableWithAggregatesFilter<"WordBook">
		| string
		| null;
	gk?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	zk?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	gre?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	toefl?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	ielts?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	cet6?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	cet4?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	ky?: Prisma.BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null;
	createdAt?: Prisma.DateTimeWithAggregatesFilter<"WordBook"> | Date | string;
	updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WordBook"> | Date | string;
};

export type WordBookCreateInput = {
	id?: string;
	word: string;
	phonetic?: string | null;
	definition?: string | null;
	translation?: string | null;
	pos?: string | null;
	collins?: string | null;
	oxford?: string | null;
	tag?: string | null;
	bnc?: string | null;
	frq?: string | null;
	exchange?: string | null;
	gk?: boolean | null;
	zk?: boolean | null;
	gre?: boolean | null;
	toefl?: boolean | null;
	ielts?: boolean | null;
	cet6?: boolean | null;
	cet4?: boolean | null;
	ky?: boolean | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	wordBookRecords?: Prisma.WordBookRecordCreateNestedManyWithoutWordInput;
};

export type WordBookUncheckedCreateInput = {
	id?: string;
	word: string;
	phonetic?: string | null;
	definition?: string | null;
	translation?: string | null;
	pos?: string | null;
	collins?: string | null;
	oxford?: string | null;
	tag?: string | null;
	bnc?: string | null;
	frq?: string | null;
	exchange?: string | null;
	gk?: boolean | null;
	zk?: boolean | null;
	gre?: boolean | null;
	toefl?: boolean | null;
	ielts?: boolean | null;
	cet6?: boolean | null;
	cet4?: boolean | null;
	ky?: boolean | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
	wordBookRecords?: Prisma.WordBookRecordUncheckedCreateNestedManyWithoutWordInput;
};

export type WordBookUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	wordBookRecords?: Prisma.WordBookRecordUpdateManyWithoutWordNestedInput;
};

export type WordBookUncheckedUpdateInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	wordBookRecords?: Prisma.WordBookRecordUncheckedUpdateManyWithoutWordNestedInput;
};

export type WordBookCreateManyInput = {
	id?: string;
	word: string;
	phonetic?: string | null;
	definition?: string | null;
	translation?: string | null;
	pos?: string | null;
	collins?: string | null;
	oxford?: string | null;
	tag?: string | null;
	bnc?: string | null;
	frq?: string | null;
	exchange?: string | null;
	gk?: boolean | null;
	zk?: boolean | null;
	gre?: boolean | null;
	toefl?: boolean | null;
	ielts?: boolean | null;
	cet6?: boolean | null;
	cet4?: boolean | null;
	ky?: boolean | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type WordBookUpdateManyMutationInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookUncheckedUpdateManyInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookScalarRelationFilter = {
	is?: Prisma.WordBookWhereInput;
	isNot?: Prisma.WordBookWhereInput;
};

export type WordBookCountOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	word?: Prisma.SortOrder;
	phonetic?: Prisma.SortOrder;
	definition?: Prisma.SortOrder;
	translation?: Prisma.SortOrder;
	pos?: Prisma.SortOrder;
	collins?: Prisma.SortOrder;
	oxford?: Prisma.SortOrder;
	tag?: Prisma.SortOrder;
	bnc?: Prisma.SortOrder;
	frq?: Prisma.SortOrder;
	exchange?: Prisma.SortOrder;
	gk?: Prisma.SortOrder;
	zk?: Prisma.SortOrder;
	gre?: Prisma.SortOrder;
	toefl?: Prisma.SortOrder;
	ielts?: Prisma.SortOrder;
	cet6?: Prisma.SortOrder;
	cet4?: Prisma.SortOrder;
	ky?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type WordBookMaxOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	word?: Prisma.SortOrder;
	phonetic?: Prisma.SortOrder;
	definition?: Prisma.SortOrder;
	translation?: Prisma.SortOrder;
	pos?: Prisma.SortOrder;
	collins?: Prisma.SortOrder;
	oxford?: Prisma.SortOrder;
	tag?: Prisma.SortOrder;
	bnc?: Prisma.SortOrder;
	frq?: Prisma.SortOrder;
	exchange?: Prisma.SortOrder;
	gk?: Prisma.SortOrder;
	zk?: Prisma.SortOrder;
	gre?: Prisma.SortOrder;
	toefl?: Prisma.SortOrder;
	ielts?: Prisma.SortOrder;
	cet6?: Prisma.SortOrder;
	cet4?: Prisma.SortOrder;
	ky?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type WordBookMinOrderByAggregateInput = {
	id?: Prisma.SortOrder;
	word?: Prisma.SortOrder;
	phonetic?: Prisma.SortOrder;
	definition?: Prisma.SortOrder;
	translation?: Prisma.SortOrder;
	pos?: Prisma.SortOrder;
	collins?: Prisma.SortOrder;
	oxford?: Prisma.SortOrder;
	tag?: Prisma.SortOrder;
	bnc?: Prisma.SortOrder;
	frq?: Prisma.SortOrder;
	exchange?: Prisma.SortOrder;
	gk?: Prisma.SortOrder;
	zk?: Prisma.SortOrder;
	gre?: Prisma.SortOrder;
	toefl?: Prisma.SortOrder;
	ielts?: Prisma.SortOrder;
	cet6?: Prisma.SortOrder;
	cet4?: Prisma.SortOrder;
	ky?: Prisma.SortOrder;
	createdAt?: Prisma.SortOrder;
	updatedAt?: Prisma.SortOrder;
};

export type WordBookCreateNestedOneWithoutWordBookRecordsInput = {
	create?: Prisma.XOR<
		Prisma.WordBookCreateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedCreateWithoutWordBookRecordsInput
	>;
	connectOrCreate?: Prisma.WordBookCreateOrConnectWithoutWordBookRecordsInput;
	connect?: Prisma.WordBookWhereUniqueInput;
};

export type WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput = {
	create?: Prisma.XOR<
		Prisma.WordBookCreateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedCreateWithoutWordBookRecordsInput
	>;
	connectOrCreate?: Prisma.WordBookCreateOrConnectWithoutWordBookRecordsInput;
	upsert?: Prisma.WordBookUpsertWithoutWordBookRecordsInput;
	connect?: Prisma.WordBookWhereUniqueInput;
	update?: Prisma.XOR<
		Prisma.XOR<
			Prisma.WordBookUpdateToOneWithWhereWithoutWordBookRecordsInput,
			Prisma.WordBookUpdateWithoutWordBookRecordsInput
		>,
		Prisma.WordBookUncheckedUpdateWithoutWordBookRecordsInput
	>;
};

export type NullableBoolFieldUpdateOperationsInput = {
	set?: boolean | null;
};

export type WordBookCreateWithoutWordBookRecordsInput = {
	id?: string;
	word: string;
	phonetic?: string | null;
	definition?: string | null;
	translation?: string | null;
	pos?: string | null;
	collins?: string | null;
	oxford?: string | null;
	tag?: string | null;
	bnc?: string | null;
	frq?: string | null;
	exchange?: string | null;
	gk?: boolean | null;
	zk?: boolean | null;
	gre?: boolean | null;
	toefl?: boolean | null;
	ielts?: boolean | null;
	cet6?: boolean | null;
	cet4?: boolean | null;
	ky?: boolean | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type WordBookUncheckedCreateWithoutWordBookRecordsInput = {
	id?: string;
	word: string;
	phonetic?: string | null;
	definition?: string | null;
	translation?: string | null;
	pos?: string | null;
	collins?: string | null;
	oxford?: string | null;
	tag?: string | null;
	bnc?: string | null;
	frq?: string | null;
	exchange?: string | null;
	gk?: boolean | null;
	zk?: boolean | null;
	gre?: boolean | null;
	toefl?: boolean | null;
	ielts?: boolean | null;
	cet6?: boolean | null;
	cet4?: boolean | null;
	ky?: boolean | null;
	createdAt?: Date | string;
	updatedAt?: Date | string;
};

export type WordBookCreateOrConnectWithoutWordBookRecordsInput = {
	where: Prisma.WordBookWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.WordBookCreateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedCreateWithoutWordBookRecordsInput
	>;
};

export type WordBookUpsertWithoutWordBookRecordsInput = {
	update: Prisma.XOR<
		Prisma.WordBookUpdateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedUpdateWithoutWordBookRecordsInput
	>;
	create: Prisma.XOR<
		Prisma.WordBookCreateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedCreateWithoutWordBookRecordsInput
	>;
	where?: Prisma.WordBookWhereInput;
};

export type WordBookUpdateToOneWithWhereWithoutWordBookRecordsInput = {
	where?: Prisma.WordBookWhereInput;
	data: Prisma.XOR<
		Prisma.WordBookUpdateWithoutWordBookRecordsInput,
		Prisma.WordBookUncheckedUpdateWithoutWordBookRecordsInput
	>;
};

export type WordBookUpdateWithoutWordBookRecordsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookUncheckedUpdateWithoutWordBookRecordsInput = {
	id?: Prisma.StringFieldUpdateOperationsInput | string;
	word?: Prisma.StringFieldUpdateOperationsInput | string;
	phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	definition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	translation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	pos?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	collins?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	oxford?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	tag?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	bnc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	frq?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	exchange?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
	gk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	zk?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	gre?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	toefl?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ielts?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet6?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	cet4?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	ky?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
	createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
	updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};

export type WordBookCountOutputType = {
	wordBookRecords: number;
};

export type WordBookCountOutputTypeSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	wordBookRecords?: boolean | WordBookCountOutputTypeCountWordBookRecordsArgs;
};

export type WordBookCountOutputTypeDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookCountOutputTypeSelect<ExtArgs> | null;
};

export type WordBookCountOutputTypeCountWordBookRecordsArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookRecordWhereInput;
};

export type WordBookSelect<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		word?: boolean;
		phonetic?: boolean;
		definition?: boolean;
		translation?: boolean;
		pos?: boolean;
		collins?: boolean;
		oxford?: boolean;
		tag?: boolean;
		bnc?: boolean;
		frq?: boolean;
		exchange?: boolean;
		gk?: boolean;
		zk?: boolean;
		gre?: boolean;
		toefl?: boolean;
		ielts?: boolean;
		cet6?: boolean;
		cet4?: boolean;
		ky?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		wordBookRecords?: boolean | Prisma.WordBook$wordBookRecordsArgs<ExtArgs>;
		_count?: boolean | Prisma.WordBookCountOutputTypeDefaultArgs<ExtArgs>;
	},
	ExtArgs["result"]["wordBook"]
>;

export type WordBookSelectCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		word?: boolean;
		phonetic?: boolean;
		definition?: boolean;
		translation?: boolean;
		pos?: boolean;
		collins?: boolean;
		oxford?: boolean;
		tag?: boolean;
		bnc?: boolean;
		frq?: boolean;
		exchange?: boolean;
		gk?: boolean;
		zk?: boolean;
		gre?: boolean;
		toefl?: boolean;
		ielts?: boolean;
		cet6?: boolean;
		cet4?: boolean;
		ky?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	},
	ExtArgs["result"]["wordBook"]
>;

export type WordBookSelectUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
	{
		id?: boolean;
		word?: boolean;
		phonetic?: boolean;
		definition?: boolean;
		translation?: boolean;
		pos?: boolean;
		collins?: boolean;
		oxford?: boolean;
		tag?: boolean;
		bnc?: boolean;
		frq?: boolean;
		exchange?: boolean;
		gk?: boolean;
		zk?: boolean;
		gre?: boolean;
		toefl?: boolean;
		ielts?: boolean;
		cet6?: boolean;
		cet4?: boolean;
		ky?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	},
	ExtArgs["result"]["wordBook"]
>;

export type WordBookSelectScalar = {
	id?: boolean;
	word?: boolean;
	phonetic?: boolean;
	definition?: boolean;
	translation?: boolean;
	pos?: boolean;
	collins?: boolean;
	oxford?: boolean;
	tag?: boolean;
	bnc?: boolean;
	frq?: boolean;
	exchange?: boolean;
	gk?: boolean;
	zk?: boolean;
	gre?: boolean;
	toefl?: boolean;
	ielts?: boolean;
	cet6?: boolean;
	cet4?: boolean;
	ky?: boolean;
	createdAt?: boolean;
	updatedAt?: boolean;
};

export type WordBookOmit<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
	| "id"
	| "word"
	| "phonetic"
	| "definition"
	| "translation"
	| "pos"
	| "collins"
	| "oxford"
	| "tag"
	| "bnc"
	| "frq"
	| "exchange"
	| "gk"
	| "zk"
	| "gre"
	| "toefl"
	| "ielts"
	| "cet6"
	| "cet4"
	| "ky"
	| "createdAt"
	| "updatedAt",
	ExtArgs["result"]["wordBook"]
>;
export type WordBookInclude<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	wordBookRecords?: boolean | Prisma.WordBook$wordBookRecordsArgs<ExtArgs>;
	_count?: boolean | Prisma.WordBookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WordBookIncludeCreateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};
export type WordBookIncludeUpdateManyAndReturn<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};

export type $WordBookPayload<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	name: "WordBook";
	objects: {
		wordBookRecords: Prisma.$WordBookRecordPayload<ExtArgs>[];
	};
	scalars: runtime.Types.Extensions.GetPayloadResult<
		{
			id: string;
			word: string;
			phonetic: string | null;
			definition: string | null;
			translation: string | null;
			pos: string | null;
			collins: string | null;
			oxford: string | null;
			tag: string | null;
			bnc: string | null;
			frq: string | null;
			exchange: string | null;
			gk: boolean | null;
			zk: boolean | null;
			gre: boolean | null;
			toefl: boolean | null;
			ielts: boolean | null;
			cet6: boolean | null;
			cet4: boolean | null;
			ky: boolean | null;
			createdAt: Date;
			updatedAt: Date;
		},
		ExtArgs["result"]["wordBook"]
	>;
	composites: {};
};

export type WordBookGetPayload<
	S extends boolean | null | undefined | WordBookDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$WordBookPayload, S>;

export type WordBookCountArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<WordBookFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
	select?: WordBookCountAggregateInputType | true;
};

export interface WordBookDelegate<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> {
	[K: symbol]: {
		types: Prisma.TypeMap<ExtArgs>["model"]["WordBook"];
		meta: { name: "WordBook" };
	};
	findUnique<T extends WordBookFindUniqueArgs>(
		args: Prisma.SelectSubset<T, WordBookFindUniqueArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"findUnique",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findUniqueOrThrow<T extends WordBookFindUniqueOrThrowArgs>(
		args: Prisma.SelectSubset<T, WordBookFindUniqueOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"findUniqueOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirst<T extends WordBookFindFirstArgs>(
		args?: Prisma.SelectSubset<T, WordBookFindFirstArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"findFirst",
			GlobalOmitOptions
		> | null,
		null,
		ExtArgs,
		GlobalOmitOptions
	>;

	findFirstOrThrow<T extends WordBookFindFirstOrThrowArgs>(
		args?: Prisma.SelectSubset<T, WordBookFindFirstOrThrowArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"findFirstOrThrow",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	findMany<T extends WordBookFindManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookFindManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"findMany",
			GlobalOmitOptions
		>
	>;

	create<T extends WordBookCreateArgs>(
		args: Prisma.SelectSubset<T, WordBookCreateArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"create",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	createMany<T extends WordBookCreateManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookCreateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	createManyAndReturn<T extends WordBookCreateManyAndReturnArgs>(
		args?: Prisma.SelectSubset<T, WordBookCreateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"createManyAndReturn",
			GlobalOmitOptions
		>
	>;

	delete<T extends WordBookDeleteArgs>(
		args: Prisma.SelectSubset<T, WordBookDeleteArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"delete",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	update<T extends WordBookUpdateArgs>(
		args: Prisma.SelectSubset<T, WordBookUpdateArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"update",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	deleteMany<T extends WordBookDeleteManyArgs>(
		args?: Prisma.SelectSubset<T, WordBookDeleteManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateMany<T extends WordBookUpdateManyArgs>(
		args: Prisma.SelectSubset<T, WordBookUpdateManyArgs<ExtArgs>>,
	): Prisma.PrismaPromise<Prisma.BatchPayload>;

	updateManyAndReturn<T extends WordBookUpdateManyAndReturnArgs>(
		args: Prisma.SelectSubset<T, WordBookUpdateManyAndReturnArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"updateManyAndReturn",
			GlobalOmitOptions
		>
	>;

	upsert<T extends WordBookUpsertArgs>(
		args: Prisma.SelectSubset<T, WordBookUpsertArgs<ExtArgs>>,
	): Prisma.Prisma__WordBookClient<
		runtime.Types.Result.GetResult<
			Prisma.$WordBookPayload<ExtArgs>,
			T,
			"upsert",
			GlobalOmitOptions
		>,
		never,
		ExtArgs,
		GlobalOmitOptions
	>;

	count<T extends WordBookCountArgs>(
		args?: Prisma.Subset<T, WordBookCountArgs>,
	): Prisma.PrismaPromise<
		T extends runtime.Types.Utils.Record<"select", any>
			? T["select"] extends true
				? number
				: Prisma.GetScalarType<T["select"], WordBookCountAggregateOutputType>
			: number
	>;

	aggregate<T extends WordBookAggregateArgs>(
		args: Prisma.Subset<T, WordBookAggregateArgs>,
	): Prisma.PrismaPromise<GetWordBookAggregateType<T>>;

	groupBy<
		T extends WordBookGroupByArgs,
		HasSelectOrTake extends Prisma.Or<
			Prisma.Extends<"skip", Prisma.Keys<T>>,
			Prisma.Extends<"take", Prisma.Keys<T>>
		>,
		OrderByArg extends Prisma.True extends HasSelectOrTake
			? { orderBy: WordBookGroupByArgs["orderBy"] }
			: { orderBy?: WordBookGroupByArgs["orderBy"] },
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
		args: Prisma.SubsetIntersection<T, WordBookGroupByArgs, OrderByArg> &
			InputErrors,
	): {} extends InputErrors
		? GetWordBookGroupByPayload<T>
		: Prisma.PrismaPromise<InputErrors>;
	readonly fields: WordBookFieldRefs;
}

export interface Prisma__WordBookClient<
	T,
	Null = never,
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
	GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
	readonly [Symbol.toStringTag]: "PrismaPromise";
	wordBookRecords<T extends Prisma.WordBook$wordBookRecordsArgs<ExtArgs> = {}>(
		args?: Prisma.Subset<T, Prisma.WordBook$wordBookRecordsArgs<ExtArgs>>,
	): Prisma.PrismaPromise<
		| runtime.Types.Result.GetResult<
				Prisma.$WordBookRecordPayload<ExtArgs>,
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

export interface WordBookFieldRefs {
	readonly id: Prisma.FieldRef<"WordBook", "String">;
	readonly word: Prisma.FieldRef<"WordBook", "String">;
	readonly phonetic: Prisma.FieldRef<"WordBook", "String">;
	readonly definition: Prisma.FieldRef<"WordBook", "String">;
	readonly translation: Prisma.FieldRef<"WordBook", "String">;
	readonly pos: Prisma.FieldRef<"WordBook", "String">;
	readonly collins: Prisma.FieldRef<"WordBook", "String">;
	readonly oxford: Prisma.FieldRef<"WordBook", "String">;
	readonly tag: Prisma.FieldRef<"WordBook", "String">;
	readonly bnc: Prisma.FieldRef<"WordBook", "String">;
	readonly frq: Prisma.FieldRef<"WordBook", "String">;
	readonly exchange: Prisma.FieldRef<"WordBook", "String">;
	readonly gk: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly zk: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly gre: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly toefl: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly ielts: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly cet6: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly cet4: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly ky: Prisma.FieldRef<"WordBook", "Boolean">;
	readonly createdAt: Prisma.FieldRef<"WordBook", "DateTime">;
	readonly updatedAt: Prisma.FieldRef<"WordBook", "DateTime">;
}

export type WordBookFindUniqueArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where: Prisma.WordBookWhereUniqueInput;
};

export type WordBookFindUniqueOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where: Prisma.WordBookWhereUniqueInput;
};

export type WordBookFindFirstArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where?: Prisma.WordBookWhereInput;
	orderBy?:
		| Prisma.WordBookOrderByWithRelationInput
		| Prisma.WordBookOrderByWithRelationInput[];
	cursor?: Prisma.WordBookWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.WordBookScalarFieldEnum | Prisma.WordBookScalarFieldEnum[];
};

export type WordBookFindFirstOrThrowArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where?: Prisma.WordBookWhereInput;
	orderBy?:
		| Prisma.WordBookOrderByWithRelationInput
		| Prisma.WordBookOrderByWithRelationInput[];
	cursor?: Prisma.WordBookWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.WordBookScalarFieldEnum | Prisma.WordBookScalarFieldEnum[];
};

export type WordBookFindManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where?: Prisma.WordBookWhereInput;
	orderBy?:
		| Prisma.WordBookOrderByWithRelationInput
		| Prisma.WordBookOrderByWithRelationInput[];
	cursor?: Prisma.WordBookWhereUniqueInput;
	take?: number;
	skip?: number;
	distinct?: Prisma.WordBookScalarFieldEnum | Prisma.WordBookScalarFieldEnum[];
};

export type WordBookCreateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookCreateInput,
		Prisma.WordBookUncheckedCreateInput
	>;
};

export type WordBookCreateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.WordBookCreateManyInput | Prisma.WordBookCreateManyInput[];
	skipDuplicates?: boolean;
};

export type WordBookCreateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelectCreateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	data: Prisma.WordBookCreateManyInput | Prisma.WordBookCreateManyInput[];
	skipDuplicates?: boolean;
};

export type WordBookUpdateArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookUpdateInput,
		Prisma.WordBookUncheckedUpdateInput
	>;
	where: Prisma.WordBookWhereUniqueInput;
};

export type WordBookUpdateManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	data: Prisma.XOR<
		Prisma.WordBookUpdateManyMutationInput,
		Prisma.WordBookUncheckedUpdateManyInput
	>;
	where?: Prisma.WordBookWhereInput;
	limit?: number;
};

export type WordBookUpdateManyAndReturnArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelectUpdateManyAndReturn<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	data: Prisma.XOR<
		Prisma.WordBookUpdateManyMutationInput,
		Prisma.WordBookUncheckedUpdateManyInput
	>;
	where?: Prisma.WordBookWhereInput;
	limit?: number;
};

export type WordBookUpsertArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where: Prisma.WordBookWhereUniqueInput;
	create: Prisma.XOR<
		Prisma.WordBookCreateInput,
		Prisma.WordBookUncheckedCreateInput
	>;
	update: Prisma.XOR<
		Prisma.WordBookUpdateInput,
		Prisma.WordBookUncheckedUpdateInput
	>;
};

export type WordBookDeleteArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
	where: Prisma.WordBookWhereUniqueInput;
};

export type WordBookDeleteManyArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	where?: Prisma.WordBookWhereInput;
	limit?: number;
};

export type WordBook$wordBookRecordsArgs<
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

export type WordBookDefaultArgs<
	ExtArgs extends
		runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
	select?: Prisma.WordBookSelect<ExtArgs> | null;
	omit?: Prisma.WordBookOmit<ExtArgs> | null;
	include?: Prisma.WordBookInclude<ExtArgs> | null;
};
