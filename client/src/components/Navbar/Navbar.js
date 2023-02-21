import React from "react";
import { NavContainer, NavWrapper, Logo, Library } from "./NavbarStyles";

function Navbar({ openModal }) {
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <img src="/images/logo.png" alt="Bookworm logo" />
          </Logo>
          <Library>
            <button className="libraryBtn" onClick={openModal}>
              Library
            </button>
          </Library>
        </NavWrapper>
      </NavContainer>
    </>
  );
}
export default Navbar;
