import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/clientApp";
import RightContent from "../RightContent/RightContent";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      boxShadow="2xl"
      rounded="md"
      height="80px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxWidth="100vw"
    >
      <Flex
        margin="0px"
        align="center"
        width="inherit"
        padding="0 1rem 0 1rem"
        justify="space-between"
        maxWidth="100vw"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/">
            <Icon as={FaUsers} color="gold.200" fontSize={70} />
          </Link>
        </Box>
        <Flex
          align="center"
          flex={2}
          padding={{ base: "0 0 0 7rem", md: "0 0 0 27rem", lg: "0 0 0 3rem" }}
          justifyContent="space-between"
        >
          <Flex
            display={{ base: "none", lg: "flex" }}
            gap="1rem"
            color="gray.300"
            fontWeight={600}
          >
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/">Home</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/register">Register</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/check-in">Check-In</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/check-out">Check-Out</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/appointment">Appointment</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/visitor-list">Visitor-List</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/analytics">Analytics</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/support">Support</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/settings">Settings</Link>
            </Box>
          </Flex>
          <Flex
            align="center"
            justify="center"
            onClick={toggleColorMode}
            cursor="pointer"
            fontSize="25px"
          >
            {colorMode === "light" ? (
              <Icon
                as={MoonIcon}
                onClick={toggleColorMode}
                cursor="pointer"
                color="gray.300"
              />
            ) : (
              <Icon as={SunIcon} color="gray.300" />
            )}
          </Flex>
          <RightContent user={user} />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Navbar;
