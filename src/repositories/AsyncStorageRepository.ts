/* tslint:disable:variable-name */
import {Transformer} from 'interfaces/react3l-core-interfaces';
import {AsyncStorage} from 'react-native';
import {Repository} from './Repository';

export class AsyncStorageRepository extends Repository {
  [name: string]: any;

  public readonly length: number;

  public async clear(): Promise<void> {
    await AsyncStorage.clear();
  }

  public async getItem(key: string): Promise<string | null> {
    return this._recover(await AsyncStorage.getItem(key));
  }

  public async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  public async setItem(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, this._transformer(value));
  }

  private _transformer: Transformer = (v: any) => v;

  private _recover: Transformer = (v: any) => v;

  set transformer(value: Transformer) {
    this._transformer = value;
  }

  set recover(value: Transformer) {
    this._recover = value;
  }
}

const defaultTransformer: Transformer = (v: any) => {
  if (typeof v === 'object' && v !== null) {
    return JSON.stringify(v);
  }
  return v;
};

const defaultRecover: Transformer = (v: any) => {
  if (typeof v === 'string') {
    try {
      const parsedValue = JSON.parse(v);
      if (typeof parsedValue === 'object') {
        return parsedValue;
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // tslint:disable-next-line:no-console
        console.error('Parsing error:', error.message);
      }
    }
  }
  return v;
};

const asyncStorageRepository: AsyncStorageRepository = new AsyncStorageRepository();

asyncStorageRepository.transformer = defaultTransformer;
asyncStorageRepository.recover = defaultRecover;

export {asyncStorageRepository};
