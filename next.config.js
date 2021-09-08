module.exports = {
  basePath: '/l',
  env: {
    SITE_COUNTRY: process.env.SITE_COUNTRY,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'zu'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false,
  },
}