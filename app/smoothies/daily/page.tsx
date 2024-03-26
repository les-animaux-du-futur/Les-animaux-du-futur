"use client";

import React, { useEffect, useState } from "react";
import { SmoothieFromLocal } from "@/components/SmoothieFromLocal/SmoothieFromLocal";
import { Section } from "@/components/layouts/Section";

function DailyPage() {
  const [data, setData] = useState();

  useEffect(() => {
    const smoothies = JSON.parse(localStorage.getItem("dailySmoothie") ?? "{}");

    setData(smoothies);
  }, []);

  if (!data) {
    return <p>no data</p>;
  }

  const { article1, article2, article3 } = data;
  let articlesIds = [article1];

  if (article2) {
    articlesIds.push(article2);
  }
  if (article3) {
    articlesIds.push(article3);
  }

  return (
    data && (
      <Section size="sm">
        <SmoothieFromLocal
          articlesIds={articlesIds}
          date={JSON.parse(data.created_at)}
          smoothieData={data}
        />
      </Section>
    )
  );
}

export default DailyPage;
