import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowRight, BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStaffStateValue } from "../../../hooks/useStaffStateValue";
import { visitorAtomState } from "../../../atoms/visitorsAtom";
const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: "0.4",
    },
  },
};

const ClientProfile = ({ socket, user }) => {
  const { staffStateValue, loading, checkOut } = useStaffStateValue();
  const [onlineStaff, setOnlineStaff] = useState(() => {
    const savedEventData = localStorage.getItem("eventData");
    return savedEventData ? JSON.parse(savedEventData) : [];
  });
  const [onLineOrOffLineStatus, setOnLineOrOffLineStatus] = useState(() => {
    let savedEventData = localStorage.getItem("onlineData");
    return savedEventData ? JSON.parse(savedEventData) : "";
  });
  let navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      socket.on("getNewUser", (data) => {
        localStorage.setItem("eventData", JSON.stringify(data));
        let savedEventData = localStorage.getItem("eventData");
        setOnlineStaff(JSON.parse(savedEventData));
      });
    }
  }, [socket]);

  useEffect(() => {
    const handleUserLogin = (userId) => {
      setOnLineOrOffLineStatus(userId.isOnLine);
      localStorage.setItem("onlineData", JSON.stringify(userId.isOnLine));
    };

    const handleUserLogout = (userId) => {
      setOnLineOrOffLineStatus(userId.isOffLine);
      localStorage.removeItem("onlineData");
    };

    socket?.on("getOffLineStatus", handleUserLogout);
    socket?.on("getOnLineStatus", handleUserLogin);
  }, [socket]);

  const isJoined = staffStateValue.mySnippets.find(
    (item) => onlineStaff.userName === item.visitorId
  );

  // console.log(staffStateValue);

  
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      {user ? (
        <Flex width="100%" direction="column">
          <Flex flexGrow={1} justify="center" mt="50px">
            <Flex
              width="95%"
              maxWidth="920px"
              direction={{ base: "column", md: "unset" }}
              gap="50px"
            >
              <Flex
                flex={3}
                border="1px solid"
                borderColor="electric.200"
                height={{ base: "auto", md: "126px" }}
                bg="#fff"
                p="10px 20px 10px 20px"
                borderRadius="10px"
                gap={5}
                direction="column"
              >
                <Flex gap={5}>
                  {user?.photoURL ? (
                    <Image
                      width="50px"
                      height="50px"
                      mr={2}
                      src={user.photoURL}
                      borderRadius="50%"
                    />
                  ) : (
                    <Icon
                      as={BsFillPersonFill}
                      color="electric.200"
                      fontSize={64}
                      position="relative"
                      border="4px solid"
                      borderRadius="50%"
                      bg="gray.100"
                    />
                  )}

                  <Input
                    type="text"
                    border="1px solid"
                    placeholder="Filter your feed"
                    borderColor="electric.200"
                    outline="none"
                    height="55px"
                    borderRadius="25px"
                    mt={0.5}
                  />
                </Flex>
                <Flex>
                  <Text fontSize="10pt" color="rgb(0, 0, 0, 0.7)">
                    {user?.displayName || user.email.split("@")[0]}
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flex={2}
                border="1px solid"
                borderColor="electric.200"
                p="20px 15px 20px 15px"
                bg="#fff"
                borderRadius="10px"
                direction="column"
              >
                <Heading fontSize={18} color="rgb(0, 0, 0, 0.7)">
                  Your Feed
                </Heading>
                <Flex direction="column" gap={2}>
                  <Flex mt={7} gap={4}>
                    <Image
                      h={50}
                      borderRadius="50%"
                      src="https://media.licdn.com/dms/image/D5603AQE7J5B5EB7opQ/profile-displayphoto-shrink_100_100/0/1688661795662?e=1694044800&v=beta&t=OUaCH4Phbu3GfZ20pjnq-cI8_J2tXsBcJM0TRjtk1HY"
                    />
                    <Box>
                      <Heading color="rgb(0, 0, 0, 0.7)" fontSize={14}>
                        James Bond
                      </Heading>
                      <Text fontSize="9pt" color="rgb(0, 0, 0, 0.7)">
                        Associate, Sales Department
                      </Text>
                      <Button variant="outline" mt={3}>
                        offline
                      </Button>
                    </Box>
                  </Flex>
                  <Flex mt={3} gap={4}>
                    <Image
                      h={50}
                      borderRadius="50%"
                      src="https://media.licdn.com/dms/image/C4D0BAQHYemd2p7TxeQ/company-logo_100_100/0/1673333565608?e=1696464000&v=beta&t=3FrCkqzsp_iyrbVC0eJbxHaY6WDsJBOmfIFjNWRXpCU"
                    />
                    <Box>
                      <Heading color="rgb(0, 0, 0, 0.7)" fontSize={14}>
                        HackerRank
                      </Heading>
                      <Text fontSize="9pt" color="rgb(0, 0, 0, 0.7)">
                        Associate, Shipping Department
                      </Text>
                      <Button variant="outline" mt={3}>
                        offline
                      </Button>
                    </Box>
                  </Flex>
                  <Flex mt={3} gap={4}>
                    <Image
                      h={50}
                      borderRadius="50%"
                      src="https://media.licdn.com/dms/image/D5603AQE7J5B5EB7opQ/profile-displayphoto-shrink_100_100/0/1688661795662?e=1694044800&v=beta&t=OUaCH4Phbu3GfZ20pjnq-cI8_J2tXsBcJM0TRjtk1HY"
                    />
                    <Box>
                      <Heading color="rgb(0, 0, 0, 0.7)" fontSize={14}>
                        Bill Gates
                      </Heading>
                      <Text fontSize="9pt" color="rgb(0, 0, 0, 0.7)">
                        Associate, HR
                      </Text>
                      <Button
                        variant={
                          isJoined && onLineOrOffLineStatus === "online"
                            ? "solid"
                            : "outline"
                        }
                        mt={3}
                        isLoading={loading}
                        onClick={() => checkOut("fred")}
                      >
                        {isJoined && onLineOrOffLineStatus === "online"
                          ? "online"
                          : "offline"}
                      </Button>
                    </Box>
                  </Flex>
                  <Flex
                    mt={3}
                    align="center"
                    gap={1}
                    cursor="pointer"
                    onClick={() => navigate("/visitor-list")}
                  >
                    <Text color="rgb(0, 0, 0, 0.7)" fontWeight={500}>
                      View all checked in visitors
                    </Text>
                    <Icon as={BsArrowRight} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        navigate("/")
      )}
    </motion.div>
  );
};

export default ClientProfile;
