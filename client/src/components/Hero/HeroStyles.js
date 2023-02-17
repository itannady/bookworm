import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const HeroContainer = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.header`
  margin: 5%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h4 {
    text-align: center;
  }
`;

export const SearchBar = styled.div`
  width: 50%;
  position: relative;

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
