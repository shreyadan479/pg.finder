import React from "react";
import { Route } from 'react-router-dom';

const LayoutRoute = ({ component: Component, layout: Layout,authenticated,skipAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => 
     <Layout>
        <Component {...props}  authenticated={authenticated} />
      </Layout>
    }
  />
);
LayoutRoute.defaultProps = {
    authenticated:true,
    skipAuth:true
};

export default LayoutRoute;
