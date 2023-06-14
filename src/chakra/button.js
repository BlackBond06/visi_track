import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  // style object for base or default style

    baseStyle: {
      borderRadius: "60px",
      fontSize: "10pt",
      fontWeight: 700,
      _focus: {
        boxShadow: "none",
      },
    },
    sizes: {
      sm: {
        fontSize: "8pt",
      },
      md: {
        fontSize: "10pt",
        // height: "28px",
      },
    },
    variants: {
      solid: {
        color: "white",
        bg: "#6A5ACD",
        _hover: {
          bg: "#6A5ACD",
        },
      },
      outline: {
        color: "#6A5ACD",
        border: "1px solid",
        borderColor: "#6A5ACD",
      },
      oauth: {
        height: "34px",
        border: "1px solid",
        borderColor: "gray.300",
        _hover: {
          bg: "gray.50",
        },
      },
    },
};
