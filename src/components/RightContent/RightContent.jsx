import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoSparkles } from "react-icons/io5";
import AuthModal from "../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

const RightContent = ({ user }) => {
  // console.log("user:", user.email.split("@")[0][0].toUpperCase() + user.email.split("@")[0].slice(1));

  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Flex
            mr={8}
            direction="column"
            display={{ base: "none", lg: "flex" }}
            fontSize="8pt"
            align="flex-start"
          >
            <Text fontWeight={700}>
              {user.displayName || user.email.split("@")[0]}
            </Text>
            <Flex>
              <Icon color="gold.200" mr={1} as={IoSparkles} />
              <Text color="gray.400">Visitor</Text>
            </Flex>
          </Flex>
        ) : (
          <AuthButtons />
        )}

        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
