import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CheckinModal = ({ isOpen }) => {
  return (
    <Flex
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top="20%"
      right={{ base: isOpen ? "0%" : "-200px", md: isOpen ? "30%" : "-200px" }}
      transform="translateY(-50%)"
      width="500px"
      height="50px"
      backgroundColor="electric.200"
      transition="right .350ms"
    >
      <Text color="white" textAlign="center">
        Check In Successful!
      </Text>
    </Flex>
  );
};

export default CheckinModal;
