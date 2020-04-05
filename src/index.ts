import { Model } from 'models/Model';
import { Moment } from 'moment';

export type OrderType = 'ASC' | 'DESC';

export type ErrorMap<T extends Model> = {
  [P in keyof T]: T[P] extends (string | number | boolean | Moment) ? string
  : T[P] extends Model ? ErrorMap<T[P]>
  : any;
};

export interface JSONObject {
  [key: string]: string | number | boolean | null | JSONObject;
}

export type PureModelData<T extends Model> = {
  [P in keyof T]
  : T[P] extends string ? string
  : T[P] extends number ? number
  : T[P] extends boolean ? boolean
  : T[P] extends Moment ? string
  : T[P] extends Model ? PureModelData<T[P]>
  : any;
};

export default 'react3l-core';
