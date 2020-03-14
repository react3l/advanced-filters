/* tslint:disable:variable-name */
import {Transformer} from 'interfaces/react3l-core-interfaces';
import {Repository} from './Repository';

export class LocalStorageRepository extends Repository implements Storage {
  [name: string]: any;

  public readonly length: number;

  public clear(): void {
    return localStorage.clear();
  }

  public getItem(key: string): string | null {
    return this._recover(localStorage.getItem(key));
  }

  public key(index: number): string | null {
    return localStorage.key(index);
  }

  public removeItem(key: string): void {
    return localStorage.removeItem(key);
  }

  public setItem(key: string, value: string): void {
    return localStorage.setItem(key, this._transformer(value));
  }

  private _transformer: Transformer = (v: any) => v;

  private _recover: Transformer = (v: any) => v;

  set transformer(value: (v: any) => any) {
    this._transformer = value;
  }

  set recover(value: (v: any) => any) {
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
  const parsedValue = JSON.parse(v);
  if (typeof parsedValue === 'object' && parsedValue !== null) {
    return parsedValue;
  }
  return v;
};

const localStorageRepository: LocalStorageRepository = new LocalStorageRepository();

localStorageRepository.recover = defaultRecover;
localStorageRepository.transformer = defaultTransformer;

export {localStorageRepository};
