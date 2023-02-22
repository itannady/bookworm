import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  border: 2px solid transparent;
  border-radius: 0.75rem;
  transition: 0.3s ease;
  outline: none;
  padding: 0.75rem 2.5rem;
  font-family: "Manrope", sans-serif;
  font-size: 1rem;
  color: var(--black);

  &:placeholder {
    color: var(--gray);
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 4px rgba(57, 109, 146, 0.1);
  }
`;
