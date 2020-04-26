import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Axios} from 'axios-observable';

export class Repository {
  public static requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
  public static responseInterceptor: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  public static errorInterceptor: (error: AxiosError) => AxiosError | Promise<AxiosError>;
  protected http: AxiosInstance;
  protected httpObservable: Axios;

  public constructor(httpConfig: AxiosRequestConfig) {
    this.http = axios.create(httpConfig);
    this.httpObservable = Axios.create(httpConfig);

    if (typeof Repository.requestInterceptor === 'function') {
      this.http.interceptors.request.use(Repository.requestInterceptor);
      this.httpObservable.interceptors.request.use(Repository.requestInterceptor);
    }

    if (typeof Repository.responseInterceptor === 'function') {
      this.http.interceptors.response.use(Repository.responseInterceptor, Repository.errorInterceptor);
      this.httpObservable.interceptors.response.use(Repository.responseInterceptor, Repository.errorInterceptor);
    }
  }

  public get baseURL() {
    return this.http.defaults.baseURL ?? this.httpObservable.defaults.baseURL ?? null;
  }

  public set baseURL(baseURL: string) {
    this.http.defaults.baseURL = baseURL;
    this.httpObservable.defaults.baseURL = baseURL;
  }

  public setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
  }
}
