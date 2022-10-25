import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const MyRoute = (component: Component, isClosed, ...rest) => {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Redirect to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }} />;
  }

  return <Route {...rest} component={Component} />;
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, propTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
