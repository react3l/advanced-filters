export class LocalStorageService implements Storage {
  [name: string]: any;

  get length(): number {
    return localStorage.length;
  }

  public clear(): void {
    localStorage.clear();
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public key(index: number): string | null {
    return localStorage.key(index);
  }

  public removeItem(key: string): void {
    return localStorage.removeItem(key);
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}

export const localStorageService: LocalStorageService = new LocalStorageService();
