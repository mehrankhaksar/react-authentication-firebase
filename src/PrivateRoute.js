import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContextProvider';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: routeProps.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
