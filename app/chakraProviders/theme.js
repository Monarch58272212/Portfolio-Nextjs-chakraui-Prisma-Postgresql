"use client"; // ✅ Ito ang pinakaimportante

import { extendTheme } from "@chakra-ui/react";

// Example config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const fonts = {
  heading: `Fira Code`,
  body: `Fira Code`,
};

const theme = extendTheme({
  config,
  fonts,
  styles: {
    global: {
      body: {
        transition: "background-color 0.2s",
      },
    },
  },
});

export default theme;
