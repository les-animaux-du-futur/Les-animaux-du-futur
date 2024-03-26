import React, { PropsWithChildren } from "react";

import { SectionBackground } from "./SectionBackground";
import {
  Box,
  BoxProps,
  Container,
  Title,
  type ContainerProps,
} from "@mantine/core";

// ----------------------------------------------------------------

export interface SectionContainerProps extends ContainerProps {}

export const SectionContainer = (props: SectionContainerProps) => {
  const { children, ...other } = props;

  return (
    <Container px={30} size={1360} py={90} {...other}>
      {children}
    </Container>
  );
};

// ----------------------------------------------------------------

type TElement =
  | "section"
  | "header"
  | "article"
  | "footer"
  | "div"
  | "main"
  | "nav";

export interface SectionProps extends BoxProps, PropsWithChildren {
  id?: string;
  component?: TElement;
  fullwidth?: boolean;
  size?: ContainerProps["size"];
  withSeparator?: boolean;
  align?: "left" | "center" | "right";
  flex?: boolean;
  direction?: "row" | "column";
  onClick?: () => void;
}

export function Section(props: SectionProps) {
  const {
    id,
    children,
    component = "section",
    size,
    fullwidth,
    className,
    withSeparator,
    flex,
    direction,
    pt,
    py,
    pb,
    onClick,
    ...others
  } = props;

  const _size = size ?? "md";

  return (
    <Box
      id={id}
      {...others}
      component={component}
      className={className}
      pos="relative"
      w="100%"
      onClick={onClick}
    >
      {fullwidth ? (
        children
      ) : (
        <SectionContainer pt={pt} pb={pb} py={py} size={_size} h="100%" px={30}>
          {children}
        </SectionContainer>
      )}
    </Box>
  );
}

Section.Title = Title;
Section.Container = SectionContainer;
Section.Background = SectionBackground;
