import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Repository} from './Repository';

export class LanguageRepository extends Repository {
  public static rootUrl: string;

  constructor(httpConfig?: AxiosRequestConfig) {
    super(httpConfig);
    this.setBaseURL(LanguageRepository.rootUrl);
  }

  public loadLanguage(lg: string, path: string = '/i18n'): Promise<any> {
    return this.http.get(`${path}/${lg}.json`)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}

export const languageRepository: LanguageRepository = new LanguageRepository();
