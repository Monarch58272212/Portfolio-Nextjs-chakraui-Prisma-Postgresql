"use client"; // ✅ Dapat client ito

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme"; // adjust path kung nasa ibang folder

export default function ChakraProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
