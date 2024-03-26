export type TRessourceType = "LEXIQUE" | "ARTICLE";

export type fruit = {
  fruit_id: number;
  fruit_color: string;
};

export type TSmoothie = {
  smoothie_uuid: string;
  created_at: string;
  fruits: number[];
  smoothie_color: string;
  article1: number;
  article2: number | undefined;
  article3: number | undefined;
};
