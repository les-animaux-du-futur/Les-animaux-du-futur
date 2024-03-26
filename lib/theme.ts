"use client";

import { generateColors } from "@mantine/colors-generator";
import {
  Text,
  Title,
  VariantColorsResolver,
  createTheme,
  defaultVariantColorsResolver,
  rem,
} from "@mantine/core";

export const theme = createTheme({
  focusRing: "auto",
  //activeClassName: ""
  fontFamily: "Roboto, sans-serif",
  fontFamilyMonospace: "Roboto",
  headings: { fontFamily: "Roboto" },

  colors: {
    //7
    primary: generateColors("#8AC926"),
    //3
    primaryDark: generateColors("#C184DE"),

    //fruits
    red: ["##C61D1E"],
    orange: generateColors("#FA8126"),
    yallow: generateColors("#FFD32B"),
  },

  defaultRadius: "xl",
  cursorType: "pointer",
  primaryColor: "primary",
  primaryShade: { light: 7, dark: 7 },

  fontSizes: {
    xxl: rem(24),
    xl: rem(20),
    lg: rem(16),
    md: rem(14),
    sm: rem(12),
    xs: rem(10),
  },

  headings: {
    sizes: {
      h1: {
        fontSize: rem(24),
        fontWeight: "bold",
      },
    },
  },
  components: {
    Text: Text.extend({
      defaultProps: {
        component: "p",
        c: "var(--mantine-color-bright)",
        fw: 600,
      },
    }),

    Title: Title.extend({
      defaultProps: {
        c: "var(--mantine-color-bright)",
      },
    }),
    Flex: {
      defaultProps: { children: "salut" },
    },
    Box: {
      defaultProps: { children: "salut" },
    },
  },
});
