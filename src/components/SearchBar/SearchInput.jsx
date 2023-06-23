import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";
import SearchInputModal from "../Modal/SearchInputModal";

const SearchInput = () => {
  const [open, setOpen] = useState(false);

  
  return (
    <Flex
      mt="90px"
      align="center"
     justify="center"
     direction="column"
    >
      <InputGroup maxWidth={{base:"320px", md:"540px", lg:"768px"}} boxShadow="md"
      rounded="md">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Search VisiTrack"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _active={{
            bg: "white",
            border: "1px solid",
            borderColor: "electric.200",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "electric.200",
          }}
          _hover={{cursor:"pointer"}}
          onClick={()=> setOpen(true)}
        />
      </InputGroup>
      <SearchInputModal open={open} handleClose={()=> setOpen(false)}/>
    </Flex>
  );
};

export default SearchInput;
