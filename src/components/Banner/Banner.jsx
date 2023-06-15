import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

const Banner = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  // useNavigate hook for routing
  let navigate = useNavigate();

  // checks for logged in users before routing to checkin page
  const handleCheckIn = () => {
    if (!user) setAuthModalState({ open: "true", view: "login" });
    else navigate("/check-in");
  };

   // checks for logged in users before routing to register page
  const handleRegister = () => {
    if (!user) setAuthModalState({ open: "true", view: "login" });
    else navigate("/register");
  };

  return (
    <Flex
      padding={{ base: "unset", md: "unset", lg: "50px 150px 20px 150px" }}
      gap={10}
      direction={{ base: "column", md: "column", lg: "unset" }}
    >
      <Flex align="center" flex="50%">
        <Box>
          <Flex
            border="1px solid"
            borderColor="gray.300"
            padding="10px 20px 10px 20px"
            align="center"
            gap={2}
            borderRadius="10px"
            maxWidth="250px"
          >
            <Icon as={FaCircle} color="electric.200" />
            <Text color="gray.300" fontSize="10pt">
              A TRUSTED DIGITAL AGENCY
            </Text>
          </Flex>
          <Heading mt={6} mb={6}>
            Helping You Move Onward Digitally
          </Heading>
          <Text color="gray.400" mb={6}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            nemo similique fugit repellendus tenetur ratione provident maiores
            tempore optio. Quod placeat labore dolores vero dicta aperiam
            voluptatem aspernatur nostrum impedit.
          </Text>

          <Flex direction={{base:"unset", md:"unset", lg:"column"}}>

          <Button
            width="100%"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="90px"
            bg="electric.200"
            mb={3}
            fontSize="24px"
            fontWeight={50}
            _hover={{
              color: "electric.200",
              bg: "inherit",
              border: "1px solid",
              borderColor: "electric.200",
            }}
            onClick={handleRegister}
          >
            Register
            <ArrowForwardIcon fontSize="24px" />
          </Button>
          <Button
            width="100%"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="90px"
            bg="inherit"
            fontSize="24px"
            fontWeight={50}
            border="1px solid"
            borderColor="electric.200"
            color="electric.200"
            _hover={{ color: "white", bg: "electric.200" }}
            onClick={handleCheckIn}
          >
            Check In
            <ArrowForwardIcon fontSize="24px" />
          </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex flex="50%">
        <Stack>
          <Image
            src="/Assets/bg.png"
            width="100%"
            height="75%"
            objectFit="cover"
          />
          <Flex
            align="center"
            justify="space-between"
            width="100%"
            height="90px"
            bg="gray.200"
            mt={6}
            borderRadius="20px"
            padding="0 20px 0 20px"
          >
            <Box textAlign="center">
              <Heading fontSize={16}>45M+</Heading>
              <Text fontSize="9pt" fontWeight={500} color="#333333">
                Daily Visits
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading fontSize={16}>45M+</Heading>
              <Text fontSize="9pt" fontWeight={500} color="#333333">
                Checked In
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading fontSize={16}>45M+</Heading>
              <Text fontSize="9pt" fontWeight={500} color="#333333">
                Waiting
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Banner;
