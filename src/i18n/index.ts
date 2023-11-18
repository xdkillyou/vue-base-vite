import { createI18n } from 'vue-i18n';

import tw from './language/zh-TW.json';
import en from './language/en-US.json';

const messages = {
  en,
  tw,
};

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false, // you must set `false`, to use Composition API
  locale: 'tw', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
});

export default i18n;
