import React from "react";
import { NavContainer, NavWrapper, Logo, Library } from "./NavbarStyles";
import { SecondaryBtn } from "../Buttons/ButtonStyles";

function Navbar({ openModal }) {
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <img src="/images/logo.png" alt="Bookworm logo" />
          </Logo>
          <Library>
            <SecondaryBtn className="libraryBtn" onClick={openModal}>
              Library
            </SecondaryBtn>
          </Library>
        </NavWrapper>
      </NavContainer>
    </>
  );
}
export default Navbar;
