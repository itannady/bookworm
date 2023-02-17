import React from "react";
import { NavContainer, NavWrapper, Logo } from "./NavbarStyles";

function Navbar() {
  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <h4>LOGO</h4>
          </Logo>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

export default Navbar;
