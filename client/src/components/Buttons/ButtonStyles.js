import styled from "styled-components";

export const PrimaryBtn = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.75rem;
  background-color: var(--blue);
  font-family: "Manrope", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
  cursor: pointer;

  &:hover {
    background-color: var(--btnHover);
    transition: all 0.1s ease-in;
  }
`;

export const SecondaryBtn = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid var(--brown);
  background-color: transparent;
  font-family: "Manrope", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
  cursor: pointer;

  &:hover {
    background-color: var(--brown);
    transition: all 0.1s ease-in;
    color: var(--ecru);
  }
`;
