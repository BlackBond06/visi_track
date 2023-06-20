import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUsers } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/clientApp";
import RightContent from "../RightContent/RightContent";

const Navbar = ({ socket }) => {
  const [user, loading, error] = useAuthState(auth);
  const [notifications, setNotifications] = useState([]);

  //receive socket event notification  on visitor checkin
  useEffect(() => {
    socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notifications);

  return (
    <Stack
      boxShadow="2xl"
      rounded="md"
      height="80px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Flex
        margin="0px"
        align="center"
        width="inherit"
        padding="0 1rem 0 1rem"
        justify="space-around"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/">
            <Icon as={FaUsers} color="gold.200" fontSize={70} />
          </Link>
        </Box>
        <Flex
          align="center"
          padding={{ base: "0 0 0 7rem", md: "0 0 0 21rem", lg: "0 0 0 10rem" }}
          justifyContent="space-between"
        >
          <Flex
            display={{ base: "none", lg: "flex" }}
            mr={8}
            gap="1rem"
            color="gray.500"
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
              <Link to="/settings">Settings</Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }}>
              <Link to="/notification">
                <Flex align="center" position="relative" width="20px">
                  <Icon
                    as={FiBell}
                    fontSize="25px"
                    color="white"
                    bg="gray.300"
                    rounded="full"
                    p={1}
                    cursor="pointer"
                    position="relative"
                  ></Icon>
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
                    1
                  </Flex>
                </Flex>
              </Link>
            </Box>
          </Flex>

          <RightContent user={user} />
        </Flex>
      </Flex>
      <Flex
        width={{ base: "50%", lg: "25%" }}
        position="absolute"
        top="75px"
        right={{ base: "60px" }}
        border="1px solid"
        borderColor="red"
        zIndex={1}
        padding="10px"
        bg="gray.200"
        color="white"
        fontWeight={300}
        fontSize="12px"
      >
        {notifications.map((item) => (
          <>
            <Text>
              {item.senderName} has check-in to see {item.receiverName}
            </Text>
          </>
        ))}
      </Flex>
    </Stack>
  );
};

export default Navbar;
