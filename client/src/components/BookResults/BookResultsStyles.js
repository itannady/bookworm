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
  margin: 0 5%;
  display: flex;
  flex: 0 0 auto;
  gap: 2rem;
  transition: transform 0.3s ease-out;
  transform: translateX(-${(props) => props.translate}px);
  overflow-x: hidden;
  /* max-width: 1100px;z
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem
  row-gap: 5rem; */
  z-index: 10;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  transition: opacity 0.5s ease;
  cursor: pointer;
`;

export const BookCover = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 150px;
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
