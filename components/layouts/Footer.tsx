"use client";
import React from "react";

import { Box } from "@mantine/core";

import { Section } from "./Section";

function Footer() {
  return (
    <Box component="footer" pos="fixed" bottom={0} left={0} right={0} size="sm">
      <Section size="md" py="md">
        Footer
      </Section>
    </Box>
  );
}

export default Footer;
