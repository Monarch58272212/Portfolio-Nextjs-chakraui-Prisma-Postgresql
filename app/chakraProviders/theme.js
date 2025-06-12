"use client"; // ✅ Ito ang pinakaimportante

import { extendTheme } from "@chakra-ui/react";

// Example config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `  Fira Code`,
  body: ` Fira Code`,
};

const theme = extendTheme({ config, fonts });

export default theme;
