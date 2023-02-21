import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchBarContainer = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  gap: 1rem;

  input {
    width: 100%;
    border: 1px solid #d8d8d8;
    padding: 16px 37px;
    border-radius: 20px;
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 33%;
  left: 16px;
  color: gray;
`;
