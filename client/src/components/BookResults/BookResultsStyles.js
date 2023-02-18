import styled from "styled-components";

export const ResultContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  margin: 0 5%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  row-gap: 5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const BookCover = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 150px;
    box-shadow: 11px 14px 32px #6b5e3d;
  }
`;

export const BookContent = styled.div``;
