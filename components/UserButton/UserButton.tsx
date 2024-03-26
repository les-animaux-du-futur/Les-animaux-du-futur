import { UnstyledButton, Group, Avatar, Text, Box } from "@mantine/core";

interface UserButtonProps {
  user: any;
}

export function UserButton({ user }: UserButtonProps) {
  const { avatarUrl, displayName, email } = user;
  return (
    <Box w="fit-content" p="sm">
      <Group w="fit-content">
        <Avatar src={avatarUrl ?? ""} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500} c="var(--mantine-color-body)">
            {displayName}
          </Text>

          <Text c="var(--mantine-color-body)" size="xs">
            {email}
          </Text>
        </div>
      </Group>
    </Box>
  );
}
