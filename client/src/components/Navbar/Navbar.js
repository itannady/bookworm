import React, { useState } from "react";
import { NavContainer, NavWrapper, Logo, Library } from "./NavbarStyles";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Logo>
            <h4>Bookworm</h4>
          </Logo>
          <Library>
            <button onClick={toggleModal}>Library</button>
          </Library>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

export default Navbar;
