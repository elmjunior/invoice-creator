import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from '../../../hooks/routesContext';
import { RouteWithSubRoutes } from '../../../Routes';
interface InternalRoute extends Route {
  // eslint-disable-next-line @typescript-eslint/ban-types
  component: React.FC<{}>;
  exact?: boolean | undefined;
}

interface Props {
  routes?: InternalRoute[];
}
const InternalRoutes: React.FC<Props> = ({ routes }) => {
  return (
    <Switch>
      {routes?.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default InternalRoutes;
