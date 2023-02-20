import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.2s ease;
  opacity: 1;
  overflow-y: hidden;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 10%);
  bottom: 0;
  border-radius: 20px 20px 0 0;
  overflow-y: scroll;
  background-color: aliceblue;
`;

export const HeadingContent = styled.div`
  background-color: pink;
  margin: 5%;
`;

export const BookList = styled.div`
  margin: 5%;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2rem;
  color: var(--ecru);
  cursor: pointer;
`;
