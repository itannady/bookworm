import styled from "styled-components";
import { AiOutlineCloseCircle, AiTwotoneDelete } from "react-icons/ai";

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
  overflow-x: hidden;
  background-color: white;
`;

export const HeadingContent = styled.div`
  background-color: pink;
  margin: 5%;
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin: 5%;
`;

export const DeleteIcon = styled(AiTwotoneDelete)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: gray;
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
`;

export const BookCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  background: white;

  &:hover {
    background: #f2f2f2;

    ${DeleteIcon} {
      display: block;
    }
  }
`;

export const BookCover = styled.div`
  img {
    border-radius: 5px;
    width: 120px;
  }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2rem;
  color: var(--ecru);
  cursor: pointer;
`;
