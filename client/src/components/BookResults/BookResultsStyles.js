import styled from "styled-components";

export const Row = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookCover = styled.div`
  width: 100%;

  img {
    border-radius: 5px;
    width: 200px;
    box-shadow: 11px 14px 32px #6b5e3d;
  }
`;

export const BookContent = styled.div``;
