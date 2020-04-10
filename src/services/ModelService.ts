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
      (value: string | number | boolean | Moment) => {
        setModel(Model.clone<T>({
          ...model,
          [field]: value,
        }));
      },
      [model, setModel, field],
    );

    const handleChangeObjectField = React.useCallback(
      <TField extends Model>(value: TField) => {
        setModel(Model.clone<T>({
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
}

export const modelService: ModelService = new ModelService();
