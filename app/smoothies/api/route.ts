import { v4 as uuid } from "uuid";
import { gql } from "@apollo/client";
import { nhost } from "@/lib/nhostClient";
import { mixColor } from "@/lib/@utils/mixColor";
import { Articles, Join_Article_Fruits } from "@/lib/@types/graphql";

import type { TSmoothie, fruit } from "@/lib/@types/ressources";

const GET_SMOOTHIE_ARTICLES = gql/* GraphQL */ `
  query MyQuery2($where: join_article_fruits_bool_exp) {
    join_article_fruits(where: $where) {
      article {
        article_hat
        article_id
        article_title
      }
      fruit {
        fruit_id
        fruit_color
        fruit_name
      }
    }
  }
`;

/*
const fruits = [
        { fruit_id: 10, fruit_color: "#ff0000" },
        { fruit_id: 11, fruit_color: "#1A059F" },
        { fruit_id: 12, fruit_color: "#ebe134" },
      ];
*/

export async function POST(request: Request) {
  const requestData = await request.json();
  const fruits = requestData.fruits as fruit[];

  if (!fruits) {
    return new Response('Request body must contain a "fruits" key', {
      status: 400,
    });
  }
  const where = makeWhere(fruits);

  const data = await nhost.graphql.request(GET_SMOOTHIE_ARTICLES, {
    where: where,
  });

  if (data.error) {
    console.error(data.error);

    return new Response(`Error during request`, {
      status: 500,
    });
  }

  const articles = checkArticles(
    data.data.join_article_fruits as Join_Article_Fruits[],
    fruits.map(({ fruit_id }) => fruit_id)
  );

  if (articles.length <= 0) {
    return new Response(
      JSON.stringify({ smoothie_uuid: null, smoothie: null }),
      {
        status: 200,
      }
    );
  }

  const smoothieId = uuid();
  const now = new Date();

  const fruitsArr = fruits.map((fruit: fruit) => fruit.fruit_id);

  let finalArticles = [] as Articles[] | [];
  articles.map((article) => {
    if (article) {
      finalArticles.push(article);
    }
  });

  let smoothie: TSmoothie = {
    smoothie_uuid: smoothieId,
    created_at: JSON.stringify(now),
    fruits: fruitsArr,
    smoothie_color: mixColor(
      fruits[0].fruit_color,
      fruits[1].fruit_color,
      fruits[2].fruit_color,
      0.33
    ),
    article1: finalArticles[0]!.article.article_id,
    article2: finalArticles[1]?.article.article_id,
    article3: finalArticles[2]?.article.article_id,
  };

  return new Response(
    JSON.stringify({ smoothie_uuid: smoothieId, smoothie: smoothie }),
    {
      status: 200,
    }
  );
}

function makeWhere(fruits: fruit[]) {
  const fruitsIdWhere = {
    fruit_id: { _in: fruits.map(({ fruit_id }) => fruit_id) },
  };
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return {
    ...fruitsIdWhere,
    article: {
      article_created_at: { _gt: `${JSON.stringify(oneWeekAgo)}` },
      article_type: { _eq: "ARTICLE" },
    },
    article_id: { _nin: [1] },
  };
}

function checkArticles(
  articles: Join_Article_Fruits[],
  chosenFruits: number[]
): (Join_Article_Fruits | null)[] {
  const decountFruits = [...chosenFruits];

  return articles.map((joinArticle) => {
    const { fruit } = joinArticle;
    if (decountFruits.includes(fruit.fruit_id)) {
      const lastIndex = decountFruits.lastIndexOf(fruit.fruit_id);
      decountFruits.splice(lastIndex, 1);
      return joinArticle;
    }
  });
}
