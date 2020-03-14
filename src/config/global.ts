export interface GlobalState {
  loading: boolean;

  language: string;

  fallbackLanguage: string;

  languageResources: {
    [key: string]: any;
  };
}

export const initialGlobalState: GlobalState = {
  loading: false,
  language: 'vi',
  fallbackLanguage: 'vi',
  languageResources: {},
};
