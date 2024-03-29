import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiBell } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { auth } from "../../firebase/clientApp";
import { useNavigate } from "react-router-dom";
import { visitorState } from "../../atoms/visitorsAtom";

const UserMenu = ({ user, notifications, open, setOpen, socket }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const resetStaffOnlineState = useResetRecoilState(visitorState);
  const { colorMode, toggleColorMode } = useColorMode();

  const logOut = async () => {
    await signOut(auth);
    resetStaffOnlineState();
    socket.emit("sendOffLineStatus", {
      isOffLine: "offline",
    });

    navigate("/");

   
  };

  // displays dasboard page to only clients
  const showProfile = user?.displayName || user?.email.split("@")[0];
  
  // useNavigate hook for routing
  let navigate = useNavigate();

  return (
    <Menu position="relative">
      <MenuButton
        padding="0px 6px"
        cursor="pointer"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {user ? (
              <>
                <Icon
                  as={BsFillPersonFill}
                  fontSize="24px"
                  color="gray.300"
                  mr={1}
                />
              </>
            ) : (
              <Icon as={VscAccount} fontSize="24px" color="gray.400" mr={1} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList
        position="absolute"
        top="1.5em"
        right={{ base: "-3rem", md: "-3rem" }}
      >
        {user ? (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
              display={
                showProfile === "chike" || showProfile === "nugo"
                  ? "none"
                  : "block"
              }
            >
              <Flex align="center" onClick={() => navigate("/profile")}>
                {user?.photoURL ? (
                  <Image
                    width="20px"
                    mr={2}
                    src={user.photoURL}
                    borderRadius="50%"
                  />
                ) : (
                  <Icon fontSize="20px" mr={2} as={CgProfile} />
                )}
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              display={{ base: "unset", md: "unset", lg: "none" }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Register
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              display={{ base: "unset", md: "unset", lg: "none" }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/check-in"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Check-In
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              display={{ base: "unset", md: "unset", lg: "none" }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/check-out"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Check-Out
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              sx={{
                display: { base: "block", lg: "none" },
              }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/appointment"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Appointments
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              display={{ base: "unset", md: "unset", lg: "none" }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/visitor-list"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Visitor-List
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              display={{ base: "block", md: "block", lg: "none" }}
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Link
                to="/analytics"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Analytics
              </Link>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
              display={{ base: "block", lg: "none" }}
            >
              <Flex align="center" position="relative" width="20px">
                <Icon
                  mr={2}
                  as={FiBell}
                  fontSize="25px"
                  color="white"
                  bg="gray.300"
                  rounded="full"
                  p={1}
                  cursor="pointer"
                  position="relative"
                  onClick={() => setOpen(!open)}
                ></Icon>
                {notifications.length > 0 && (
                  <Flex
                    bg="red"
                    position="absolute"
                    top="-2"
                    right="-3"
                    height="18px"
                    width="18px"
                    align="center"
                    justify="center"
                    borderRadius="50%"
                    color="white"
                    fontSize="9pt"
                  >
                    {notifications.length}
                  </Flex>
                )}
                Notification
              </Flex>
            </MenuItem>
            <MenuDivider
              sx={{
                display: { base: "block", lg: "none" },
              }}
            />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
              <Flex align="center">
                <Icon fontSize="20px" mr={2} as={FiSettings} />
                Settings
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
            >
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
                {colorMode === "light" ? (
                  <Text fontSize="10pt" ml={2}>
                    Dark Mode
                  </Text>
                ) : (
                  <Text fontSize="10pt" ml={2}>
                    Light Mode
                  </Text>
                )}
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
              onClick={logOut}
            >
              <Flex align="center">
                <Icon fontSize="20px" mr={2} as={MdOutlineLogin} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "electric.200", color: "white" }}
              onClick={() => setAuthModalState({ open: "true", view: "login" })}
            >
              <Flex align="center">
                <Icon fontSize="20px" mr={2} as={MdOutlineLogin} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
