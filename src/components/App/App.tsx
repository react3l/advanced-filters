import {DEFAULT_APP_CONTAINER} from 'config/consts';
import React from 'react';
import {renderRoutes, RouteConfig, RouteConfigComponentProps} from 'react-router-config';
import {Switch, withRouter} from 'react-router-dom';

export interface AppProps extends RouteConfigComponentProps {
  className?: string;

  routes: RouteConfig[];

  onInit?(): void;

  onUnmount?(): void;
}

function App(props: AppProps) {
  const {className, routes, onInit, onUnmount} = props;

  React.useEffect(
    () => {
      const container: HTMLDivElement = document.getElementById(DEFAULT_APP_CONTAINER) as HTMLDivElement;
      if (typeof container === 'object' && container !== null) {
        container.className = className;
      }

      return () => {
        if (typeof container === 'object' && container !== null) {
          container.className = '';
        }
      };
    },
    [className],
  );

  React.useEffect(
    () => {
      if (typeof onInit === 'function') {
        onInit();
      }
      return onUnmount;
    },
    [onInit, onUnmount],
  );

  return (
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  );
}

export default withRouter(App);
