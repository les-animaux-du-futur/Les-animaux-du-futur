"use client";

import { Avatar, Text, Group, Stack } from "@mantine/core";
import { IconPhoneCall, IconAt, IconArrowUpRight } from "@tabler/icons-react";
import classes from "./UserInfos.module.css";
import { User, useUserData } from "@nhost/nextjs";
import { isAuthenticated } from "@/lib/isAuthenticated";
import Link from "next/link";

function UserInfo() {
  const userInfos = useUserData() as User;

  const { email, displayName, avatarUrl, defaultRole, phoneNumber, roles } =
    userInfos;

  return (
    <>
      <Group wrap="nowrap" my="lg">
        <Avatar src={avatarUrl} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {defaultRole}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {displayName}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phoneNumber}
            </Text>
          </Group>
        </div>
      </Group>

      <Stack mt="lg">
        {(roles.includes("author") || roles.includes("admin")) && (
          <Link href={"/authors/articles"}>
            <Text display="flex" style={{ alignItems: "flex-end" }}>
              Voir mes articles <IconArrowUpRight />
            </Text>
          </Link>
        )}
        {roles.includes("admin") && (
          <Link href={"/admin/fruits"}>
            <Text display="flex" style={{ alignItems: "flex-end" }}>
              Éditer les fruits <IconArrowUpRight />
            </Text>
          </Link>
        )}
      </Stack>
    </>
  );
}

export default isAuthenticated(UserInfo);
