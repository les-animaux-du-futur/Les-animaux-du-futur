"use client";

import React, { ReactElement } from "react";

import { useUserId, useUserRoles } from "@nhost/nextjs";

import { useAuthenticationStatus } from "@nhost/nextjs";

export function isAuthenticatedForComponents<ComponentsProps>(
  Component: (componentsProps: ComponentsProps) => ReactElement,
  role?: string[],
  id?: string
) {
  return function AuthProtected(props: ComponentsProps) {
    const userRole = useUserRoles();
    const userId = useUserId();
    const { isAuthenticated } = useAuthenticationStatus();

    if (!isAuthenticated) {
      return null;
    }

    if (role && !role.some((element) => userRole.includes(element))) {
      return null;
    }

    if (id && id !== userId) {
      return null;
    }

    return <Component {...props} />;
  };
}
