import {
  SideNav,
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

import React from "react";

export default function Sidenav({ location, history }) {
  return (
    <>
      <SideNav
        onSelect={(selected: string) => {
          const to = "/" + selected;
          if (location.pathname !== to) {
            history.push(to);
          }
        }}
      >
        <Toggle />
        <Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="devices">
            <NavIcon>
              <i
                className="fa fa-fw fa-device"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Devices</NavText>
          </NavItem>
        </Nav>
      </SideNav>
    </>
  );
}
