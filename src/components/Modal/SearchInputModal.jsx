import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import React from "react";

const SearchInputModal = ({ open, handleClose }) => {
  return (
    <>
      <Modal isOpen={open} onClose={handleClose} width="100%" size="lg">
        <ModalOverlay />
        <ModalContent
          width={{ base: "auto", md: "100%" }}
          outline="none"
          border="none"
        >
          <ModalBody>
            <Flex align="center" height="45px">
              <Search2Icon
                color="electric.200"
                fontWeight="900"
                fontSize="14pt"
                mr={6}
              />
              <input
                placeholder="Search VisiTrack"
                style={{ width: "100%", border: "none", outline: "none" }}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchInputModal;
