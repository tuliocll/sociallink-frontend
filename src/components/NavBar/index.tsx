import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, ContainerLogo, ContainerMenu, Menu, Logo } from "./styles";
import { LinksHead } from "../";

export default function NavBar() {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname.replace("/", ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <ContainerLogo>
          <Logo src="https://seeklogo.com/images/B/blue-style-building-logo-A8D8AEAB86-seeklogo.com.png" />
        </ContainerLogo>
        <ContainerMenu>
          <Menu href="/dashboard" selected={selected === "dashboard"}>
            Dashboard
          </Menu>
          <Menu href="/about" selected={selected === "about"}>
            Sobre
          </Menu>
          <Menu href="#">Github</Menu>
          <Menu href="#">Usuario</Menu>
        </ContainerMenu>
      </Container>
      <LinksHead />
    </>
  );
}
