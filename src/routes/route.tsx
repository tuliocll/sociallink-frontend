import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../layouts/auth";
import DefaultLayout from "../layouts/default";

// import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  auth,
  isPublic,
  path,
  ...rest
}: {
  component: React.ComponentType<any>;
  auth?: boolean;
  isPublic?: boolean;
  path: string;
}) {
  // const { signed } = store.getState().auth;
  const signed = true;

  if (!signed && !isPublic) {
    return <Redirect to="/" />;
  }

  if (signed && auth) {
    return <Redirect to="/dashboard" />;
  }

  let Layout: React.ComponentType<any> = signed ? DefaultLayout : AuthLayout;

  if (isPublic) {
    Layout = AuthLayout;
  }

  return (
    <Route
      path={path}
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  auth: false
};
