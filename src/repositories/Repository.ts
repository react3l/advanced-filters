import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Axios } from 'axios-observable';

export class Repository {
  protected http: AxiosInstance;

  protected httpObservable: Axios;

  public static requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

  public static responseInterceptor: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

  public constructor(httpConfig: AxiosRequestConfig) {
    this.http = axios.create(httpConfig);
    this.httpObservable = Axios.create(httpConfig);

    if (typeof Repository.requestInterceptor === 'function') {
      this.http.interceptors.request.use(Repository.requestInterceptor);
      this.httpObservable.interceptors.request.use(Repository.requestInterceptor);
    }

    if (typeof Repository.responseInterceptor === 'function') {
      this.http.interceptors.response.use(Repository.responseInterceptor);
      this.httpObservable.interceptors.response.use(Repository.responseInterceptor);
    }
  }

  public setBaseURL(baseURL: string) {
    this.http.defaults.baseURL = baseURL;
    this.httpObservable.defaults.baseURL = baseURL;
  }
}
