import React from "react";

import { motion } from "framer-motion";
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
import { BsArrowRight, BsFillPersonFill } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
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

const ClientProfile = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      {user ? (
        <Flex width="100%" direction="column">
          <Flex flexGrow={1} justify="center" mt="50px">
            <Flex
              width="95%"
              maxWidth="920px"
              direction={{ base: "column", lg: "unset" }}
              gap="50px"
            >
              <Flex
                flex={3}
                border="1px solid"
                borderColor="electric.200"
                height={{ base: "auto", lg: "126px" }}
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
                  <Text fontSize="10pt">
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
                      src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_100_100/0/1686850028795?e=1694044800&v=beta&t=iDUvFD1U9Sc7GgP69_Os3OO1aHy2fKSLLvrOsrZsbpI"
                    />
                    <Box>
                      <Heading color="rgb(0, 0, 0, 0.7)" fontSize={14}>
                        James Bond
                      </Heading>
                      <Text fontSize="9pt">Associate, Sales Department</Text>
                      <Button variant="outline" mt={3}>
                        Check out
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
                      <Text fontSize="9pt">Associate, Shipping Department</Text>
                      <Button variant="outline" mt={3}>
                        Check out
                      </Button>
                    </Box>
                  </Flex>
                  <Flex mt={3} gap={4}>
                    <Image
                      h={50}
                      borderRadius="50%"
                      src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_100_100/0/1686850028795?e=1694044800&v=beta&t=iDUvFD1U9Sc7GgP69_Os3OO1aHy2fKSLLvrOsrZsbpI"
                    />
                    <Box>
                      <Heading color="rgb(0, 0, 0, 0.7)" fontSize={14}>
                        Bill Gates
                      </Heading>
                      <Text fontSize="9pt">Associate, HR</Text>
                      <Button variant="outline" mt={3}>
                        Check out
                      </Button>
                    </Box>
                  </Flex>
                  <Flex mt={3} align="center" gap={1} cursor="pointer">
                    <Text>View all checked in visitors</Text>
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
