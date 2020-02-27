import React from "react";
import PropTypes from "prop-types";

import { NavBar } from "../components/";

export default function DefaultLayout({
  children
}: {
  children: React.ReactChildren;
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
