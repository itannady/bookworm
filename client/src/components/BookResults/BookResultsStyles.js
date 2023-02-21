import styled from "styled-components";
import {
  TfiBookmark,
  TfiArrowCircleLeft,
  TfiArrowCircleRight,
} from "react-icons/tfi";

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

export const BookmarkTag = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: none;
  padding: 1rem 0;
  cursor: pointer;
  background: linear-gradient(
    356.57deg,
    #343839 3.37%,
    rgba(78, 89, 92, 0.92) 42.67%,
    rgba(84, 97, 100, 0.850597) 69.21%,
    rgba(92, 106, 109, 0.77) 83.94%,
    rgba(92, 106, 109, 0) 97.7%
  );

  span {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    color: var(--ecru);
  }
  ${BookCover}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BookmarkIcon = styled(TfiBookmark)`
  font-size: 1.5rem;
  color: var(--ecru);
`;
