import React from "react";

import classes from "./SectionBackground.module.css";
import {
  BoxProps,
  MantineColor,
  BackgroundImageProps,
  useMantineTheme,
  Box,
  BackgroundImage,
} from "@mantine/core";

// ----------------------------------------------------------------

export interface SectionBackgroundProps extends BoxProps {
  bg?: MantineColor;
  bgVariant?: number;
  src?: string;
  backgroundProps?: Omit<BackgroundImageProps, "src">;
}

export function SectionBackground({
  bg,
  bgVariant,
  className,
  src,
  backgroundProps,
  ...props
}: SectionBackgroundProps) {
  const theme = useMantineTheme();

  let _bg = { bg: `${bg}.${bgVariant ? 9 - bgVariant : 9}` };
  // if (bg) {
  //   _bg = {
  //     bg:
  //       theme.colorScheme === "dark"
  //         ? `${bg}.${bgVariant ? 9 - bgVariant : 9}`
  //          : `${bg}.${bgVariant ?? 0}`,
  //   };
  // }

  return (
    <Box className={classes.background} {..._bg} {...props}>
      {src && (
        <BackgroundImage src={src} {...backgroundProps} w="100%" h="100%" />
      )}
    </Box>
  );
}
