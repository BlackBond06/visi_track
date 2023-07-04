import React from "react";
// import { visitorAtomState } from '../../atoms/visitorsAtom';
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

const Header = ({ staffDetails, data }) => {
  const { name, imageURL } = staffDetails.default;
  const isSeen = false;

  return (
    <Flex direction="column" width="100%" height="146px">
      <Box height="50%" bg="electric.200" />
      <Flex justify="center" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {imageURL ? (
           <Image/>
          ) : (
            <Icon
              as={FaUsers}
              color="electric.200"
              fontSize={64}
              position="relative"
              top={-3}
              border="4px solid white"
              borderRadius="50%"
            />
          )}

          <Flex p="10px 16px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={800} fontSize="16pt">
                {data?.data.visitorData.id}
                </Text>
            </Flex>

            <Button variant={isSeen ? "outline" : "solid"} height="30px" pr={6} pl={6} onClick={()=> {}}>{isSeen ? "Seen" : "See"}</Button>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
