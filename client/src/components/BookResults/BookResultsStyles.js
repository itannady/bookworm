import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export const ResultContainer = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 14rem;
  min-height: 14rem;
  margin-top: 2rem;
`;

export const Row = styled.div`
  position: relative;
  bottom: -1rem;
  width: fit-content;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;

  /* transition: transform 0.5s ease-in-out;
  transform: ${({ currentGroup }) => `translateX(-${currentGroup * 5}%)`}; */
`;

export const CarouselWrapper = styled.div``;

export const CardContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const BookCover = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 170px;
    cursor: pointer;

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

export const BookContent = styled.div``;
