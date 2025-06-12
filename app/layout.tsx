"use client";

import ChakraProviderWrapper from "./chakraProviders/providers";
import Navigation from "./Navigation/Navigation";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./chakraProviders/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <ChakraProviderWrapper>
          <Navigation />
          {children}
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}
