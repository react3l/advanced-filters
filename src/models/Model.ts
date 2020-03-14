import {ErrorMap} from 'interfaces/react3l-core-interfaces';
import {Cloneable} from './Cloneable';

export class Model extends Cloneable {
  public errors?: ErrorMap<Model>;

  public key?: string | number;

  [key: string]: any;
}
