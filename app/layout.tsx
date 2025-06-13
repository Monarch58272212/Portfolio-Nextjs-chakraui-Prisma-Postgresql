"use client";

import ChakraProviderWrapper from "./chakraProviders/providers";
import Navigation from "./Navigation/Navigation";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./chakraProviders/theme";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

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
        <KindeProvider>
          <ChakraProviderWrapper>
            <Navigation />
            {children}
          </ChakraProviderWrapper>
        </KindeProvider>
      </body>
    </html>
  );
}
