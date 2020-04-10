import React, { ReactElement } from 'react';
import { AppLoading } from 'expo';

export interface MobileAppProps {
  children?: ReactElement | ReactElement[];
  loadAsync?(): Promise<any>;
  onFinish?(): any;
  onError?(error: Error): any;
}

function MobileApp(props: MobileAppProps) {
  const [loading, setLoading] = React.useState<boolean>(true);

  const {
    loadAsync,
    children,
    onFinish,
    onError,
  } = props;

  const startAsync = React.useCallback(
    async () => {
      if (typeof loadAsync === 'function') {
        await loadAsync();
      }
      setLoading(false);
    },
    [],
  );

  if (loading) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={onFinish}
        onError={onError}
      />
    );
  }

  return (
    <>
      {children}
    </>
  );
}

export default MobileApp;
