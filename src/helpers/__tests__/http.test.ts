import { AxiosInstance } from 'axios';
import { createHttpService } from '../http';

describe('http helpers', () => {
  it('createHttpService works', () => {
    const httpService: AxiosInstance = createHttpService(null);
    expect(httpService).toBeTruthy();
    expect(httpService.hasOwnProperty('get')).toBeTruthy();
    expect(httpService.hasOwnProperty('post')).toBeTruthy();
    expect(httpService.hasOwnProperty('put')).toBeTruthy();
    expect(httpService.hasOwnProperty('patch')).toBeTruthy();
    expect(httpService.hasOwnProperty('delete')).toBeTruthy();
  });
});
