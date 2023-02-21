import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

import { BsBookmarkPlus, BsBookmarkCheckFill } from "react-icons/bs";

export const ResultContainer = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 13rem;
  min-height: 13rem;
  margin-top: 1.5rem;
`;

export const Row = styled.div`
  position: relative;
  bottom: -1rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  z-index: 1;
`;

export const CardContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const BookCover = styled.div`
  position: relative;
  width: 100%;

  img {
    border-radius: 5px;
    width: 10rem;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
    filter: drop-shadow(4px 0px 5px rgba(84, 68, 45, 0.621))
      drop-shadow(1px 5px 5px rgba(80, 57, 25, 0.427));
  }
`;

export const RightIcon = styled(TfiArrowCircleRight)`
  position: absolute;
  top: 40%;
  right: -5rem;
  font-size: 2rem;
  color: var(--black);
  z-index: 20;
  cursor: pointer;
`;

export const LeftIcon = styled(TfiArrowCircleLeft)`
  position: absolute;
  top: 40%;
  left: -5rem;
  font-size: 2rem;
  color: var(--black);
  z-index: 20;
  cursor: pointer;
`;

// bookmark icon
export const BookmarkTag = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: none;
  border-radius: 5px 5px 0px 0px;
  background: linear-gradient(
    180deg,
    rgba(49, 49, 49, 0.6) 0%,
    rgba(49, 49, 49, 0.553485) 50.51%,
    rgba(56, 56, 56, 0.552) 50.52%,
    rgba(49, 49, 49, 0) 100%
  );
  span {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    color: var(--ecru);
  }
  ${BookCover}:hover & {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const AddBookmarkIcon = styled(BsBookmarkPlus)`
  margin: 1rem 0.5rem;
  font-size: 2rem;
  color: var(--ecru);
  opacity: 0.8;
  cursor: pointer;
`;

export const CheckedIcon = styled(BsBookmarkCheckFill)`
  margin: 1rem 0.5rem;
  font-size: 2rem;
  color: var(--ecru);
  opacity: 0.8;
  cursor: pointer;
`;
