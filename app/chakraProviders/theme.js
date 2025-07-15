"use client"; // ✅ Ito ang pinakaimportante

import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const fonts = {
  heading: `poppins`,
  body: `poppins`,
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
        bg: props.colorMode === "dark" ? "#1A202C" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        transition: "background-color 0.8s ease",
      },
    }),
  },
});

export default theme;
