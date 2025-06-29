"use client";

import "app/globals.css";
import ChakraProviderWrapper from "./chakraProviders/providers";
import { Navigation } from "./Navigation/Navigation";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./chakraProviders/theme";
import { AuthProvider } from "./chakraProviders/KindeProvider";
import ShowToast from "./Components/ShowToast";
import { Suspense } from "react";

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
        <AuthProvider>
          <ChakraProviderWrapper>
            <Suspense fallback={null}>
              <ShowToast />
            </Suspense>
            <Navigation />
            {children}
          </ChakraProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
