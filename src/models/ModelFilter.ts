import { DEFAULT_TAKE, INITIAL_SKIP } from 'config/consts';
import { OrderType } from 'index';
import nameof from 'ts-nameof.macro';

function parseNumber(x: string, def?: number) {
  const result: number = parseInt(x, 10);
  if (Number.isNaN(result)) {
    return def;
  }
  return result;
}

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
              instance.skip = parseNumber(modelFilter.skip as any, INITIAL_SKIP);
              break;

            case nameof(modelFilter.take):
              instance.take = parseNumber(modelFilter.take as any, DEFAULT_TAKE);
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
