/* tslint:disable:variable-name */
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {createHttpService} from 'helpers/http';

export type AxiosRequestInterceptor = (request: AxiosRequestConfig) => (AxiosRequestConfig | Promise<AxiosRequestConfig>);
export type AxiosResponseInterceptor = <T = any>(response: AxiosResponse<T>) => (AxiosResponse<T> | Promise<AxiosResponse<T>>);
export type AxiosErrorInterceptor = <T = any>(error: AxiosError<T>) => any;

export class Repository {

  private static _defaultRequestInterceptor: AxiosRequestInterceptor;

  private static _defaultResponseInterceptor: AxiosResponseInterceptor;

  private static _defaultErrorInterceptor: AxiosErrorInterceptor;

  protected http: AxiosInstance;

  constructor(
    config?: AxiosRequestConfig,
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig,
    responseInterceptor?: <T>(response: AxiosResponse<T>) => AxiosResponse<T>,
  ) {
    this.http = createHttpService(config, requestInterceptor, responseInterceptor);
    if (typeof Repository._defaultRequestInterceptor === 'function') {
      this.http.interceptors.request.use(Repository._defaultRequestInterceptor);
    }
    if (typeof Repository._defaultResponseInterceptor === 'function') {
      this.http.interceptors.response.use(Repository._defaultResponseInterceptor);
    }
    if (typeof Repository._defaultErrorInterceptor === 'function') {
      this.http.interceptors.response.use(undefined, Repository._defaultErrorInterceptor);
    }
  }

  public setBaseURL(baseURL: string) {
    this.http.defaults.baseURL = baseURL;
  }

  public getHttpInstance(): AxiosInstance {
    return this.http;
  }

  static set defaultRequestInterceptor(requestInterceptor: AxiosRequestInterceptor) {
    this._defaultRequestInterceptor = requestInterceptor;
  }

  static set defaultResponseInterceptor(responseInterceptor: AxiosResponseInterceptor) {
    this._defaultResponseInterceptor = responseInterceptor;
  }

  static set defaultErrorInterceptor(errorInterceptor: AxiosErrorInterceptor) {
    this._defaultErrorInterceptor = errorInterceptor;
  }
}
