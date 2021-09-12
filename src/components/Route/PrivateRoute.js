import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isLoggedIn = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ?  children  : <Redirect to={"/"} />
      }
    />
  );
};
export default PrivateRoute ;