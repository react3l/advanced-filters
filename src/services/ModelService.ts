import { Model } from 'models/Model';
import { Moment } from 'moment';
import React, { Dispatch, SetStateAction } from 'react';

export class ModelService {
  public useChangeHandlers<T extends Model>(
    model: T,
    setModel: Dispatch<SetStateAction<T>>,
    field: keyof T | string,
  ): [
    (value: string | number | boolean) => void,
    <TField extends Model>(value: TField) => void,
  ] {
    const handleChangeSimpleField = React.useCallback(
      async (value: string | number | boolean | Moment) => {
        await setModel(Model.clone<T>({
          ...model,
          [field]: value,
        }));
      },
      [model, setModel, field],
    );

    const handleChangeObjectField = React.useCallback(
      async <TField extends Model>(value: TField) => {
        await setModel(Model.clone<T>({
          ...model,
          [field]: value,
          [`${field}Id`]: value?.id,
        }));
      },
      [model, setModel, field],
    );

    return [
      handleChangeSimpleField,
      handleChangeObjectField,
    ];
  }

  public useHigherOrderChangeHandlers<T extends Model, P extends keyof T = keyof T>(model: T, dispatch: Dispatch<SetStateAction<T>>): [
    (field: P) => (value: T[P] | number | string | boolean | Moment | Model[]) => Promise<void>,
    (field: P) => (value: T[P]) => Promise<void>,
  ] {
    const handleChangeSimpleField = React.useCallback(
      (field: P) => async (value: T[P] | number | string | boolean | Moment | Model[]) => {
        await dispatch({
          ...model,
          [field]: value,
        });
      },
      [dispatch, model],
    );

    const handleChangeObjectField = React.useCallback(
      (field: P) => async (value: T[P]) => {
        await dispatch({
          ...model,
          [field]: value,
          [`${field}Id`]: value?.id,
        });
      },
      [dispatch, model],
    );

    return [
      handleChangeSimpleField,
      handleChangeObjectField,
    ];
  }
}

export const modelService: ModelService = new ModelService();
