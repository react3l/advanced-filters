import { ErrorMap } from 'index';
import nameof from 'ts-nameof.macro';

export class Model {
  errors: ErrorMap<Model>;

  key?: string | number;

  [key: string]: any;

  public static clone<T extends Model>(model?: T): T {
    const instance: T = new Model() as T;
    if (typeof model === 'object' && model !== null) {
      Object
        .entries(model)
        .forEach(([key, value]) => {
          switch (key) {
            case nameof(model.errors):
              instance.errors = value;
              break;

            default:
              (instance as any)[key] = value;
              break;
          }
        });
    }
    return instance;
  }
}
