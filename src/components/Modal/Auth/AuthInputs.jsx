import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import Login from "./Login";
import SignUp from "./SignUp";
import StaffAuth from "./StaffAuth";
import StaffReg from "./StaffReg";

const AuthInputs = ({socket}) => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login socket={socket} />}
      {modalState.view === "signup" && <SignUp/>}
      {modalState.view === "admin" && <StaffAuth/>}
      {modalState.view === "staffReg" && <StaffReg/>}
    </Flex>
  );
};

export default AuthInputs;
