import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "./app.css";
import React, { type PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeScript, Box } from "@mantine/core";

import Header from "@/components/layouts/Header/Header";
import { theme } from "@/lib/theme";
import Footer from "@/components/layouts/Footer";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Les animaux du futur",
  description: "",
};

export default function RootLayout({ children, ...props }: PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <MantineProvider theme={theme}>
            <Header />
            <Box component="main" pb={60}>
              {children}
            </Box>
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
