import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

export interface WebAppProps {
  routes: RouteConfig[];
}

function WebApp(props: WebAppProps) {
  return (
    <>
      {renderRoutes(props.routes)}
    </>
  );
}

export default WebApp;
