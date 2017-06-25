// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require('fs');
const { basename, join } = require('path');
const { createServer } = require('http');
const { parse } = require('url');
const accepts = require('accepts');
const glob = require('glob');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get the supported languages by looking for translations in the `lang/` dir.
const languages = glob.sync('./lang/*.json').map((f) => basename(f, '.json'));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => require(`./lang/${locale}.json`);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = [
      '/android-chrome-192x192.png',
      '/android-chrome-256x256.png',
      '/apple-touch-icon.png',
      '/browserconfig.xml',
      '/favicon-16x16.png',
      '/favicon-32x32.png',
      '/favicon.ico',
      '/manifest.json',
      '/mstile-150x150.png',
      '/numy-full.png',
      '/safari-pinned-tab.svg',
    ];
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      const accept = accepts(req);
      const locale = accept.language(dev ? ['en'] : languages);
      req.locale = locale;
      req.localeDataScript = getLocaleDataScript(locale);
      req.messages = dev ? {} : getMessages(locale);
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.info('> Read on http://localhost:3000');
  });
});
