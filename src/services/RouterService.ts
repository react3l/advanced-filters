import { jsonHelper } from 'helpers/json';
import { ModelFilter } from 'models/ModelFilter';
import queryString from 'querystring';
import React, { Dispatch, SetStateAction } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export class RouterService {
  public useGoBack(): [
    () => void
  ] {
    const history = useHistory();

    return [
      React.useCallback(
        () => {
          history.goBack();
        },
        [history],
      ),
    ];
  }

  public useRouterFilter<T extends ModelFilter>(): [
    T,
    Dispatch<SetStateAction<T>>,
  ] {
    const { pathname, search } = useParams();
    const history = useHistory();

    const modelFilter: T = React.useMemo(
      () => {
        const parseParams = jsonHelper.unflatten(queryString.parse(search) as any);
        return ModelFilter.clone<T>(parseParams as T);
      },
      [],
    );

    const setModelFilter: Dispatch<SetStateAction<T>> = React.useCallback(
      (modelFilter: T) => {
        history.replace({
          pathname,
          search: queryString.stringify(jsonHelper.flatten(modelFilter)),
        });
      },
      [history],
    );

    return [
      modelFilter,
      setModelFilter,
    ];
  }
}

export const routerService: RouterService = new RouterService();
