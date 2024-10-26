const nextTranslate = require('next-translate-plugin');
const { NODE_ENV } = process.env;

module.exports = {
  compiler: {
    styledComponents: {
      displayName: NODE_ENV === 'development',
      fileName: NODE_ENV === 'development',
      ssr: true,
    },
  },
  ...nextTranslate({}),
};
