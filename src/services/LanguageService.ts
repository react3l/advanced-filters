import {GlobalState, i18nextConfig} from 'config';
import i18next from 'config/internationalization';
import {initReactI18next} from 'react-i18next';
import React from 'reactn';

export class LanguageService {
  public async initLanguageService() {
    await i18next.use(initReactI18next)
      .init(i18nextConfig);
  }

  public useLanguage(): void {
    const [language] = React.useGlobal<GlobalState, 'language'>('language');

    const handleChangeLanguage = React.useCallback(
      async () => {
        await i18next.changeLanguage(language);
      },
      [language],
    );

    React.useEffect(
      () => {
        handleChangeLanguage();
      },
      [handleChangeLanguage],
    );
  }

  public async addLanguage(key: string, resource: any) {
    await i18next.addResource(key, '', '', resource);
    const globalState: GlobalState = React.getGlobal<GlobalState>();
    await React.setGlobal<GlobalState>({
      languageResources: {
        ...globalState.languageResources,
        [key]: resource,
      },
    });
  }
}

export const languageService: LanguageService = new LanguageService();
