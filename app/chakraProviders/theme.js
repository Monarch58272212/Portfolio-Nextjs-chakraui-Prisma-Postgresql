"use client"; // ✅ Ito ang pinakaimportante

import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  disableTransitionOnChange: true,
};

const fonts = {
  heading: `Fira Code`,
  body: `Fira Code`,
};

const theme = extendTheme({
  config,
  fonts,
  styles: {
    html: {
      scrollBehavior: "smooth",
    },
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1A202C" : "#FFFFFF",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        transition: "background-color 0.2s ease",
      },
    }),
  },
});

export default theme;
