import { DEFAULT_TAKE, INITIAL_SKIP } from 'config/consts';
import { OrderType } from 'index';
import nameof from 'ts-nameof.macro';

export class ModelFilter {
  public skip: number = 0;

  public take: number = DEFAULT_TAKE;

  public orderBy?: string;

  public orderType?: OrderType;

  [key: string]: any;

  public static clone<T extends ModelFilter>(modelFilter?: T): T {
    const instance: T = new ModelFilter() as T;
    if (typeof modelFilter === 'object' && modelFilter !== null) {
      Object
        .entries(modelFilter)
        .forEach(([key, value]) => {
          switch (key) {
            case nameof(modelFilter.skip):
              instance.skip = parseInt(value as string, 10) ?? INITIAL_SKIP;
              break;

            case nameof(modelFilter.take):
              instance.take = parseInt(value as string, 10) ?? DEFAULT_TAKE;
              break;

            case nameof(modelFilter.orderBy):
              instance.orderBy = modelFilter.orderBy;
              break;

            case nameof(modelFilter.orderType):
              instance.orderType = modelFilter.orderType;
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
