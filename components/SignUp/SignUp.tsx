"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useSignUpEmailPassword } from "@nhost/nextjs";
import {
  Card,
  Text,
  TextInput,
  Grid,
  Checkbox,
  Box,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function SignUp() {
  const form = useForm({
    initialValues: { pseudo: "", email: "", password: "" },
  });

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, pseudo } = form.values;

    await signUpEmailPassword(email, password, {
      displayName: pseudo,
      metadata: {
        pseudo,
      },
    });
  };

  if (isSuccess) {
    redirect("/");
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <Box pb={50}>
      <Text
        fz={60}
        inherit
        ml={"xl"}
        mb={"xl"}
        variant="gradient"
        component="span"
        gradient={{ from: "pink", to: "yellow" }}
      >
        S'inscrire
      </Text>
      <Grid w="60%" mx="auto">
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder mx="auto">
            {needsEmailVerification ? (
              <Text>
                Verifiez votre boite mail et suivez le lien de vérification pour
                verifier votre adresse mail.
              </Text>
            ) : (
              <form onSubmit={handleOnSubmit}>
                <div>
                  <TextInput
                    label="Pseudo"
                    {...form.getInputProps("pseudo")}
                    disabled={disableForm}
                    //required
                  />
                </div>
                <TextInput
                  //type="email"
                  label="Email"
                  {...form.getInputProps("email")}
                  disabled={disableForm}
                  //required
                />
                <TextInput
                  type="password"
                  label="Mot de passe"
                  {...form.getInputProps("password")}
                  disabled={disableForm}
                  required
                />

                <Checkbox
                  pt={20}
                  label="En me créant un compte, j'accepte et je confirme avoir lu les mentions légales"
                  required
                />

                <Button
                  type="submit"
                  disabled={disableForm}
                  mt="md"
                  loading={isLoading}
                >
                  Créer un compte
                </Button>

                {isError ? <Text c="red.5">{error?.message}</Text> : null}
              </form>
            )}
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text>
            Vous avez déjà un compte ? <Link href="/sign-in">Se connecter</Link>
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default SignUp;
