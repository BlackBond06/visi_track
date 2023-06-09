import { extendTheme } from "@chakra-ui/react";
import {Button} from "./button"

// 2. Add your color mode config and extend the theme

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  colors: {
    brand: {
      100: "#f1ebe7",
    },
  },

  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },

  components:{
    Button
  }
});

export default theme;
