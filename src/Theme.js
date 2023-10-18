// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

// 3. extend the theme

export default theme;
