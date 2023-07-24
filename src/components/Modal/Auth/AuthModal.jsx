import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";
import StaffAuth from "./StaffAuth";
import StaffReg from "./StaffReg";

const AuthModal = ({socket, user}) => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  // const [user, loading, error] = useAuthState(auth);

  // close modal function
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // close modal when a user sucessfully logs in
  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === "login" && "Log In"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
            {modalState.view === "admin" && "Admin Verification"}
            {modalState.view === "staffReg" && "Staff Account Setup"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              flexDirection="column"
              justify="center"
              align="center"
              width="70%"
            >
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  <Flex>
                    <Text color="gray.500" fontWeight={700}>
                      OR
                    </Text>
                  </Flex>
                  <AuthInputs socket={socket} />
                </>
              ) : modalState.view === "admin" ? (
                <StaffAuth socket={socket} user={user} />
              ) :  modalState.view === "staffReg" ? (<StaffReg/>) :(
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
