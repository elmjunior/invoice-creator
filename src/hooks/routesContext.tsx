import * as React from 'react';
export interface Route {
  name?: string | null | undefined;
  path?: string;
}
export interface CustomRoute extends Route {
  title?: string | null | undefined;
}

interface RoutesContextData {
  customRoute?: CustomRoute;
  routes?: Route[];
  addRoutes?(routes: Route[]): Promise<void>;
  setInitialRoutes?(routes: Route[]): Promise<void>;
  addCustomName?(routeTitle: CustomRoute): Promise<void>;
}

const RoutesContext = React.createContext<RoutesContextData>({});

const RoutesProvider: React.FC = ({ children }) => {
  const [routes, setRoutes] = React.useState<Route[]>([]);
  const [customRoute, setCustomRoute] = React.useState<CustomRoute>();

  async function addRoutes(newRoutes: Route[]) {
    setRoutes([...routes, ...newRoutes]);
  }
  async function setInitialRoutes(initialRoutes: Route[]) {
    setRoutes(initialRoutes);
  }
  async function addCustomName(routeWithTitle: CustomRoute) {
    setCustomRoute(routeWithTitle);
  }

  return (
    <RoutesContext.Provider
      value={{
        addCustomName,
        addRoutes,
        customRoute,
        routes,
        setInitialRoutes,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export { RoutesProvider, RoutesContext };
