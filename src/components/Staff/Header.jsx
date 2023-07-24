import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { useStaffStateValue } from "../../hooks/useStaffStateValue";
// import { useStaffStateValue } from "../../../hooks/useStaffStateValue";

const Header = ({ visitorAtomState}) => {
  const [activeElement, setActiveElement] = useState(null);
  const { staffStateValue, loading, checkOut } = useStaffStateValue();

// console.log(visitorAtomState);

  const showDetails = (event) => {
    const clickedElement = event.target;
    if (activeElement !== clickedElement) {
      if (activeElement) {
        activeElement.style.borderBottom = "none";
      }

      clickedElement.style.borderBottom = "3px solid #6A5ACD";
      setActiveElement(clickedElement);
    }
  };

  
  useEffect(() => {
    const defaultElement = document.querySelector(".default-element");

    if (defaultElement) {
      defaultElement.style.borderBottom = "3px solid #6A5ACD";
      setActiveElement(defaultElement);
    }
  }, []);

  

  return (
    <Flex direction="column" width="100%">
      <Box height="73px" bg="electric.200" />
      <Flex justify="center" flexGrow={1}>
        <Flex
          width="95%"
          maxWidth="860px"
          border="1px solid"
          borderColor="#ccc"
          borderRadius="0 0 10px 10px"
          direction="column"
        >
          <Flex justify="space-around" width="inherit">
            <Flex width="128px" direction="column">
              {visitorAtomState.data.imageURL ? (
                <Image />
              ) : (
                <Icon
                  as={BsFillPersonFill}
                  color="electric.200"
                  fontSize={64}
                  position="relative"
                  top={-5}
                  border="4px solid white"
                  borderRadius="50%"
                  width={{ base: "96px", lg: "120px" }}
                  height={{ base: "96px", lg: "120px" }}
                  bg="gray.100"
                />
              )}

              <Text
                fontWeight={800}
                fontSize="16pt"
                ml={5}
                position="relative"
                top={-3}
              >
                {visitorAtomState.data.visitorAtomState.id}
              </Text>
            </Flex>

            <Flex p="10px 15px">
              <Button
                variant="outline"
                height="30px"
                pr={6}
                pl={6}
                onClick={() => checkOut(visitorAtomState.data.visitorAtomState.id)}
                isLoading={loading}
              >
                Upload image
              </Button>

              {/* <Button
                isLoading={loading}
                variant={isJoined ? "outline" : "solid"}
              >
                {isJoined ? "Joined" : "Join"}
              </Button>
              <Button
                isLoading={loading}
                variant={isOnline ? "outline" : "solid"}
              >
                {isOnline ? "Online" : "Offline"}
              </Button> */}
            </Flex>
          </Flex>
          <Flex align="center" justify="space-around">
            <Box
              className="default-element"
              p="10px"
              borderBottom="5px solid"
              borderColor="electric.200"
              onClick={showDetails}
              cursor="pointer"
              fontWeight={400}
              color="gray.400"
            >
              Waiting
            </Box>
            <Box
              p="10px"
              onClick={showDetails}
              cursor="pointer"
              fontWeight={400}
              color="gray.400"
            >
              Appointments
            </Box>
            <Box
              p="10px"
              onClick={showDetails}
              cursor="pointer"
              fontWeight={400}
              color="gray.400"
            >
              Notifications
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
