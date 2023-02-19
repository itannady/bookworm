import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export const ResultContainer = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 14rem;
  min-height: 14rem;
`;

export const Row = styled.div`
  position: absolute;
  bottom: -1rem;
  /* margin: 0 5%; */
  width: 1000px;
  display: flex;
  background-color: pink;
  z-index: 10;
  transition: transform 300ms ease-in-out;
  transform: translateX(0);
  /* width: ${(props) => `${props.bookCount * 200}px`}; */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  /* flex: 0 0 20%; */
  /* transition: transform 0.3s ease-in-out;
  transform: translateX(0); */
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 1000px;

  padding: 10px;

  background-color: aliceblue;
`;

export const CardContainer = styled.div`
  width: calc(1000px / 5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  transition: opacity 0.5s ease;
`;

export const BookCover = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 150px;
    object-fit: contain;
    /* filter: drop-shadow(7px 0px 15px rgba(84, 68, 45, 0.621))
      drop-shadow(1px 3px 7px rgba(80, 57, 25, 0.427)); */
  }
`;

export const RightIcon = styled(TfiArrowCircleRight)`
  position: absolute;
  right: 0;
  font-size: 2rem;
  color: var(--black);
  z-index: 20;
`;

export const LeftIcon = styled(TfiArrowCircleLeft)`
  position: absolute;
  left: 0;
  font-size: 2rem;
  color: var(--black);
  z-index: 20;
`;

export const BookContent = styled.div``;
