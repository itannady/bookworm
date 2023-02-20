import React from "react";
import { NavContainer, NavWrapper, Logo, Library } from "./NavbarStyles";

function Navbar({ openModal }) {
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <h4>LOGO</h4>
          </Logo>
          <Library>
            <button onClick={openModal}>Library</button>
          </Library>
        </NavWrapper>
      </NavContainer>
    </>
  );
}
export default Navbar;
