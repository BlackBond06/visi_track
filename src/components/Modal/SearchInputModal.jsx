import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const SearchInputModal = ({ open, handleClose }) => {
  return (
    <>
      <Modal isOpen={open} onClose={handleClose} width="100%">
        <ModalOverlay />
        <ModalContent top="15%" width="100%">
          <ModalBody>
            <InputGroup border="none" outline="none" height="45px">
              <InputLeftElement pointerEvents="none" height="inherit">
                <Search2Icon
                  color="electric.200"
                  fontWeight="900"
                  fontSize="14pt"
                />
              </InputLeftElement>
              <Input
                placeholder="Search VisiTrack"
                fontSize="12pt"
                _placeholder={{ color: "gray.500", fontWeight: "900" }}
                height="inherit"
                border="none"
                outline="none"
              />
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchInputModal;
