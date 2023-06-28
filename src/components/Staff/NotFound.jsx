import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const StaffNotFound = () => {
    let navigate = useNavigate();
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, staff's name does not exist or cant be found!
        <Button mt={4} onClick={()=> navigate("/")}>GO HOME</Button>
    </Flex>
  );
};
export default StaffNotFound;