/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles';
  article_authorId: Scalars['uuid']['output'];
  article_content: Scalars['String']['output'];
  article_created_at: Scalars['timestamptz']['output'];
  article_hat?: Maybe<Scalars['String']['output']>;
  article_id: Scalars['Int']['output'];
  article_linked?: Maybe<Scalars['Int']['output']>;
  article_sources?: Maybe<Scalars['jsonb']['output']>;
  article_thumbnail: Scalars['String']['output'];
  article_thumbnail_uuid?: Maybe<Scalars['uuid']['output']>;
  article_title: Scalars['String']['output'];
  article_type: Scalars['String']['output'];
  article_video?: Maybe<Scalars['String']['output']>;
  article_views: Scalars['Int']['output'];
  /** An object relationship */
  file?: Maybe<Files>;
  /** An array relationship */
  join_article_fruits: Array<Join_Article_Fruits>;
  /** An aggregate relationship */
  join_article_fruits_aggregate: Join_Article_Fruits_Aggregate;
  /** An array relationship */
  join_article_lexiques_article: Array<Join_Article_Lexique>;
  /** An aggregate relationship */
  join_article_lexiques_article_aggregate: Join_Article_Lexique_Aggregate;
  /** An array relationship */
  join_article_lexiques_lexique: Array<Join_Article_Lexique>;
  /** An aggregate relationship */
  join_article_lexiques_lexique_aggregate: Join_Article_Lexique_Aggregate;
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "articles" */
export type ArticlesArticle_SourcesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_FruitsArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_Fruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_Lexiques_ArticleArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_Lexiques_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_Lexiques_LexiqueArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


/** columns and relationships of "articles" */
export type ArticlesJoin_Article_Lexiques_Lexique_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};

/** aggregated selection of "articles" */
export type Articles_Aggregate = {
  __typename?: 'articles_aggregate';
  aggregate?: Maybe<Articles_Aggregate_Fields>;
  nodes: Array<Articles>;
};

export type Articles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Articles_Aggregate_Bool_Exp_Count>;
};

export type Articles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Articles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Articles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "articles" */
export type Articles_Aggregate_Fields = {
  __typename?: 'articles_aggregate_fields';
  avg?: Maybe<Articles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Articles_Max_Fields>;
  min?: Maybe<Articles_Min_Fields>;
  stddev?: Maybe<Articles_Stddev_Fields>;
  stddev_pop?: Maybe<Articles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Articles_Stddev_Samp_Fields>;
  sum?: Maybe<Articles_Sum_Fields>;
  var_pop?: Maybe<Articles_Var_Pop_Fields>;
  var_samp?: Maybe<Articles_Var_Samp_Fields>;
  variance?: Maybe<Articles_Variance_Fields>;
};


