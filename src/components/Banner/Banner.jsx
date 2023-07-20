import { ArrowForwardIcon } from "@chakra-ui/icons";
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
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

const Banner = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  // useNavigate hook for routing
  let navigate = useNavigate();

  // checks for logged in users before routing to checkin page
  const handleCheckIn = () => {
    if (!user) setAuthModalState({ open: true, view: "login" });
    else navigate("/check-in");
  };

  // 
  const handleStaffAuth = () => {
    if (!user) setAuthModalState({ open: true, view: "login" });

    else if(user) setAuthModalState({open: true, view: "admin"})
    // else navigate("/register");
  };

  return (
    <Flex
      padding={{
        base: "50px 15px 15px 15px",
        md: "50px 25px 25px 25px",
        lg: "50px 150px 20px 150px",
      }}
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
            maxWidth="270px"
          >
            <Icon as={FaCircle} color="electric.200" />
            <Text color="gray.300" fontSize="10pt">
              SIMPLIFY, SECURE, SUCCEED
            </Text>
          </Flex>
          <Heading mt={6} mb={6}>
            Welcome to VisiTrack - Revolutionizing Visitor Management
          </Heading>
          <Text color="#ccc" mb={6} textAlign="justify">
            Revolutionize Visitor Management with VisiTrack: Effortlessly Track,
            Welcome, and Secure Your Guests. Streamline Check-Ins, Enhance
            Security, and Provide a Seamless Experience with our Innovative
            Solution
          </Text>

          <Flex direction={{ base: "unset", md: "unset", lg: "column" }} gap={{base:"20px", md:"30px", lg:"unset"}}>
            <Button
              width="100%"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height={{base:"50px", md:"90px", lg:"90px" }}
              bg="electric.200"
              mb={3}
              fontSize={{base:"16px", md:"24px", lg:"24px"}}
              fontWeight={50}
              _hover={{
                color: "electric.200",
                bg: "inherit",
                border: "1px solid",
                borderColor: "electric.200",
              }}
              onClick={handleStaffAuth}
            >
              Staff
              <ArrowForwardIcon fontSize={{base:"16px", md:"24px", lg:"24px"}} />
            </Button>
            <Button
              width="100%"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height={{base:"50px", md:"90px", lg:"90px" }}
              bg="inherit"
              fontSize={{base:"16px", md:"24px", lg:"24px"}}
              fontWeight={50}
              border="1px solid"
              borderColor="electric.200"
              color="electric.200"
              _hover={{ color: "white", bg: "electric.200" }}
              onClick={handleCheckIn}
            >
              Client
              <ArrowForwardIcon fontSize={{base:"16px", md:"24px", lg:"24px"}} />
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex flex={{base:"unset", md:"100%", lg:"50%"}}>
        <Stack width="100%">
          <Image
            src="/Assets/bg.png"
            width="100%"
            height="80%"
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
              <Heading fontSize={16} color="electric.200">0</Heading>
              <Text fontSize="9pt" fontWeight={500} color="#333333">
                Daily Visits
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading fontSize={16} color="electric.200">0</Heading>
              <Text fontSize="9pt" fontWeight={500} color="#333333">
                Checked In
              </Text>
            </Box>
            <Box textAlign="center">
              <Heading fontSize={16} color="electric.200">0</Heading>
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
