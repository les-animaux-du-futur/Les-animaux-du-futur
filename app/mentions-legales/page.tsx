"use client";
import { Box, Text, Title } from "@mantine/core";
import React from "react";

async function MentionsLegales() {
  return (
    <>
      <Box p={30}>
        <Title order={1} fz={"xxl"} pb={20}>
          Conditions générales d’utilisation de la web app “Le Daily Juice”
        </Title>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 1 : Objet
          </Title>
          <Text>
            Les présentes CGU ou Conditions Générales d’Utilisation encadrent
            juridiquement l’utilisation des services de la web app Le Daily
            Juice. L’accès à cette plateforme signifie l’acceptation des
            présentes CGU.
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 2 : Mentions légales
          </Title>
          <Text>
            Merci de lire attentivement les différentes modalités d’utilisation
            de cette web app avant de parcourir ces pages. En vous connectant
            sur cette web app, vous acceptez toutes les modalités. Aussi,
            conformément à l’article numéro 6 de la loi 2004-575 du 21 juin 2004
            pour la confiance dans l’économie numérique, les responsables de la
            web app Le Daily Juice sont :
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={3} fz={"l"}>
            Éditeur du site :
          </Title>
          <Text>
            Lucas Duverneuil, Jeanne Joncheray, Mattéo Lambert, Louis Lasserre,
            Lilou Lopez, Peyo Suire, Clément Vives 1 rue Jacques Ellul - 33000
            Bordeaux numéro de téléphone
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={3} fz={"l"}>
            Directeur de la publication :
          </Title>
          <Text>Mattéo Lambert Email : ledailyjuice@gmail.com</Text>
          <Text>05 57 12 20 44</Text>
        </Box>
        <Box pb={20}>
          <Title order={3} fz={"l"}>
            Hébergement :
          </Title>
          <Text>Hébergeur : Vercel</Text>
        </Box>
        <Box pb={20}>
          <Title fz={"xl"} order={2}>
            Article 3 : Propriété intellectuelle
          </Title>
          <Text>
            Les marques, logos ainsi que les contenus de la web app Le Daily
            Juice (illustrations graphiques, textes…) sont protégés par le Code
            de la propriété intellectuelle et par le droit d’auteur. La
            reproduction et la copie des contenus par l'utilisateur requièrent
            une autorisation préalable du site. Dans ce cas, toute utilisation à
            des usages commerciaux ou à des fins publicitaires est proscrite.
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 4 : Responsabilité
          </Title>
          <Text>
            Bien que les informations publiées sur le site soient réputées
            fiables, Le Daily Juice est une web app réalisée dans le cadre d’un
            projet étudiants MMI Bordeaux. Par conséquent, le site se réserve la
            faculté d’une non-garantie de la fiabilité des sources. Le site
            décline toute responsabilité concernant les éventuels virus pouvant
            infecter le matériel informatique de l'utilisateur après
            l’utilisation ou l’accès à ce site. Le site ne peut être tenu pour
            responsable en cas de force majeure ou du fait imprévisible et
            insurmontable d’un tiers. La garantie totale de la sécurité des
            données n’est pas assurée par le site. Cependant, le site s’engage à
            mettre en œuvre toutes les méthodes requises pour le faire au mieux.
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 5 : Boutons partage
          </Title>
          <Text>
            La web app peut être constituée de boutons “Partage”. Le Daily Juice
            n’a pas le contrôle de ce qui est envoyé et ne peut pas être tenu
            responsable du contenu partagé.
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 6 : Politique de confidentialité et cookies
          </Title>
          <Text>
            Lors des visites sur le site, l’installation automatique d’un cookie
            sur le logiciel de navigation de l'utilisateur peut survenir. Les
            cookies correspondent à de petits fichiers déposés temporairement
            sur le disque dur de l’ordinateur de l'utilisateur. Ces cookies sont
            nécessaires pour assurer l’accessibilité et la navigation sur le
            site. Ces fichiers ne comportent pas de données personnelles et ne
            peuvent pas être utilisés pour l’identification d’une personne.
            L’information présente dans les cookies est utilisée pour améliorer
            les performances de navigation sur la web app Le Daily Juice. Les
            cookies permettent d’enregistrer les smoothies générés et de faire
            un historique de tous les articles lus. Aucune donnée personnelle
            n’est collectée sur la web app Le Daily Juice. Pour toutes demandes
            au sujet des données personnelles, veuillez contacter :
            ledailyjuice@gmail.com La collecte de données est effectuée lors de
            la création d’un compte uniquement : Nom, prénom, pseudonymes, date
            de création du compte, date de la dernière visite, adresse mail,
            avatar, langue, numéro de téléphone (optionnel), mots de passes
            (encryptés) Nous ne revendons pas vos données.
          </Text>
        </Box>
        <Box pb={20}>
          <Title order={2} fz={"xl"}>
            Article 7 : Droit applicable et juridiction compétente
          </Title>
          <Text>
            Le présent contrat est soumis à la législation française. L’absence
            de résolution à l’amiable des cas de litige entre les parties
            implique le recours aux tribunaux français compétents pour régler le
            contentieux. En cas de litige, c’est le tribunal de Bordeaux qui
            sera compétent.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default MentionsLegales;
