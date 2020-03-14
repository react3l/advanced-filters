import {PureModelData} from 'interfaces/react3l-core-interfaces';

export class Cloneable {
  public static clone<T extends Cloneable>(cloneable?: PureModelData<T>): T {
    const instance: T = new Cloneable() as T;
    if (typeof cloneable === 'object' && cloneable !== null) {
      Object.assign(instance, cloneable);
    }
    return instance;
  }

  constructor(t?: Cloneable) {
    if (typeof t === 'object' && t !== null) {
      Object.assign(this, t);
    }
  }
}
