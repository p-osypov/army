const nextTranslate = require('next-translate-plugin');
const i18nConfig = require('./i18n.json');
const { NODE_ENV } = process.env;

module.exports = {
  compiler: {
    styledComponents: {
      displayName: NODE_ENV === 'development',
      fileName: NODE_ENV === 'development',
      ssr: true,
    },
  },
  ...nextTranslate({
    i18n: {
      locales: i18nConfig.locales,
      defaultLocale: i18nConfig.defaultLocale,
      localeDetection: false, // Disable automatic detection
    },
  }),
};
