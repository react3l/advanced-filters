import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

export interface WebAppProps {
  routes: RouteConfig[];
  onLoad?(): void;
}

function WebApp(props: WebAppProps) {
  const {
    routes,
    onLoad,
  } = props;

  React.useEffect(
    () => {
      if (typeof onLoad === 'function') {
        onLoad();
      }
    },
    [],
  );

  return (
    <>
      {renderRoutes(routes)}
    </>
  );
}

export default WebApp;
