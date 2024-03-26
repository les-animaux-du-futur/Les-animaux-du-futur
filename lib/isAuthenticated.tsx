"use client";

import React, { ReactElement } from "react";

import {
  useAuthenticationStatus,
  useUserId,
  useUserRoles,
} from "@nhost/nextjs";
import { Box, Loader } from "@mantine/core";
import { redirect } from "next/navigation";

export function isAuthenticated(
  Component: () => ReactElement,
  role?: string[],
  id?: string
) {
  return function (props) {
    const userRole = useUserRoles();
    const userId = useUserId();
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    if (isLoading) {
      return (
        <Box display="grid" style={{ placeItems: "center" }} w="100%" h="100%">
          <Loader />
        </Box>
      );
    }

    if (!isAuthenticated) {
      redirect("/sign-in");
    }

    if (role && !role.some((element) => userRole.includes(element))) {
      redirect("/sign-in");
    }

    if (id && id !== userId) {
      redirect("/sign-in");
    }

    return <p {...props} />;
  };
}
