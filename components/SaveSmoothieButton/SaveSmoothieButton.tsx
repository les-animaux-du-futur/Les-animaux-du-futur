"use client";

import React, { useState } from "react";
import { ActionIcon, Button, CopyButton, Loader, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { toast, Toaster } from "react-hot-toast";

import SvgSave from "../Icons/Smoothie/Interactions/Save";
import { useAuthenticationStatus } from "@nhost/nextjs";

const INSERT_SAVED_SMOOTHIE = gql`
  mutation insert_saved_smoothie($smoothieID: uuid, $user_id: uuid) {
    insert_saved(objects: { smoothieID: $smoothieID, user_id: $user_id }) {
      returning {
        saved_uuid
      }
    }
  }
`;
const DELETE_SAVED_SMOOTHIE = gql`
  mutation del_saved_smoothie($user_id: uuid, $smoothieID: uuid) {
    delete_saved(
      where: { user_id: { _eq: $user_id }, smoothieID: { _eq: $smoothieID } }
    ) {
      returning {
        saved_uuid
      }
    }
  }
`;
const CHECK_ALREADY_SAVED = gql`
  query check_already_saved($user_id: uuid, $smoothie_uuid: uuid) {
    saved(
      where: { user_id: { _eq: $user_id }, smoothieID: { _eq: $smoothie_uuid } }
    ) {
      saved_uuid
    }
  }
`;

interface SaveSmoothieProps {
  smoothie_uuid: any;
  user_uuid: any;
  onClickSaved(): void;
}

function SaveSmoothieButton(props: SaveSmoothieProps) {
  let alreadySaved = false;
  const { isAuthenticated } = useAuthenticationStatus();

  const {
    data: datacheck,
    loading: loadingcheck,
    error: errorcheck,
  } = useQuery(CHECK_ALREADY_SAVED, {
    variables: {
      user_id: props.user_uuid,
      smoothie_uuid: props.smoothie_uuid,
    },
  });

  const { onClickSaved } = props;
  const [insertData, { loading, error, data }] = useMutation(
    INSERT_SAVED_SMOOTHIE
  );

  const [
    deleteData,
    { loading: loadingdelete, error: errordelete, data: datadelete },
  ] = useMutation(DELETE_SAVED_SMOOTHIE);

  if (loadingcheck) {
    return <Loader />;
  }
  if (errorcheck) {
    console.error(errorcheck);
    return <Text>Error</Text>;
  }

  if (datacheck.saved.length > 0 && !alreadySaved) {
    alreadySaved = true;
  }

  const handleInsert = async () => {
    await onClickSaved();
    const { errors } = await toast.promise(
      insertData({
        variables: {
          smoothieID: props.smoothie_uuid,
          user_id: props.user_uuid,
        },
        refetchQueries: [CHECK_ALREADY_SAVED, "check_already_saved"],
      }),
      {
        loading: "Sauvegarde de votre smoothie...",
        success: <b>Sauvegardé !</b>,
        error: <b>Une erreur interne est survenue</b>,
      }
    );
    if (errors) {
      toast.error("Une erreur est survenue");
      return;
    }
  };

  const handleDelete = async () => {
    const { errors } = await toast.promise(
      deleteData({
        variables: {
          smoothieID: props.smoothie_uuid,
          user_id: props.user_uuid,
        },
        refetchQueries: [CHECK_ALREADY_SAVED, "check_already_saved"],
      }),
      {
        loading: "Suppression de l'enregistrement...",
        success: <b>Votre smoothie n'est plus enregistré !</b>,
        error: <b>Une erreur interne est survenue</b>,
      }
    );
    if (errors) {
      toast.error("Une erreur est survenue");
      return;
    }
  };

  if (!isAuthenticated) {
    return (
      <ActionIcon
        color="transparent"
        component="a"
        className="buttonSmoothieInteract"
        size={40}
        href="/smoothies"
      >
        <SvgSave saved={false} />
      </ActionIcon>
    );
  }
  if (alreadySaved) {
    return (
      <ActionIcon
        color="transparent"
        className="buttonSmoothieInteract"
        size={40}
        onClick={handleDelete}
      >
        <SvgSave saved={true} />
      </ActionIcon>
    );
  }
  return (
    <ActionIcon
      color="transparent"
      className="buttonSmoothieInteract"
      size={40}
      onClick={handleInsert}
    >
      <SvgSave saved={false} />
    </ActionIcon>
  );
}

export default SaveSmoothieButton;
