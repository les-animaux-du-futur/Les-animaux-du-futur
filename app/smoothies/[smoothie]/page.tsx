import React from "react";
import { nhost } from "@/lib/nhostClient";
import { gql } from "@apollo/client";
import Smoothie from "@/components/Smoothies/Smoothie";
import { FormatedDate } from "@/lib/@utils/formatedDate";
import { Section } from "@/components/layouts/Section";

const Query_Smoothies = gql`
  query smoothies($id: uuid!) {
    smoothies_by_pk(smoothie_uuid: $id) {
      smoothie_uuid
      smoothie_shared_times
      smoothie_created_at
      smoothie_color
      user {
        displayName
      }
      article1 {
        article_title
        article_video
        article_id
        article_content
        join_article_fruits {
          fruit {
            fruit_color
            fruit_material
            fruit_name
            fruit_topic
          }
        }
      }
      article2 {
        article_title
        article_video
        article_content
        article_id
        join_article_fruits {
          fruit {
            fruit_color
            fruit_material
            fruit_name
            fruit_topic
          }
        }
      }
      article3 {
        article_title
        article_id
        article_video
        article_content
        join_article_fruits {
          fruit {
            fruit_color
            fruit_material
            fruit_name
            fruit_topic
          }
        }
      }
    }
  }
`;

async function GetSmoothie({ params }: { params: { smoothie: string } }) {
  const smoothieUuid = params.smoothie;
  const { error, data } = await nhost.graphql.request(Query_Smoothies, {
    id: smoothieUuid,
  });

  if (error) {
    console.error(error);
    return "erreur";
  }

  const smoothiedata = data.smoothies_by_pk;
  const color = smoothiedata.smoothie_color;

  const title = "Smoothie";
  const date = FormatedDate(smoothiedata.smoothie_created_at);

  return (
    <Section size="sm">
      <Smoothie
        title={title}
        date={date}
        smoothie_color={color}
        article1={smoothiedata.article1}
        article2={smoothiedata.article2}
        article3={smoothiedata.article3}
        {...smoothiedata}
      />
    </Section>
  );
}

export default GetSmoothie;
