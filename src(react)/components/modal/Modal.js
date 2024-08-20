import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: left;
`;

const CloseButton = styled.span`
  float: right;
  font-size: 24px;
  cursor: pointer;
`;

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
