import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';
import { RoutesProvider } from './hooks/routesContext';

const Routes: React.FC = () => (
  <RoutesProvider>
    <Switch>
      {pages.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </RoutesProvider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default Routes;
