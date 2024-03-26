import React from "react";
import SmoothiesPage from "@/components/Smoothies/SmoothiePage";
import { Section } from "@/components/layouts/Section";
import { Title } from "@mantine/core";

function SmoothiesPageServer({ params }: { params: { smoothieId: string } }) {
  return (
    <Section size="sm">
      <Title order={1} my={"lg"}>
        Smoothies enregistrés
      </Title>
      <SmoothiesPage smoothieId={params.smoothieId} />
    </Section>
  );
}

export default SmoothiesPageServer;
