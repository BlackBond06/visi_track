import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { authModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";

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

const CheckIn = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);


  const [checkIn, setCheckIn] = useState({
    name: "",
    contact: "",
    purpose: "",
    whomToSee: "",
  });

  const onChange = (event) => {
    setCheckIn((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!user) setAuthModalState({ open: "true", view: "login" });
    else console.log(checkIn);
  };

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <Flex
        align="center"
        width="100%"
        justify="center"
        height={{ base: "unset", lg: "100vh" }}
      >
        <Flex
          border-radius="5px"
          width="100%"
          maxWidth="850px"
          padding="20px"
          direction={{ base: "column", lg: "unset" }}
          mt="50px"
        >
          <Flex
            flex="50%"
            padding="80px 20px"
            backgroundImage="url(Assets/checkin.webp)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          >
            <Box></Box>
          </Flex>
          <Flex
            flex="50%"
            padding="80px 20px"
            align="center"
            justify="center"
            direction="column"
            wrap="wrap"
            shadow=" 0px 1px 10px rgba(0,0,0,0.35)"
          >
            <form onSubmit={onSubmit}>
              <Heading>Check In</Heading>
              <Input
                required
                name="name"
                placeholder="Name of Visitor"
                type="text"
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                onChange={onChange}
              />
              <Input
                name="contact"
                type="text"
                placeholder="Contact"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />
              <Input
                name="purpose"
                type="text"
                placeholder="Purpose of Visit"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />
              <Input
                name="whomToSee"
                type="text"
                placeholder="Whom to see"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />

              <Button mt={2} padding="10px 40px" type="submit">
                Submit
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default CheckIn;
