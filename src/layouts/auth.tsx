import React from "react";
import PropTypes from "prop-types";

export default function AuthLayout({
  children
}: {
  children: React.ReactChildren;
}) {
  return <>{children}</>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};
