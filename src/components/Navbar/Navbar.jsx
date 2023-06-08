import {
  Box,
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
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
        <Box>
          <Heading>VisiTrack</Heading>
        </Box>
        <Flex
          align="center"
          flex={2}
          padding={{ base: "0 0 0 7rem", md: "0 0 0 27rem", lg: "0 0 0 7rem" }}
          justifyContent="space-between"
        >
          <Flex display={{ base: "none", lg: "flex" }} gap="2rem">
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/">Home</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/register">Register</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/check-in">Check-In</Link>
            </Box>
            <Link to="/check-out">Check-Out</Link>
            <Link to="/appointment">Appointment</Link>
            <Link to="/visitor-list">Visitor-List</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/support">Support</Link>
          </Flex>
          <Flex
            align="center"
            justify="center"
            onClick={toggleColorMode}
            cursor="pointer"
            fontSize="25px"
          >
            {colorMode === "light" ? (
              <Icon as={MoonIcon} onClick={toggleColorMode} cursor="pointer" />
            ) : (
              <Icon as={SunIcon} sx={{ color: "white" }} />
            )}
          </Flex>
          <Box display={{ base: "none", lg: "unset" }}>Logout</Box>
          <Box
            display={{ base: "unset", md: "unset", lg: "none" }}
            position="relative"
          >
            <Box>
              <Menu>
                <MenuButton
                  as={HamburgerIcon}
                  cursor="pointer"
                  color="brand.900"
                  fontSize={{ base: "2rem", md: "1.5rem" }}
                />

                <MenuList
                  position="absolute"
                  top="1em"
                  width="100%"
                  right={{ base: "-2rem", md: "-1rem" }}
                >
                  <MenuItem>
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/register"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Register
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    {" "}
                    <Link
                      to="/check-in"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Check-In
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/check-out"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Check-Out
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/appointment"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Appointments
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/visitor-list"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Visitor-List
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/analytics"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Analytics
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/settings"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link
                      to="/support"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Support
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Navbar;
