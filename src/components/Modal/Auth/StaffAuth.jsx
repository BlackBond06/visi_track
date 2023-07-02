import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaUsers } from "react-icons/fa";

const StaffAuth = () => {
  return (
    <Flex direction="column" align="center" width="100%">
      <Flex direction="column" align="center">
        <Text fontSize={{base:"8pt", md:"10pt"}}>You are trying to access admin-only content</Text>
        <Text fontSize={{base:"8pt", md:"10pt"}}>Please verify yourself</Text>
        <hr style={{ width: "100%", margin: "20px 0 20px 0" }} />
      </Flex>

      <Flex direction="column" align="center" width="inherit">
        <Icon as={FaUsers} color="gold.200" fontSize={40} mb={2} />
        <form onSubmit={() => {}} style={{ width: "100%" }}>
          <Input
            required
            name="name"
            placeholder="staff name"
            type="text"
            mb={2}
            // onChange={(event) => setEmail(event.target.value)}
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
          <Input
            required
            mb={2}
            name="password"
            placeholder="password"
            type="password"
            // onChange={onChange}
            fontSize="10pt"
            _placeholder={{ color: "brand.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
          {/* <Text textAlign="center" fontSize="10pt" color="red">
            {error?.message}
          </Text> */}
          <Button
            width="100%"
            height="36px"
            mb={2}
            mt={2}
            type="submit"
            // isLoading={sending}
          >
            Enter
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default StaffAuth;
