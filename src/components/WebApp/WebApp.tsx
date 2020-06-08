import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

/**
 * @deprecated This interface was deprecated and will be removed in next major release
 */
export interface WebAppProps {
  routes: RouteConfig[];
  onLoad?(): void;
}

/**
 * @deprecated This component was deprecated and will be removed in next major release
 * @param props
 * @constructor
 */
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
    [onLoad],
  );

  return (
    <>
      {renderRoutes(routes)}
    </>
  );
}

export default WebApp;
