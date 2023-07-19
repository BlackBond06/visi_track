import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../../firebase/clientApp";



const StaffAuth = ({socket, user}) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  // const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name:"",
    password:""
  });

  const visitorName =  user?.displayName || user?.email.split("@")[0];
  // useNavigate hook for routing
  let navigate = useNavigate();

  const handleChange = (event)=>{
    setInput(prev =>({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleVerifyStaff = (event)=>{
    event.preventDefault();
    if(input.name !== "Friday" && input.password !== "1234"){
      setError("Access Denied! Invalid username or password")
      return;
    }
    setAuthModalState({open:false});
    socket?.emit("newUser", visitorName);
    
    navigate(`/r/${input.name}`);
  }
  return (
    <Flex direction="column" align="center" width="100%">
      <Flex direction="column" align="center">
        <Text fontSize={{base:"8pt", md:"10pt"}}>You are trying to access admin-only content</Text>
        <Text fontSize={{base:"8pt", md:"10pt"}}>Please verify yourself</Text>
        <hr style={{ width: "100%", margin: "20px 0 20px 0" }} />
      </Flex>

      <Flex direction="column" align="center" width="inherit">
        <Icon as={FaUsers} color="gold.200" fontSize={40} mb={2} />
        <form onSubmit={handleVerifyStaff} style={{ width: "100%" }}>
          <Input
            required
            name="name"
            placeholder="staff name"
            type="text"
            mb={2}
            onChange={handleChange}
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
            onChange={handleChange}
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
          {<Text textAlign="center" fontSize="10pt" color="red">
            {error}
          </Text>}
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
