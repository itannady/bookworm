import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const SearchBarContainer = styled.form`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;

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
