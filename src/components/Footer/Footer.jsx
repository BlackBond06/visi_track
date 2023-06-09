import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      margin={{ base: "100px 20px 20px 20px", lg: "100px 200px 20px 200px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: "25px", md: "50px" }}
        fontSize=".8em"
        marginBottom="50px"
      >
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Pages
          </Heading>
          <Text marginTop="10px">Home</Text>
          <Text marginTop="10px">Register</Text>
          <Text marginTop="10px">Check-In</Text>
          <Text marginTop="10px">Check-Out</Text>
          <Text marginTop="10px">Appointment</Text>
        </Box>
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Links
          </Heading>
          <Text marginTop="10px">FAQ</Text>
          <Text marginTop="10px">Visito-List</Text>
          <Text marginTop="10px">Analytics</Text>
          <Text marginTop="10px">Support</Text>
          <Text marginTop="10px">Settings</Text>
        </Box>
        <Box flex={2}>
          <Heading fontSize="18px" color="#555">
            About
          </Heading>
          <Text textAlign="justify" marginTop="10px">
            Welcome to <i>VisiTrack</i>, the modern web app for seamless visitor
            management. Simplify the check-in process and enhance security with
            our intuitive platform. Capture visitor details, generate badges,
            and maintain a digital log effortlessly. Our user-friendly interface
            ensures efficient management of visitor data, eliminating manual
            paperwork. With <i>VisiTrack</i>, you can trust that sensitive
            information remains secure. Our optimized performance guarantees a
            smooth experience for all users. Whether it's a bustling office,
            event venue, or high-security facility, <i>VisiTrack</i> adapts to
            your specific needs. Upgrade your visitor management system today
            and embrace a streamlined approach. Join the growing community of
            satisfied users who have revolutionized their operations with{" "}
            <i>VisiTrack</i>.
          </Text>
        </Box>
        <Box flex={1}>
          <Heading fontSize="18px" color="#555">
            Contact
          </Heading>
          <Text textAlign="justify" marginTop="10px">
          <i>VisiTrack</i> Inc. 123 Main Street, Suite 456 City, State, ZIP Country
          </Text>
        </Box>
      </Flex>
      <Flex
        justify="center"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Flex align="center" marginTop={{ base: "20px", md: "unset" }}>
          <Text color="#a435f0" fontWeight={900} fontStyle="italic">
            VisiTrack
          </Text>
          <Text marginLeft="10px" fontSize="16px">
            Copyright {new Date().getFullYear()}. All Rights Reserved{" "}
          </Text>
        </Flex>
        {/* <Box>
          <Image
            src="/Assets/payment.png"
            height="50px"
            width="400px"
            alt="payment gateway image"
          />
        </Box> */}
      </Flex>
    </Stack>
  );
};

export default Footer;
