import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"

import React from 'react';


function AlgoModal(props) {
  return (  
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="md" isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{props.modalTitle}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      {props.children}
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={props.onClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
}

export default AlgoModal;
