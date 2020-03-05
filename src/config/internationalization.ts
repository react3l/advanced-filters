import {InitOptions} from 'i18next';
import {initialGlobalState} from './global';

export const i18nextConfig: InitOptions = {
  resources: {},
  lng: initialGlobalState.language,
  fallbackLng: initialGlobalState.fallbackLanguage,
  ns: '',
  defaultNS: '',
  nsSeparator: false,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
    nestingSuffixEscaped: '.',
    prefix: '{{',
    suffix: '}}',
  },
};