/** aggregate fields of "articles" */
export type Articles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Articles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "articles" */
export type Articles_Aggregate_Order_By = {
  avg?: InputMaybe<Articles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Articles_Max_Order_By>;
  min?: InputMaybe<Articles_Min_Order_By>;
  stddev?: InputMaybe<Articles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Articles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Articles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Articles_Sum_Order_By>;
  var_pop?: InputMaybe<Articles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Articles_Var_Samp_Order_By>;
  variance?: InputMaybe<Articles_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Articles_Append_Input = {
  article_sources?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "articles" */
export type Articles_Arr_Rel_Insert_Input = {
  data: Array<Articles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};

/** aggregate avg on columns */
export type Articles_Avg_Fields = {
  __typename?: 'articles_avg_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "articles" */
export type Articles_Avg_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Articles_Bool_Exp>>;
  _not?: InputMaybe<Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Articles_Bool_Exp>>;
  article_authorId?: InputMaybe<Uuid_Comparison_Exp>;
  article_content?: InputMaybe<String_Comparison_Exp>;
  article_created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  article_hat?: InputMaybe<String_Comparison_Exp>;
  article_id?: InputMaybe<Int_Comparison_Exp>;
  article_linked?: InputMaybe<Int_Comparison_Exp>;
  article_sources?: InputMaybe<Jsonb_Comparison_Exp>;
  article_thumbnail?: InputMaybe<String_Comparison_Exp>;
  article_thumbnail_uuid?: InputMaybe<Uuid_Comparison_Exp>;
  article_title?: InputMaybe<String_Comparison_Exp>;
  article_type?: InputMaybe<String_Comparison_Exp>;
  article_video?: InputMaybe<String_Comparison_Exp>;
  article_views?: InputMaybe<Int_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  join_article_fruits?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
  join_article_fruits_aggregate?: InputMaybe<Join_Article_Fruits_Aggregate_Bool_Exp>;
  join_article_lexiques_article?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
  join_article_lexiques_article_aggregate?: InputMaybe<Join_Article_Lexique_Aggregate_Bool_Exp>;
  join_article_lexiques_lexique?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
  join_article_lexiques_lexique_aggregate?: InputMaybe<Join_Article_Lexique_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "articles" */
export enum Articles_Constraint {
  /** unique or primary key constraint on columns "article_id" */
  ArticlesPkey = 'articles_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Articles_Delete_At_Path_Input = {
  article_sources?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Articles_Delete_Elem_Input = {
  article_sources?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Articles_Delete_Key_Input = {
  article_sources?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "articles" */
export type Articles_Inc_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  article_linked?: InputMaybe<Scalars['Int']['input']>;
  article_views?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "articles" */
export type Articles_Insert_Input = {
  article_authorId?: InputMaybe<Scalars['uuid']['input']>;
  article_content?: InputMaybe<Scalars['String']['input']>;
  article_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  article_hat?: InputMaybe<Scalars['String']['input']>;
  article_id?: InputMaybe<Scalars['Int']['input']>;
  article_linked?: InputMaybe<Scalars['Int']['input']>;
  article_sources?: InputMaybe<Scalars['jsonb']['input']>;
  article_thumbnail?: InputMaybe<Scalars['String']['input']>;
  article_thumbnail_uuid?: InputMaybe<Scalars['uuid']['input']>;
  article_title?: InputMaybe<Scalars['String']['input']>;
  article_type?: InputMaybe<Scalars['String']['input']>;
  article_video?: InputMaybe<Scalars['String']['input']>;
  article_views?: InputMaybe<Scalars['Int']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  join_article_fruits?: InputMaybe<Join_Article_Fruits_Arr_Rel_Insert_Input>;
  join_article_lexiques_article?: InputMaybe<Join_Article_Lexique_Arr_Rel_Insert_Input>;
  join_article_lexiques_lexique?: InputMaybe<Join_Article_Lexique_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Articles_Max_Fields = {
  __typename?: 'articles_max_fields';
  article_authorId?: Maybe<Scalars['uuid']['output']>;
  article_content?: Maybe<Scalars['String']['output']>;
  article_created_at?: Maybe<Scalars['timestamptz']['output']>;
  article_hat?: Maybe<Scalars['String']['output']>;
  article_id?: Maybe<Scalars['Int']['output']>;
  article_linked?: Maybe<Scalars['Int']['output']>;
  article_thumbnail?: Maybe<Scalars['String']['output']>;
  article_thumbnail_uuid?: Maybe<Scalars['uuid']['output']>;
  article_title?: Maybe<Scalars['String']['output']>;
  article_type?: Maybe<Scalars['String']['output']>;
  article_video?: Maybe<Scalars['String']['output']>;
  article_views?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "articles" */
export type Articles_Max_Order_By = {
  article_authorId?: InputMaybe<Order_By>;
  article_content?: InputMaybe<Order_By>;
  article_created_at?: InputMaybe<Order_By>;
  article_hat?: InputMaybe<Order_By>;
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_thumbnail?: InputMaybe<Order_By>;
  article_thumbnail_uuid?: InputMaybe<Order_By>;
  article_title?: InputMaybe<Order_By>;
  article_type?: InputMaybe<Order_By>;
  article_video?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Articles_Min_Fields = {
  __typename?: 'articles_min_fields';
  article_authorId?: Maybe<Scalars['uuid']['output']>;
  article_content?: Maybe<Scalars['String']['output']>;
  article_created_at?: Maybe<Scalars['timestamptz']['output']>;
  article_hat?: Maybe<Scalars['String']['output']>;
  article_id?: Maybe<Scalars['Int']['output']>;
  article_linked?: Maybe<Scalars['Int']['output']>;
  article_thumbnail?: Maybe<Scalars['String']['output']>;
  article_thumbnail_uuid?: Maybe<Scalars['uuid']['output']>;
  article_title?: Maybe<Scalars['String']['output']>;
  article_type?: Maybe<Scalars['String']['output']>;
  article_video?: Maybe<Scalars['String']['output']>;
  article_views?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "articles" */
export type Articles_Min_Order_By = {
  article_authorId?: InputMaybe<Order_By>;
  article_content?: InputMaybe<Order_By>;
  article_created_at?: InputMaybe<Order_By>;
  article_hat?: InputMaybe<Order_By>;
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_thumbnail?: InputMaybe<Order_By>;
  article_thumbnail_uuid?: InputMaybe<Order_By>;
  article_title?: InputMaybe<Order_By>;
  article_type?: InputMaybe<Order_By>;
  article_video?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "articles" */
export type Articles_Mutation_Response = {
  __typename?: 'articles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Articles>;
};

/** input type for inserting object relation for remote table "articles" */
export type Articles_Obj_Rel_Insert_Input = {
  data: Articles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};

/** on_conflict condition type for table "articles" */
export type Articles_On_Conflict = {
  constraint: Articles_Constraint;
  update_columns?: Array<Articles_Update_Column>;
  where?: InputMaybe<Articles_Bool_Exp>;
};

/** Ordering options when selecting data from "articles". */
export type Articles_Order_By = {
  article_authorId?: InputMaybe<Order_By>;
  article_content?: InputMaybe<Order_By>;
  article_created_at?: InputMaybe<Order_By>;
  article_hat?: InputMaybe<Order_By>;
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_sources?: InputMaybe<Order_By>;
  article_thumbnail?: InputMaybe<Order_By>;
  article_thumbnail_uuid?: InputMaybe<Order_By>;
  article_title?: InputMaybe<Order_By>;
  article_type?: InputMaybe<Order_By>;
  article_video?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  join_article_fruits_aggregate?: InputMaybe<Join_Article_Fruits_Aggregate_Order_By>;
  join_article_lexiques_article_aggregate?: InputMaybe<Join_Article_Lexique_Aggregate_Order_By>;
  join_article_lexiques_lexique_aggregate?: InputMaybe<Join_Article_Lexique_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: articles */
export type Articles_Pk_Columns_Input = {
  article_id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Articles_Prepend_Input = {
  article_sources?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "articles" */
export enum Articles_Select_Column {
  /** column name */
  ArticleAuthorId = 'article_authorId',
  /** column name */
  ArticleContent = 'article_content',
  /** column name */
  ArticleCreatedAt = 'article_created_at',
  /** column name */
  ArticleHat = 'article_hat',
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  ArticleLinked = 'article_linked',
  /** column name */
  ArticleSources = 'article_sources',
  /** column name */
  ArticleThumbnail = 'article_thumbnail',
  /** column name */
  ArticleThumbnailUuid = 'article_thumbnail_uuid',
  /** column name */
  ArticleTitle = 'article_title',
  /** column name */
  ArticleType = 'article_type',
  /** column name */
  ArticleVideo = 'article_video',
  /** column name */
  ArticleViews = 'article_views'
}

/** input type for updating data in table "articles" */
export type Articles_Set_Input = {
  article_authorId?: InputMaybe<Scalars['uuid']['input']>;
  article_content?: InputMaybe<Scalars['String']['input']>;
  article_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  article_hat?: InputMaybe<Scalars['String']['input']>;
  article_id?: InputMaybe<Scalars['Int']['input']>;
  article_linked?: InputMaybe<Scalars['Int']['input']>;
  article_sources?: InputMaybe<Scalars['jsonb']['input']>;
  article_thumbnail?: InputMaybe<Scalars['String']['input']>;
  article_thumbnail_uuid?: InputMaybe<Scalars['uuid']['input']>;
  article_title?: InputMaybe<Scalars['String']['input']>;
  article_type?: InputMaybe<Scalars['String']['input']>;
  article_video?: InputMaybe<Scalars['String']['input']>;
  article_views?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Articles_Stddev_Fields = {
  __typename?: 'articles_stddev_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "articles" */
export type Articles_Stddev_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Articles_Stddev_Pop_Fields = {
  __typename?: 'articles_stddev_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "articles" */
export type Articles_Stddev_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Articles_Stddev_Samp_Fields = {
  __typename?: 'articles_stddev_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "articles" */
export type Articles_Stddev_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "articles" */
export type Articles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Articles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Articles_Stream_Cursor_Value_Input = {
  article_authorId?: InputMaybe<Scalars['uuid']['input']>;
  article_content?: InputMaybe<Scalars['String']['input']>;
  article_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  article_hat?: InputMaybe<Scalars['String']['input']>;
  article_id?: InputMaybe<Scalars['Int']['input']>;
  article_linked?: InputMaybe<Scalars['Int']['input']>;
  article_sources?: InputMaybe<Scalars['jsonb']['input']>;
  article_thumbnail?: InputMaybe<Scalars['String']['input']>;
  article_thumbnail_uuid?: InputMaybe<Scalars['uuid']['input']>;
  article_title?: InputMaybe<Scalars['String']['input']>;
  article_type?: InputMaybe<Scalars['String']['input']>;
  article_video?: InputMaybe<Scalars['String']['input']>;
  article_views?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Articles_Sum_Fields = {
  __typename?: 'articles_sum_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  article_linked?: Maybe<Scalars['Int']['output']>;
  article_views?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "articles" */
export type Articles_Sum_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** update columns of table "articles" */
export enum Articles_Update_Column {
  /** column name */
  ArticleAuthorId = 'article_authorId',
  /** column name */
  ArticleContent = 'article_content',
  /** column name */
  ArticleCreatedAt = 'article_created_at',
  /** column name */
  ArticleHat = 'article_hat',
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  ArticleLinked = 'article_linked',
  /** column name */
  ArticleSources = 'article_sources',
  /** column name */
  ArticleThumbnail = 'article_thumbnail',
  /** column name */
  ArticleThumbnailUuid = 'article_thumbnail_uuid',
  /** column name */
  ArticleTitle = 'article_title',
  /** column name */
  ArticleType = 'article_type',
  /** column name */
  ArticleVideo = 'article_video',
  /** column name */
  ArticleViews = 'article_views'
}

export type Articles_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Articles_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Articles_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Articles_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Articles_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Articles_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Articles_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Articles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Articles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Articles_Var_Pop_Fields = {
  __typename?: 'articles_var_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "articles" */
export type Articles_Var_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Articles_Var_Samp_Fields = {
  __typename?: 'articles_var_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "articles" */
export type Articles_Var_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Articles_Variance_Fields = {
  __typename?: 'articles_variance_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  article_linked?: Maybe<Scalars['Float']['output']>;
  article_views?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "articles" */
export type Articles_Variance_Order_By = {
  article_id?: InputMaybe<Order_By>;
  article_linked?: InputMaybe<Order_By>;
  article_views?: InputMaybe<Order_By>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  downloadExpiration: Scalars['Int']['output'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String']['output'];
  maxUploadFileSize: Scalars['Int']['output'];
  minUploadFileSize: Scalars['Int']['output'];
  presignedUrlsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  downloadExpiration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']['input']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Int']['output']>;
  minUploadFileSize?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']['output']>;
  maxUploadFileSize?: Maybe<Scalars['Float']['output']>;
  minUploadFileSize?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  etag?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isUploaded?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  etag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploadedByUserId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  etag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isUploaded?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "fruits" */
export type Fruits = {
  __typename?: 'fruits';
  fruit_color: Scalars['String']['output'];
  fruit_id: Scalars['Int']['output'];
  fruit_material: Scalars['String']['output'];
  fruit_name: Scalars['String']['output'];
  fruit_topic: Scalars['String']['output'];
  /** An array relationship */
  join_article_fruits: Array<Join_Article_Fruits>;
  /** An aggregate relationship */
  join_article_fruits_aggregate: Join_Article_Fruits_Aggregate;
};


/** columns and relationships of "fruits" */
export type FruitsJoin_Article_FruitsArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


/** columns and relationships of "fruits" */
export type FruitsJoin_Article_Fruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};

/** aggregated selection of "fruits" */
export type Fruits_Aggregate = {
  __typename?: 'fruits_aggregate';
  aggregate?: Maybe<Fruits_Aggregate_Fields>;
  nodes: Array<Fruits>;
};

/** aggregate fields of "fruits" */
export type Fruits_Aggregate_Fields = {
  __typename?: 'fruits_aggregate_fields';
  avg?: Maybe<Fruits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Fruits_Max_Fields>;
  min?: Maybe<Fruits_Min_Fields>;
  stddev?: Maybe<Fruits_Stddev_Fields>;
  stddev_pop?: Maybe<Fruits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fruits_Stddev_Samp_Fields>;
  sum?: Maybe<Fruits_Sum_Fields>;
  var_pop?: Maybe<Fruits_Var_Pop_Fields>;
  var_samp?: Maybe<Fruits_Var_Samp_Fields>;
  variance?: Maybe<Fruits_Variance_Fields>;
};


/** aggregate fields of "fruits" */
export type Fruits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fruits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Fruits_Avg_Fields = {
  __typename?: 'fruits_avg_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "fruits". All fields are combined with a logical 'AND'. */
export type Fruits_Bool_Exp = {
  _and?: InputMaybe<Array<Fruits_Bool_Exp>>;
  _not?: InputMaybe<Fruits_Bool_Exp>;
  _or?: InputMaybe<Array<Fruits_Bool_Exp>>;
  fruit_color?: InputMaybe<String_Comparison_Exp>;
  fruit_id?: InputMaybe<Int_Comparison_Exp>;
  fruit_material?: InputMaybe<String_Comparison_Exp>;
  fruit_name?: InputMaybe<String_Comparison_Exp>;
  fruit_topic?: InputMaybe<String_Comparison_Exp>;
  join_article_fruits?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
  join_article_fruits_aggregate?: InputMaybe<Join_Article_Fruits_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "fruits" */
export enum Fruits_Constraint {
  /** unique or primary key constraint on columns "fruit_id" */
  FruitsPkey = 'fruits_pkey'
}

/** input type for incrementing numeric columns in table "fruits" */
export type Fruits_Inc_Input = {
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "fruits" */
export type Fruits_Insert_Input = {
  fruit_color?: InputMaybe<Scalars['String']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_material?: InputMaybe<Scalars['String']['input']>;
  fruit_name?: InputMaybe<Scalars['String']['input']>;
  fruit_topic?: InputMaybe<Scalars['String']['input']>;
  join_article_fruits?: InputMaybe<Join_Article_Fruits_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Fruits_Max_Fields = {
  __typename?: 'fruits_max_fields';
  fruit_color?: Maybe<Scalars['String']['output']>;
  fruit_id?: Maybe<Scalars['Int']['output']>;
  fruit_material?: Maybe<Scalars['String']['output']>;
  fruit_name?: Maybe<Scalars['String']['output']>;
  fruit_topic?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Fruits_Min_Fields = {
  __typename?: 'fruits_min_fields';
  fruit_color?: Maybe<Scalars['String']['output']>;
  fruit_id?: Maybe<Scalars['Int']['output']>;
  fruit_material?: Maybe<Scalars['String']['output']>;
  fruit_name?: Maybe<Scalars['String']['output']>;
  fruit_topic?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "fruits" */
export type Fruits_Mutation_Response = {
  __typename?: 'fruits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fruits>;
};

/** input type for inserting object relation for remote table "fruits" */
export type Fruits_Obj_Rel_Insert_Input = {
  data: Fruits_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fruits_On_Conflict>;
};

/** on_conflict condition type for table "fruits" */
export type Fruits_On_Conflict = {
  constraint: Fruits_Constraint;
  update_columns?: Array<Fruits_Update_Column>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};

/** Ordering options when selecting data from "fruits". */
export type Fruits_Order_By = {
  fruit_color?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  fruit_material?: InputMaybe<Order_By>;
  fruit_name?: InputMaybe<Order_By>;
  fruit_topic?: InputMaybe<Order_By>;
  join_article_fruits_aggregate?: InputMaybe<Join_Article_Fruits_Aggregate_Order_By>;
};

/** primary key columns input for table: fruits */
export type Fruits_Pk_Columns_Input = {
  fruit_id: Scalars['Int']['input'];
};

/** select columns of table "fruits" */
export enum Fruits_Select_Column {
  /** column name */
  FruitColor = 'fruit_color',
  /** column name */
  FruitId = 'fruit_id',
  /** column name */
  FruitMaterial = 'fruit_material',
  /** column name */
  FruitName = 'fruit_name',
  /** column name */
  FruitTopic = 'fruit_topic'
}

/** input type for updating data in table "fruits" */
export type Fruits_Set_Input = {
  fruit_color?: InputMaybe<Scalars['String']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_material?: InputMaybe<Scalars['String']['input']>;
  fruit_name?: InputMaybe<Scalars['String']['input']>;
  fruit_topic?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Fruits_Stddev_Fields = {
  __typename?: 'fruits_stddev_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Fruits_Stddev_Pop_Fields = {
  __typename?: 'fruits_stddev_pop_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Fruits_Stddev_Samp_Fields = {
  __typename?: 'fruits_stddev_samp_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "fruits" */
export type Fruits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fruits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fruits_Stream_Cursor_Value_Input = {
  fruit_color?: InputMaybe<Scalars['String']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_material?: InputMaybe<Scalars['String']['input']>;
  fruit_name?: InputMaybe<Scalars['String']['input']>;
  fruit_topic?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Fruits_Sum_Fields = {
  __typename?: 'fruits_sum_fields';
  fruit_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "fruits" */
export enum Fruits_Update_Column {
  /** column name */
  FruitColor = 'fruit_color',
  /** column name */
  FruitId = 'fruit_id',
  /** column name */
  FruitMaterial = 'fruit_material',
  /** column name */
  FruitName = 'fruit_name',
  /** column name */
  FruitTopic = 'fruit_topic'
}

export type Fruits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Fruits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fruits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fruits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fruits_Var_Pop_Fields = {
  __typename?: 'fruits_var_pop_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Fruits_Var_Samp_Fields = {
  __typename?: 'fruits_var_samp_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Fruits_Variance_Fields = {
  __typename?: 'fruits_variance_fields';
  fruit_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "join_article_fruits" */
export type Join_Article_Fruits = {
  __typename?: 'join_article_fruits';
  /** An object relationship */
  article: Articles;
  article_id: Scalars['Int']['output'];
  /** An object relationship */
  fruit: Fruits;
  fruit_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

/** aggregated selection of "join_article_fruits" */
export type Join_Article_Fruits_Aggregate = {
  __typename?: 'join_article_fruits_aggregate';
  aggregate?: Maybe<Join_Article_Fruits_Aggregate_Fields>;
  nodes: Array<Join_Article_Fruits>;
};

export type Join_Article_Fruits_Aggregate_Bool_Exp = {
  count?: InputMaybe<Join_Article_Fruits_Aggregate_Bool_Exp_Count>;
};

export type Join_Article_Fruits_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "join_article_fruits" */
export type Join_Article_Fruits_Aggregate_Fields = {
  __typename?: 'join_article_fruits_aggregate_fields';
  avg?: Maybe<Join_Article_Fruits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Join_Article_Fruits_Max_Fields>;
  min?: Maybe<Join_Article_Fruits_Min_Fields>;
  stddev?: Maybe<Join_Article_Fruits_Stddev_Fields>;
  stddev_pop?: Maybe<Join_Article_Fruits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Join_Article_Fruits_Stddev_Samp_Fields>;
  sum?: Maybe<Join_Article_Fruits_Sum_Fields>;
  var_pop?: Maybe<Join_Article_Fruits_Var_Pop_Fields>;
  var_samp?: Maybe<Join_Article_Fruits_Var_Samp_Fields>;
  variance?: Maybe<Join_Article_Fruits_Variance_Fields>;
};


/** aggregate fields of "join_article_fruits" */
export type Join_Article_Fruits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "join_article_fruits" */
export type Join_Article_Fruits_Aggregate_Order_By = {
  avg?: InputMaybe<Join_Article_Fruits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Join_Article_Fruits_Max_Order_By>;
  min?: InputMaybe<Join_Article_Fruits_Min_Order_By>;
  stddev?: InputMaybe<Join_Article_Fruits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Join_Article_Fruits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Join_Article_Fruits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Join_Article_Fruits_Sum_Order_By>;
  var_pop?: InputMaybe<Join_Article_Fruits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Join_Article_Fruits_Var_Samp_Order_By>;
  variance?: InputMaybe<Join_Article_Fruits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "join_article_fruits" */
export type Join_Article_Fruits_Arr_Rel_Insert_Input = {
  data: Array<Join_Article_Fruits_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Join_Article_Fruits_On_Conflict>;
};

/** aggregate avg on columns */
export type Join_Article_Fruits_Avg_Fields = {
  __typename?: 'join_article_fruits_avg_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Avg_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "join_article_fruits". All fields are combined with a logical 'AND'. */
export type Join_Article_Fruits_Bool_Exp = {
  _and?: InputMaybe<Array<Join_Article_Fruits_Bool_Exp>>;
  _not?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
  _or?: InputMaybe<Array<Join_Article_Fruits_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  article_id?: InputMaybe<Int_Comparison_Exp>;
  fruit?: InputMaybe<Fruits_Bool_Exp>;
  fruit_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_article_fruits" */
export enum Join_Article_Fruits_Constraint {
  /** unique or primary key constraint on columns "id" */
  JoinArticleFruitsPkey = 'join_article_fruits_pkey'
}

/** input type for incrementing numeric columns in table "join_article_fruits" */
export type Join_Article_Fruits_Inc_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "join_article_fruits" */
export type Join_Article_Fruits_Insert_Input = {
  article?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  article_id?: InputMaybe<Scalars['Int']['input']>;
  fruit?: InputMaybe<Fruits_Obj_Rel_Insert_Input>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Join_Article_Fruits_Max_Fields = {
  __typename?: 'join_article_fruits_max_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  fruit_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Max_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Article_Fruits_Min_Fields = {
  __typename?: 'join_article_fruits_min_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  fruit_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Min_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "join_article_fruits" */
export type Join_Article_Fruits_Mutation_Response = {
  __typename?: 'join_article_fruits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Join_Article_Fruits>;
};

/** on_conflict condition type for table "join_article_fruits" */
export type Join_Article_Fruits_On_Conflict = {
  constraint: Join_Article_Fruits_Constraint;
  update_columns?: Array<Join_Article_Fruits_Update_Column>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};

/** Ordering options when selecting data from "join_article_fruits". */
export type Join_Article_Fruits_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  article_id?: InputMaybe<Order_By>;
  fruit?: InputMaybe<Fruits_Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: join_article_fruits */
export type Join_Article_Fruits_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "join_article_fruits" */
export enum Join_Article_Fruits_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  FruitId = 'fruit_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "join_article_fruits" */
export type Join_Article_Fruits_Set_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Join_Article_Fruits_Stddev_Fields = {
  __typename?: 'join_article_fruits_stddev_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Stddev_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Join_Article_Fruits_Stddev_Pop_Fields = {
  __typename?: 'join_article_fruits_stddev_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Stddev_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Join_Article_Fruits_Stddev_Samp_Fields = {
  __typename?: 'join_article_fruits_stddev_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Stddev_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "join_article_fruits" */
export type Join_Article_Fruits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Join_Article_Fruits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Join_Article_Fruits_Stream_Cursor_Value_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  fruit_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Join_Article_Fruits_Sum_Fields = {
  __typename?: 'join_article_fruits_sum_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  fruit_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Sum_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "join_article_fruits" */
export enum Join_Article_Fruits_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  FruitId = 'fruit_id',
  /** column name */
  Id = 'id'
}

export type Join_Article_Fruits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Join_Article_Fruits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Join_Article_Fruits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Join_Article_Fruits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Join_Article_Fruits_Var_Pop_Fields = {
  __typename?: 'join_article_fruits_var_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Var_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Join_Article_Fruits_Var_Samp_Fields = {
  __typename?: 'join_article_fruits_var_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Var_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Join_Article_Fruits_Variance_Fields = {
  __typename?: 'join_article_fruits_variance_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  fruit_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "join_article_fruits" */
export type Join_Article_Fruits_Variance_Order_By = {
  article_id?: InputMaybe<Order_By>;
  fruit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "join_article_lexique" */
export type Join_Article_Lexique = {
  __typename?: 'join_article_lexique';
  /** An object relationship */
  article: Articles;
  article_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  lexique: Articles;
  lexique_id: Scalars['Int']['output'];
};

/** aggregated selection of "join_article_lexique" */
export type Join_Article_Lexique_Aggregate = {
  __typename?: 'join_article_lexique_aggregate';
  aggregate?: Maybe<Join_Article_Lexique_Aggregate_Fields>;
  nodes: Array<Join_Article_Lexique>;
};

export type Join_Article_Lexique_Aggregate_Bool_Exp = {
  count?: InputMaybe<Join_Article_Lexique_Aggregate_Bool_Exp_Count>;
};

export type Join_Article_Lexique_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "join_article_lexique" */
export type Join_Article_Lexique_Aggregate_Fields = {
  __typename?: 'join_article_lexique_aggregate_fields';
  avg?: Maybe<Join_Article_Lexique_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Join_Article_Lexique_Max_Fields>;
  min?: Maybe<Join_Article_Lexique_Min_Fields>;
  stddev?: Maybe<Join_Article_Lexique_Stddev_Fields>;
  stddev_pop?: Maybe<Join_Article_Lexique_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Join_Article_Lexique_Stddev_Samp_Fields>;
  sum?: Maybe<Join_Article_Lexique_Sum_Fields>;
  var_pop?: Maybe<Join_Article_Lexique_Var_Pop_Fields>;
  var_samp?: Maybe<Join_Article_Lexique_Var_Samp_Fields>;
  variance?: Maybe<Join_Article_Lexique_Variance_Fields>;
};


/** aggregate fields of "join_article_lexique" */
export type Join_Article_Lexique_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "join_article_lexique" */
export type Join_Article_Lexique_Aggregate_Order_By = {
  avg?: InputMaybe<Join_Article_Lexique_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Join_Article_Lexique_Max_Order_By>;
  min?: InputMaybe<Join_Article_Lexique_Min_Order_By>;
  stddev?: InputMaybe<Join_Article_Lexique_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Join_Article_Lexique_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Join_Article_Lexique_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Join_Article_Lexique_Sum_Order_By>;
  var_pop?: InputMaybe<Join_Article_Lexique_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Join_Article_Lexique_Var_Samp_Order_By>;
  variance?: InputMaybe<Join_Article_Lexique_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "join_article_lexique" */
export type Join_Article_Lexique_Arr_Rel_Insert_Input = {
  data: Array<Join_Article_Lexique_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Join_Article_Lexique_On_Conflict>;
};

/** aggregate avg on columns */
export type Join_Article_Lexique_Avg_Fields = {
  __typename?: 'join_article_lexique_avg_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Avg_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "join_article_lexique". All fields are combined with a logical 'AND'. */
export type Join_Article_Lexique_Bool_Exp = {
  _and?: InputMaybe<Array<Join_Article_Lexique_Bool_Exp>>;
  _not?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
  _or?: InputMaybe<Array<Join_Article_Lexique_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  article_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lexique?: InputMaybe<Articles_Bool_Exp>;
  lexique_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "join_article_lexique" */
export enum Join_Article_Lexique_Constraint {
  /** unique or primary key constraint on columns "id" */
  JoinArticleLexiquePkey = 'join_article_lexique_pkey'
}

/** input type for incrementing numeric columns in table "join_article_lexique" */
export type Join_Article_Lexique_Inc_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lexique_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "join_article_lexique" */
export type Join_Article_Lexique_Insert_Input = {
  article?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  article_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lexique?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  lexique_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Join_Article_Lexique_Max_Fields = {
  __typename?: 'join_article_lexique_max_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lexique_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Max_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Join_Article_Lexique_Min_Fields = {
  __typename?: 'join_article_lexique_min_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lexique_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Min_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "join_article_lexique" */
export type Join_Article_Lexique_Mutation_Response = {
  __typename?: 'join_article_lexique_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Join_Article_Lexique>;
};

/** on_conflict condition type for table "join_article_lexique" */
export type Join_Article_Lexique_On_Conflict = {
  constraint: Join_Article_Lexique_Constraint;
  update_columns?: Array<Join_Article_Lexique_Update_Column>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};

/** Ordering options when selecting data from "join_article_lexique". */
export type Join_Article_Lexique_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique?: InputMaybe<Articles_Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: join_article_lexique */
export type Join_Article_Lexique_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "join_article_lexique" */
export enum Join_Article_Lexique_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  LexiqueId = 'lexique_id'
}

/** input type for updating data in table "join_article_lexique" */
export type Join_Article_Lexique_Set_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lexique_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Join_Article_Lexique_Stddev_Fields = {
  __typename?: 'join_article_lexique_stddev_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Stddev_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Join_Article_Lexique_Stddev_Pop_Fields = {
  __typename?: 'join_article_lexique_stddev_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Stddev_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Join_Article_Lexique_Stddev_Samp_Fields = {
  __typename?: 'join_article_lexique_stddev_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Stddev_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "join_article_lexique" */
export type Join_Article_Lexique_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Join_Article_Lexique_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Join_Article_Lexique_Stream_Cursor_Value_Input = {
  article_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lexique_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Join_Article_Lexique_Sum_Fields = {
  __typename?: 'join_article_lexique_sum_fields';
  article_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lexique_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Sum_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** update columns of table "join_article_lexique" */
export enum Join_Article_Lexique_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  LexiqueId = 'lexique_id'
}

export type Join_Article_Lexique_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Join_Article_Lexique_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Join_Article_Lexique_Set_Input>;
  /** filter the rows which have to be updated */
  where: Join_Article_Lexique_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Join_Article_Lexique_Var_Pop_Fields = {
  __typename?: 'join_article_lexique_var_pop_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Var_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Join_Article_Lexique_Var_Samp_Fields = {
  __typename?: 'join_article_lexique_var_samp_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Var_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Join_Article_Lexique_Variance_Fields = {
  __typename?: 'join_article_lexique_variance_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lexique_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "join_article_lexique" */
export type Join_Article_Lexique_Variance_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lexique_id?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "articles" */
  delete_articles?: Maybe<Articles_Mutation_Response>;
  /** delete single row from the table: "articles" */
  delete_articles_by_pk?: Maybe<Articles>;
  /** delete data from the table: "fruits" */
  delete_fruits?: Maybe<Fruits_Mutation_Response>;
  /** delete single row from the table: "fruits" */
  delete_fruits_by_pk?: Maybe<Fruits>;
  /** delete data from the table: "join_article_fruits" */
  delete_join_article_fruits?: Maybe<Join_Article_Fruits_Mutation_Response>;
  /** delete single row from the table: "join_article_fruits" */
  delete_join_article_fruits_by_pk?: Maybe<Join_Article_Fruits>;
  /** delete data from the table: "join_article_lexique" */
  delete_join_article_lexique?: Maybe<Join_Article_Lexique_Mutation_Response>;
  /** delete single row from the table: "join_article_lexique" */
  delete_join_article_lexique_by_pk?: Maybe<Join_Article_Lexique>;
  /** delete data from the table: "saved" */
  delete_saved?: Maybe<Saved_Mutation_Response>;
  /** delete single row from the table: "saved" */
  delete_saved_by_pk?: Maybe<Saved>;
  /** delete data from the table: "smoothies" */
  delete_smoothies?: Maybe<Smoothies_Mutation_Response>;
  /** delete single row from the table: "smoothies" */
  delete_smoothies_by_pk?: Maybe<Smoothies>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "articles" */
  insert_articles?: Maybe<Articles_Mutation_Response>;
  /** insert a single row into the table: "articles" */
  insert_articles_one?: Maybe<Articles>;
  /** insert data into the table: "fruits" */
  insert_fruits?: Maybe<Fruits_Mutation_Response>;
  /** insert a single row into the table: "fruits" */
  insert_fruits_one?: Maybe<Fruits>;
  /** insert data into the table: "join_article_fruits" */
  insert_join_article_fruits?: Maybe<Join_Article_Fruits_Mutation_Response>;
  /** insert a single row into the table: "join_article_fruits" */
  insert_join_article_fruits_one?: Maybe<Join_Article_Fruits>;
  /** insert data into the table: "join_article_lexique" */
  insert_join_article_lexique?: Maybe<Join_Article_Lexique_Mutation_Response>;
  /** insert a single row into the table: "join_article_lexique" */
  insert_join_article_lexique_one?: Maybe<Join_Article_Lexique>;
  /** insert data into the table: "saved" */
  insert_saved?: Maybe<Saved_Mutation_Response>;
  /** insert a single row into the table: "saved" */
  insert_saved_one?: Maybe<Saved>;
  /** insert data into the table: "smoothies" */
  insert_smoothies?: Maybe<Smoothies_Mutation_Response>;
  /** insert a single row into the table: "smoothies" */
  insert_smoothies_one?: Maybe<Smoothies>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update data of the table: "articles" */
  update_articles?: Maybe<Articles_Mutation_Response>;
  /** update single row of the table: "articles" */
  update_articles_by_pk?: Maybe<Articles>;
  /** update multiples rows of table: "articles" */
  update_articles_many?: Maybe<Array<Maybe<Articles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "fruits" */
  update_fruits?: Maybe<Fruits_Mutation_Response>;
  /** update single row of the table: "fruits" */
  update_fruits_by_pk?: Maybe<Fruits>;
  /** update multiples rows of table: "fruits" */
  update_fruits_many?: Maybe<Array<Maybe<Fruits_Mutation_Response>>>;
  /** update data of the table: "join_article_fruits" */
  update_join_article_fruits?: Maybe<Join_Article_Fruits_Mutation_Response>;
  /** update single row of the table: "join_article_fruits" */
  update_join_article_fruits_by_pk?: Maybe<Join_Article_Fruits>;
  /** update multiples rows of table: "join_article_fruits" */
  update_join_article_fruits_many?: Maybe<Array<Maybe<Join_Article_Fruits_Mutation_Response>>>;
  /** update data of the table: "join_article_lexique" */
  update_join_article_lexique?: Maybe<Join_Article_Lexique_Mutation_Response>;
  /** update single row of the table: "join_article_lexique" */
  update_join_article_lexique_by_pk?: Maybe<Join_Article_Lexique>;
  /** update multiples rows of table: "join_article_lexique" */
  update_join_article_lexique_many?: Maybe<Array<Maybe<Join_Article_Lexique_Mutation_Response>>>;
  /** update data of the table: "saved" */
  update_saved?: Maybe<Saved_Mutation_Response>;
  /** update single row of the table: "saved" */
  update_saved_by_pk?: Maybe<Saved>;
  /** update multiples rows of table: "saved" */
  update_saved_many?: Maybe<Array<Maybe<Saved_Mutation_Response>>>;
  /** update data of the table: "smoothies" */
  update_smoothies?: Maybe<Smoothies_Mutation_Response>;
  /** update single row of the table: "smoothies" */
  update_smoothies_by_pk?: Maybe<Smoothies>;
  /** update multiples rows of table: "smoothies" */
  update_smoothies_many?: Maybe<Array<Maybe<Smoothies_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ArticlesArgs = {
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Articles_By_PkArgs = {
  article_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_FruitsArgs = {
  where: Fruits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fruits_By_PkArgs = {
  fruit_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Join_Article_FruitsArgs = {
  where: Join_Article_Fruits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Join_Article_Fruits_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Join_Article_LexiqueArgs = {
  where: Join_Article_Lexique_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Join_Article_Lexique_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SavedArgs = {
  where: Saved_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Saved_By_PkArgs = {
  saved_uuid: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SmoothiesArgs = {
  where: Smoothies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Smoothies_By_PkArgs = {
  smoothie_uuid: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ArticlesArgs = {
  objects: Array<Articles_Insert_Input>;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Articles_OneArgs = {
  object: Articles_Insert_Input;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FruitsArgs = {
  objects: Array<Fruits_Insert_Input>;
  on_conflict?: InputMaybe<Fruits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fruits_OneArgs = {
  object: Fruits_Insert_Input;
  on_conflict?: InputMaybe<Fruits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Join_Article_FruitsArgs = {
  objects: Array<Join_Article_Fruits_Insert_Input>;
  on_conflict?: InputMaybe<Join_Article_Fruits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Join_Article_Fruits_OneArgs = {
  object: Join_Article_Fruits_Insert_Input;
  on_conflict?: InputMaybe<Join_Article_Fruits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Join_Article_LexiqueArgs = {
  objects: Array<Join_Article_Lexique_Insert_Input>;
  on_conflict?: InputMaybe<Join_Article_Lexique_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Join_Article_Lexique_OneArgs = {
  object: Join_Article_Lexique_Insert_Input;
  on_conflict?: InputMaybe<Join_Article_Lexique_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SavedArgs = {
  objects: Array<Saved_Insert_Input>;
  on_conflict?: InputMaybe<Saved_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Saved_OneArgs = {
  object: Saved_Insert_Input;
  on_conflict?: InputMaybe<Saved_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SmoothiesArgs = {
  objects: Array<Smoothies_Insert_Input>;
  on_conflict?: InputMaybe<Smoothies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Smoothies_OneArgs = {
  object: Smoothies_Insert_Input;
  on_conflict?: InputMaybe<Smoothies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ArticlesArgs = {
  _append?: InputMaybe<Articles_Append_Input>;
  _delete_at_path?: InputMaybe<Articles_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Articles_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Articles_Delete_Key_Input>;
  _inc?: InputMaybe<Articles_Inc_Input>;
  _prepend?: InputMaybe<Articles_Prepend_Input>;
  _set?: InputMaybe<Articles_Set_Input>;
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Articles_By_PkArgs = {
  _append?: InputMaybe<Articles_Append_Input>;
  _delete_at_path?: InputMaybe<Articles_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Articles_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Articles_Delete_Key_Input>;
  _inc?: InputMaybe<Articles_Inc_Input>;
  _prepend?: InputMaybe<Articles_Prepend_Input>;
  _set?: InputMaybe<Articles_Set_Input>;
  pk_columns: Articles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Articles_ManyArgs = {
  updates: Array<Articles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FruitsArgs = {
  _inc?: InputMaybe<Fruits_Inc_Input>;
  _set?: InputMaybe<Fruits_Set_Input>;
  where: Fruits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fruits_By_PkArgs = {
  _inc?: InputMaybe<Fruits_Inc_Input>;
  _set?: InputMaybe<Fruits_Set_Input>;
  pk_columns: Fruits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fruits_ManyArgs = {
  updates: Array<Fruits_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_FruitsArgs = {
  _inc?: InputMaybe<Join_Article_Fruits_Inc_Input>;
  _set?: InputMaybe<Join_Article_Fruits_Set_Input>;
  where: Join_Article_Fruits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_Fruits_By_PkArgs = {
  _inc?: InputMaybe<Join_Article_Fruits_Inc_Input>;
  _set?: InputMaybe<Join_Article_Fruits_Set_Input>;
  pk_columns: Join_Article_Fruits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_Fruits_ManyArgs = {
  updates: Array<Join_Article_Fruits_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_LexiqueArgs = {
  _inc?: InputMaybe<Join_Article_Lexique_Inc_Input>;
  _set?: InputMaybe<Join_Article_Lexique_Set_Input>;
  where: Join_Article_Lexique_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_Lexique_By_PkArgs = {
  _inc?: InputMaybe<Join_Article_Lexique_Inc_Input>;
  _set?: InputMaybe<Join_Article_Lexique_Set_Input>;
  pk_columns: Join_Article_Lexique_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Join_Article_Lexique_ManyArgs = {
  updates: Array<Join_Article_Lexique_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SavedArgs = {
  _set?: InputMaybe<Saved_Set_Input>;
  where: Saved_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Saved_By_PkArgs = {
  _set?: InputMaybe<Saved_Set_Input>;
  pk_columns: Saved_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Saved_ManyArgs = {
  updates: Array<Saved_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SmoothiesArgs = {
  _inc?: InputMaybe<Smoothies_Inc_Input>;
  _set?: InputMaybe<Smoothies_Set_Input>;
  where: Smoothies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Smoothies_By_PkArgs = {
  _inc?: InputMaybe<Smoothies_Inc_Input>;
  _set?: InputMaybe<Smoothies_Set_Input>;
  pk_columns: Smoothies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Smoothies_ManyArgs = {
  updates: Array<Smoothies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "fruits" */
  fruits: Array<Fruits>;
  /** fetch aggregated fields from the table: "fruits" */
  fruits_aggregate: Fruits_Aggregate;
  /** fetch data from the table: "fruits" using primary key columns */
  fruits_by_pk?: Maybe<Fruits>;
  /** An array relationship */
  join_article_fruits: Array<Join_Article_Fruits>;
  /** An aggregate relationship */
  join_article_fruits_aggregate: Join_Article_Fruits_Aggregate;
  /** fetch data from the table: "join_article_fruits" using primary key columns */
  join_article_fruits_by_pk?: Maybe<Join_Article_Fruits>;
  /** fetch data from the table: "join_article_lexique" */
  join_article_lexique: Array<Join_Article_Lexique>;
  /** fetch aggregated fields from the table: "join_article_lexique" */
  join_article_lexique_aggregate: Join_Article_Lexique_Aggregate;
  /** fetch data from the table: "join_article_lexique" using primary key columns */
  join_article_lexique_by_pk?: Maybe<Join_Article_Lexique>;
  /** fetch data from the table: "saved" */
  saved: Array<Saved>;
  /** fetch aggregated fields from the table: "saved" */
  saved_aggregate: Saved_Aggregate;
  /** fetch data from the table: "saved" using primary key columns */
  saved_by_pk?: Maybe<Saved>;
  /** An array relationship */
  smoothies: Array<Smoothies>;
  /** An aggregate relationship */
  smoothies_aggregate: Smoothies_Aggregate;
  /** fetch data from the table: "smoothies" using primary key columns */
  smoothies_by_pk?: Maybe<Smoothies>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Query_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticles_By_PkArgs = {
  article_id: Scalars['Int']['input'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFruitsArgs = {
  distinct_on?: InputMaybe<Array<Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fruits_Order_By>>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};


export type Query_RootFruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fruits_Order_By>>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};


export type Query_RootFruits_By_PkArgs = {
  fruit_id: Scalars['Int']['input'];
};


export type Query_RootJoin_Article_FruitsArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


export type Query_RootJoin_Article_Fruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


export type Query_RootJoin_Article_Fruits_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootJoin_Article_LexiqueArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


export type Query_RootJoin_Article_Lexique_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


export type Query_RootJoin_Article_Lexique_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSavedArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


export type Query_RootSaved_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


export type Query_RootSaved_By_PkArgs = {
  saved_uuid: Scalars['uuid']['input'];
};


export type Query_RootSmoothiesArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


export type Query_RootSmoothies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


export type Query_RootSmoothies_By_PkArgs = {
  smoothie_uuid: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** columns and relationships of "saved" */
export type Saved = {
  __typename?: 'saved';
  created_at: Scalars['timestamptz']['output'];
  saved_uuid: Scalars['uuid']['output'];
  smoothieID: Scalars['uuid']['output'];
  /** An object relationship */
  smoothy: Smoothies;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "saved" */
export type Saved_Aggregate = {
  __typename?: 'saved_aggregate';
  aggregate?: Maybe<Saved_Aggregate_Fields>;
  nodes: Array<Saved>;
};

export type Saved_Aggregate_Bool_Exp = {
  count?: InputMaybe<Saved_Aggregate_Bool_Exp_Count>;
};

export type Saved_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Saved_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Saved_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "saved" */
export type Saved_Aggregate_Fields = {
  __typename?: 'saved_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Saved_Max_Fields>;
  min?: Maybe<Saved_Min_Fields>;
};


/** aggregate fields of "saved" */
export type Saved_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Saved_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "saved" */
export type Saved_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Saved_Max_Order_By>;
  min?: InputMaybe<Saved_Min_Order_By>;
};

/** input type for inserting array relation for remote table "saved" */
export type Saved_Arr_Rel_Insert_Input = {
  data: Array<Saved_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Saved_On_Conflict>;
};

/** Boolean expression to filter rows from the table "saved". All fields are combined with a logical 'AND'. */
export type Saved_Bool_Exp = {
  _and?: InputMaybe<Array<Saved_Bool_Exp>>;
  _not?: InputMaybe<Saved_Bool_Exp>;
  _or?: InputMaybe<Array<Saved_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  saved_uuid?: InputMaybe<Uuid_Comparison_Exp>;
  smoothieID?: InputMaybe<Uuid_Comparison_Exp>;
  smoothy?: InputMaybe<Smoothies_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "saved" */
export enum Saved_Constraint {
  /** unique or primary key constraint on columns "saved_uuid" */
  SavedPkey = 'saved_pkey'
}

/** input type for inserting data into table "saved" */
export type Saved_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  saved_uuid?: InputMaybe<Scalars['uuid']['input']>;
  smoothieID?: InputMaybe<Scalars['uuid']['input']>;
  smoothy?: InputMaybe<Smoothies_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Saved_Max_Fields = {
  __typename?: 'saved_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  saved_uuid?: Maybe<Scalars['uuid']['output']>;
  smoothieID?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "saved" */
export type Saved_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  saved_uuid?: InputMaybe<Order_By>;
  smoothieID?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Saved_Min_Fields = {
  __typename?: 'saved_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  saved_uuid?: Maybe<Scalars['uuid']['output']>;
  smoothieID?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "saved" */
export type Saved_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  saved_uuid?: InputMaybe<Order_By>;
  smoothieID?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "saved" */
export type Saved_Mutation_Response = {
  __typename?: 'saved_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Saved>;
};

/** on_conflict condition type for table "saved" */
export type Saved_On_Conflict = {
  constraint: Saved_Constraint;
  update_columns?: Array<Saved_Update_Column>;
  where?: InputMaybe<Saved_Bool_Exp>;
};

/** Ordering options when selecting data from "saved". */
export type Saved_Order_By = {
  created_at?: InputMaybe<Order_By>;
  saved_uuid?: InputMaybe<Order_By>;
  smoothieID?: InputMaybe<Order_By>;
  smoothy?: InputMaybe<Smoothies_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: saved */
export type Saved_Pk_Columns_Input = {
  saved_uuid: Scalars['uuid']['input'];
};

/** select columns of table "saved" */
export enum Saved_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SavedUuid = 'saved_uuid',
  /** column name */
  SmoothieId = 'smoothieID',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "saved" */
export type Saved_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  saved_uuid?: InputMaybe<Scalars['uuid']['input']>;
  smoothieID?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "saved" */
export type Saved_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Saved_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Saved_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  saved_uuid?: InputMaybe<Scalars['uuid']['input']>;
  smoothieID?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "saved" */
export enum Saved_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  SavedUuid = 'saved_uuid',
  /** column name */
  SmoothieId = 'smoothieID',
  /** column name */
  UserId = 'user_id'
}

export type Saved_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Saved_Set_Input>;
  /** filter the rows which have to be updated */
  where: Saved_Bool_Exp;
};

/** columns and relationships of "smoothies" */
export type Smoothies = {
  __typename?: 'smoothies';
  /** An object relationship */
  article1: Articles;
  /** An object relationship */
  article2?: Maybe<Articles>;
  /** An object relationship */
  article3?: Maybe<Articles>;
  /** An array relationship */
  saveds: Array<Saved>;
  /** An aggregate relationship */
  saveds_aggregate: Saved_Aggregate;
  smoothie_article1_id: Scalars['Int']['output'];
  smoothie_article2_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Int']['output']>;
  smoothie_author_id: Scalars['uuid']['output'];
  smoothie_created_at: Scalars['timestamptz']['output'];
  smoothie_shared_times: Scalars['Int']['output'];
  smoothie_uuid: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "smoothies" */
export type SmoothiesSavedsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


/** columns and relationships of "smoothies" */
export type SmoothiesSaveds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};

/** aggregated selection of "smoothies" */
export type Smoothies_Aggregate = {
  __typename?: 'smoothies_aggregate';
  aggregate?: Maybe<Smoothies_Aggregate_Fields>;
  nodes: Array<Smoothies>;
};

export type Smoothies_Aggregate_Bool_Exp = {
  count?: InputMaybe<Smoothies_Aggregate_Bool_Exp_Count>;
};

export type Smoothies_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Smoothies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Smoothies_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "smoothies" */
export type Smoothies_Aggregate_Fields = {
  __typename?: 'smoothies_aggregate_fields';
  avg?: Maybe<Smoothies_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Smoothies_Max_Fields>;
  min?: Maybe<Smoothies_Min_Fields>;
  stddev?: Maybe<Smoothies_Stddev_Fields>;
  stddev_pop?: Maybe<Smoothies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Smoothies_Stddev_Samp_Fields>;
  sum?: Maybe<Smoothies_Sum_Fields>;
  var_pop?: Maybe<Smoothies_Var_Pop_Fields>;
  var_samp?: Maybe<Smoothies_Var_Samp_Fields>;
  variance?: Maybe<Smoothies_Variance_Fields>;
};


/** aggregate fields of "smoothies" */
export type Smoothies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Smoothies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "smoothies" */
export type Smoothies_Aggregate_Order_By = {
  avg?: InputMaybe<Smoothies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Smoothies_Max_Order_By>;
  min?: InputMaybe<Smoothies_Min_Order_By>;
  stddev?: InputMaybe<Smoothies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Smoothies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Smoothies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Smoothies_Sum_Order_By>;
  var_pop?: InputMaybe<Smoothies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Smoothies_Var_Samp_Order_By>;
  variance?: InputMaybe<Smoothies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "smoothies" */
export type Smoothies_Arr_Rel_Insert_Input = {
  data: Array<Smoothies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Smoothies_On_Conflict>;
};

/** aggregate avg on columns */
export type Smoothies_Avg_Fields = {
  __typename?: 'smoothies_avg_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "smoothies" */
export type Smoothies_Avg_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "smoothies". All fields are combined with a logical 'AND'. */
export type Smoothies_Bool_Exp = {
  _and?: InputMaybe<Array<Smoothies_Bool_Exp>>;
  _not?: InputMaybe<Smoothies_Bool_Exp>;
  _or?: InputMaybe<Array<Smoothies_Bool_Exp>>;
  article1?: InputMaybe<Articles_Bool_Exp>;
  article2?: InputMaybe<Articles_Bool_Exp>;
  article3?: InputMaybe<Articles_Bool_Exp>;
  saveds?: InputMaybe<Saved_Bool_Exp>;
  saveds_aggregate?: InputMaybe<Saved_Aggregate_Bool_Exp>;
  smoothie_article1_id?: InputMaybe<Int_Comparison_Exp>;
  smoothie_article2_id?: InputMaybe<Int_Comparison_Exp>;
  smoothie_article3_id?: InputMaybe<Int_Comparison_Exp>;
  smoothie_author_id?: InputMaybe<Uuid_Comparison_Exp>;
  smoothie_created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  smoothie_shared_times?: InputMaybe<Int_Comparison_Exp>;
  smoothie_uuid?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "smoothies" */
export enum Smoothies_Constraint {
  /** unique or primary key constraint on columns "smoothie_uuid" */
  SmoothiesPkey = 'smoothies_pkey'
}

/** input type for incrementing numeric columns in table "smoothies" */
export type Smoothies_Inc_Input = {
  smoothie_article1_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article2_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article3_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_shared_times?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "smoothies" */
export type Smoothies_Insert_Input = {
  article1?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  article2?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  article3?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  saveds?: InputMaybe<Saved_Arr_Rel_Insert_Input>;
  smoothie_article1_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article2_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article3_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_author_id?: InputMaybe<Scalars['uuid']['input']>;
  smoothie_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  smoothie_shared_times?: InputMaybe<Scalars['Int']['input']>;
  smoothie_uuid?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Smoothies_Max_Fields = {
  __typename?: 'smoothies_max_fields';
  smoothie_article1_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Int']['output']>;
  smoothie_author_id?: Maybe<Scalars['uuid']['output']>;
  smoothie_created_at?: Maybe<Scalars['timestamptz']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Int']['output']>;
  smoothie_uuid?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "smoothies" */
export type Smoothies_Max_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_author_id?: InputMaybe<Order_By>;
  smoothie_created_at?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
  smoothie_uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Smoothies_Min_Fields = {
  __typename?: 'smoothies_min_fields';
  smoothie_article1_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Int']['output']>;
  smoothie_author_id?: Maybe<Scalars['uuid']['output']>;
  smoothie_created_at?: Maybe<Scalars['timestamptz']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Int']['output']>;
  smoothie_uuid?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "smoothies" */
export type Smoothies_Min_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_author_id?: InputMaybe<Order_By>;
  smoothie_created_at?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
  smoothie_uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "smoothies" */
export type Smoothies_Mutation_Response = {
  __typename?: 'smoothies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Smoothies>;
};

/** input type for inserting object relation for remote table "smoothies" */
export type Smoothies_Obj_Rel_Insert_Input = {
  data: Smoothies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Smoothies_On_Conflict>;
};

/** on_conflict condition type for table "smoothies" */
export type Smoothies_On_Conflict = {
  constraint: Smoothies_Constraint;
  update_columns?: Array<Smoothies_Update_Column>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};

/** Ordering options when selecting data from "smoothies". */
export type Smoothies_Order_By = {
  article1?: InputMaybe<Articles_Order_By>;
  article2?: InputMaybe<Articles_Order_By>;
  article3?: InputMaybe<Articles_Order_By>;
  saveds_aggregate?: InputMaybe<Saved_Aggregate_Order_By>;
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_author_id?: InputMaybe<Order_By>;
  smoothie_created_at?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
  smoothie_uuid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: smoothies */
export type Smoothies_Pk_Columns_Input = {
  smoothie_uuid: Scalars['uuid']['input'];
};

/** select columns of table "smoothies" */
export enum Smoothies_Select_Column {
  /** column name */
  SmoothieArticle1Id = 'smoothie_article1_id',
  /** column name */
  SmoothieArticle2Id = 'smoothie_article2_id',
  /** column name */
  SmoothieArticle3Id = 'smoothie_article3_id',
  /** column name */
  SmoothieAuthorId = 'smoothie_author_id',
  /** column name */
  SmoothieCreatedAt = 'smoothie_created_at',
  /** column name */
  SmoothieSharedTimes = 'smoothie_shared_times',
  /** column name */
  SmoothieUuid = 'smoothie_uuid'
}

/** input type for updating data in table "smoothies" */
export type Smoothies_Set_Input = {
  smoothie_article1_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article2_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article3_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_author_id?: InputMaybe<Scalars['uuid']['input']>;
  smoothie_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  smoothie_shared_times?: InputMaybe<Scalars['Int']['input']>;
  smoothie_uuid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Smoothies_Stddev_Fields = {
  __typename?: 'smoothies_stddev_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "smoothies" */
export type Smoothies_Stddev_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Smoothies_Stddev_Pop_Fields = {
  __typename?: 'smoothies_stddev_pop_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "smoothies" */
export type Smoothies_Stddev_Pop_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Smoothies_Stddev_Samp_Fields = {
  __typename?: 'smoothies_stddev_samp_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "smoothies" */
export type Smoothies_Stddev_Samp_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "smoothies" */
export type Smoothies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Smoothies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Smoothies_Stream_Cursor_Value_Input = {
  smoothie_article1_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article2_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_article3_id?: InputMaybe<Scalars['Int']['input']>;
  smoothie_author_id?: InputMaybe<Scalars['uuid']['input']>;
  smoothie_created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  smoothie_shared_times?: InputMaybe<Scalars['Int']['input']>;
  smoothie_uuid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Smoothies_Sum_Fields = {
  __typename?: 'smoothies_sum_fields';
  smoothie_article1_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Int']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Int']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "smoothies" */
export type Smoothies_Sum_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** update columns of table "smoothies" */
export enum Smoothies_Update_Column {
  /** column name */
  SmoothieArticle1Id = 'smoothie_article1_id',
  /** column name */
  SmoothieArticle2Id = 'smoothie_article2_id',
  /** column name */
  SmoothieArticle3Id = 'smoothie_article3_id',
  /** column name */
  SmoothieAuthorId = 'smoothie_author_id',
  /** column name */
  SmoothieCreatedAt = 'smoothie_created_at',
  /** column name */
  SmoothieSharedTimes = 'smoothie_shared_times',
  /** column name */
  SmoothieUuid = 'smoothie_uuid'
}

export type Smoothies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Smoothies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Smoothies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Smoothies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Smoothies_Var_Pop_Fields = {
  __typename?: 'smoothies_var_pop_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "smoothies" */
export type Smoothies_Var_Pop_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Smoothies_Var_Samp_Fields = {
  __typename?: 'smoothies_var_samp_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "smoothies" */
export type Smoothies_Var_Samp_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Smoothies_Variance_Fields = {
  __typename?: 'smoothies_variance_fields';
  smoothie_article1_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article2_id?: Maybe<Scalars['Float']['output']>;
  smoothie_article3_id?: Maybe<Scalars['Float']['output']>;
  smoothie_shared_times?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "smoothies" */
export type Smoothies_Variance_Order_By = {
  smoothie_article1_id?: InputMaybe<Order_By>;
  smoothie_article2_id?: InputMaybe<Order_By>;
  smoothie_article3_id?: InputMaybe<Order_By>;
  smoothie_shared_times?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** fetch data from the table in a streaming manner: "articles" */
  articles_stream: Array<Articles>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "fruits" */
  fruits: Array<Fruits>;
  /** fetch aggregated fields from the table: "fruits" */
  fruits_aggregate: Fruits_Aggregate;
  /** fetch data from the table: "fruits" using primary key columns */
  fruits_by_pk?: Maybe<Fruits>;
  /** fetch data from the table in a streaming manner: "fruits" */
  fruits_stream: Array<Fruits>;
  /** An array relationship */
  join_article_fruits: Array<Join_Article_Fruits>;
  /** An aggregate relationship */
  join_article_fruits_aggregate: Join_Article_Fruits_Aggregate;
  /** fetch data from the table: "join_article_fruits" using primary key columns */
  join_article_fruits_by_pk?: Maybe<Join_Article_Fruits>;
  /** fetch data from the table in a streaming manner: "join_article_fruits" */
  join_article_fruits_stream: Array<Join_Article_Fruits>;
  /** fetch data from the table: "join_article_lexique" */
  join_article_lexique: Array<Join_Article_Lexique>;
  /** fetch aggregated fields from the table: "join_article_lexique" */
  join_article_lexique_aggregate: Join_Article_Lexique_Aggregate;
  /** fetch data from the table: "join_article_lexique" using primary key columns */
  join_article_lexique_by_pk?: Maybe<Join_Article_Lexique>;
  /** fetch data from the table in a streaming manner: "join_article_lexique" */
  join_article_lexique_stream: Array<Join_Article_Lexique>;
  /** fetch data from the table: "saved" */
  saved: Array<Saved>;
  /** fetch aggregated fields from the table: "saved" */
  saved_aggregate: Saved_Aggregate;
  /** fetch data from the table: "saved" using primary key columns */
  saved_by_pk?: Maybe<Saved>;
  /** fetch data from the table in a streaming manner: "saved" */
  saved_stream: Array<Saved>;
  /** An array relationship */
  smoothies: Array<Smoothies>;
  /** An aggregate relationship */
  smoothies_aggregate: Smoothies_Aggregate;
  /** fetch data from the table: "smoothies" using primary key columns */
  smoothies_by_pk?: Maybe<Smoothies>;
  /** fetch data from the table in a streaming manner: "smoothies" */
  smoothies_stream: Array<Smoothies>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};


export type Subscription_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticles_By_PkArgs = {
  article_id: Scalars['Int']['input'];
};


export type Subscription_RootArticles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Articles_Stream_Cursor_Input>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFruitsArgs = {
  distinct_on?: InputMaybe<Array<Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fruits_Order_By>>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};


export type Subscription_RootFruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fruits_Order_By>>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};


export type Subscription_RootFruits_By_PkArgs = {
  fruit_id: Scalars['Int']['input'];
};


export type Subscription_RootFruits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fruits_Stream_Cursor_Input>>;
  where?: InputMaybe<Fruits_Bool_Exp>;
};


export type Subscription_RootJoin_Article_FruitsArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


export type Subscription_RootJoin_Article_Fruits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Fruits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Fruits_Order_By>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


export type Subscription_RootJoin_Article_Fruits_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootJoin_Article_Fruits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Join_Article_Fruits_Stream_Cursor_Input>>;
  where?: InputMaybe<Join_Article_Fruits_Bool_Exp>;
};


export type Subscription_RootJoin_Article_LexiqueArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


export type Subscription_RootJoin_Article_Lexique_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Join_Article_Lexique_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Join_Article_Lexique_Order_By>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


export type Subscription_RootJoin_Article_Lexique_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootJoin_Article_Lexique_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Join_Article_Lexique_Stream_Cursor_Input>>;
  where?: InputMaybe<Join_Article_Lexique_Bool_Exp>;
};


export type Subscription_RootSavedArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


export type Subscription_RootSaved_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


export type Subscription_RootSaved_By_PkArgs = {
  saved_uuid: Scalars['uuid']['input'];
};


export type Subscription_RootSaved_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Saved_Stream_Cursor_Input>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


export type Subscription_RootSmoothiesArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


export type Subscription_RootSmoothies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


export type Subscription_RootSmoothies_By_PkArgs = {
  smoothie_uuid: Scalars['uuid']['input'];
};


export type Subscription_RootSmoothies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Smoothies_Stream_Cursor_Input>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  saveds: Array<Saved>;
  /** An aggregate relationship */
  saveds_aggregate: Saved_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  /** An array relationship */
  smoothies: Array<Smoothies>;
  /** An aggregate relationship */
  smoothies_aggregate: Smoothies_Aggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSavedsArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSaveds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Saved_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Saved_Order_By>>;
  where?: InputMaybe<Saved_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSmoothiesArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSmoothies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Smoothies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Smoothies_Order_By>>;
  where?: InputMaybe<Smoothies_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  articles?: InputMaybe<Articles_Bool_Exp>;
  articles_aggregate?: InputMaybe<Articles_Aggregate_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  saveds?: InputMaybe<Saved_Bool_Exp>;
  saveds_aggregate?: InputMaybe<Saved_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  smoothies?: InputMaybe<Smoothies_Bool_Exp>;
  smoothies_aggregate?: InputMaybe<Smoothies_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  articles?: InputMaybe<Articles_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  saveds?: InputMaybe<Saved_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  smoothies?: InputMaybe<Smoothies_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  articles_aggregate?: InputMaybe<Articles_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  saveds_aggregate?: InputMaybe<Saved_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  smoothies_aggregate?: InputMaybe<Smoothies_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  userSession: Scalars['jsonb']['output'];
  virus: Scalars['String']['output'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  virus?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userSession?: InputMaybe<Scalars['jsonb']['input']>;
  virus?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};
