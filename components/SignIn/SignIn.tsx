"use client";
import { FormEvent } from "react";
import Link from "next/link";

import { redirect } from "next/navigation";
import { useSignInEmailPassword } from "@nhost/nextjs";

import { useForm } from "@mantine/form";

import { Grid, Card, TextInput, Text, Button } from "@mantine/core";

const SignIn = () => {
  const form = useForm({ initialValues: { email: "", password: "" } });

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInEmailPassword(form.values.email, form.values.password);
  };

  if (isSuccess) {
    redirect("/");
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div>
      <Text
        fz={60}
        inherit
        ml={"xl"}
        mb={"xl"}
        variant="gradient"
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        Se connecter
      </Text>
      <Grid w="60%" mx="auto">
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder mx="auto">
            <form onSubmit={handleOnSubmit}>
              <TextInput
                type="email"
                label="Email"
                {...form.getInputProps("email")}
                disabled={disableForm}
                required
              />
              <TextInput
                type="password"
                label="Mot de passe"
                {...form.getInputProps("password")}
                disabled={disableForm}
                required
              />

              <Button
                mt="md"
                type="submit"
                disabled={disableForm}
                loading={isLoading}
              >
                Se connecter
              </Button>

              {isError ? <Text c="red.5">{error?.message}</Text> : null}
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col>
          <Text>
            Vous n'avez pas encore de compte ?{" "}
            <Link href="/sign-up">Créez en un !</Link>
          </Text>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SignIn;
