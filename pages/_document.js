import Document, { Head, Main, NextScript } from 'next/document';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { locale, localeDataScript } } = context;
    return {
      ...props,
      locale,
      localeDataScript,
    };
  }

  render() {
    const { locale } = this.props;

    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${locale}`;

    return (
      <html lang={locale}>
        <Head />
        <body>
          <div id="loading" className="loading">
            <svg version="1" xmlns="http://www.w3.org/2000/svg" width="346.667" height="346.667" viewBox="0 0 260.000000 260.000000">
              <path d="M125 54.5c0 46.7-.2 54.5-1.4 54.5-.8 0-16.5-14-34.8-31.1L55.5 46.8l-.3 29.1L55 105H31V45.8l-2.4 2.9C20 59 11 76 6.2 91 1.8 104.9.5 113.7.5 130c0 16.2 1.3 25.1 5.7 39 2.8 9 10.2 25.5 11.7 26.5.4.2 3.6-13.4 7-30.3 3.5-16.9 6.7-32.8 7.3-35.5.5-2.6 1.5-4.7 2.2-4.7.7 0 11.1 16.9 23.1 37.5C69.6 183.1 79.7 200 80 200c.3 0 9.7-16.9 21-37.5 13.9-25.5 21-37.4 22-37.2 1.1.2 4.3 13.9 13.1 57.2 6.4 31.4 11.9 58.5 12.3 60.3l.8 3.2h-13.6c-13.2 0-13.6-.1-14.1-2.3-.3-1.2-2.5-12.7-4.9-25.5-2.4-12.8-4.6-23.5-4.8-23.7-.4-.5-30 52.8-30.6 55-.4 1.6 18.4 7.3 30.3 9 11.5 1.7 23.9 1.9 34 .5 6.3-.9 7.4-1.4 10.4-4.7 4.6-5.1 13.1-18.2 13.1-20.1 0-.8-3.9-19.7-8.6-41.9-4.7-22.2-8.4-40.6-8.2-40.8.4-.4 29 3.4 29.6 3.9.2.2 1.8 9.5 3.7 20.6 1.9 11.1 3.5 20.4 3.7 20.5.2.2 5-8.2 10.8-18.6 10.4-19 10.4-19 13.5-18.5 1.6.3 7.2 1.1 12.3 1.7 6 .8 9.2 1.6 8.9 2.3-.3.6-11 18.9-23.9 40.6-12.9 21.7-24.1 40.6-24.8 41.9-1.2 2.3-1 2.3 4.6-.9 25.2-14.1 45.4-35.4 56.8-59.4 4.2-8.9 9-23.8 10.7-33.6 1.7-9.7 1.7-34.3 0-44-1.7-9.8-6.5-24.7-10.7-33.6-12.2-25.8-36-49.6-61.8-61.8C170.1 5.3 147.5 0 131.6 0H125v54.5zm38.2 16.2c.3 29.5.3 29.9 2.8 34.8 2.8 5.7 8.9 9.5 15 9.5 5.9 0 12.2-3.8 14.8-9 2.1-4.3 2.2-5.3 2.2-34.7V41h20v30.7c0 33.4-.4 36.8-5.6 46.3-5.8 10.6-15.4 16-30 16.8-17.6.9-29.7-5.5-36.4-19.1-4.2-8.6-5-16.1-5-47.5V41h21.8l.4 29.7z"/><path d="M88.2 7c-8.4 2.9-21.3 8.8-24.5 11.2-1.7 1.3-.7 2.5 13 15.3 8.1 7.6 16.9 15.9 19.6 18.4l4.7 4.5V4l-2.2.1c-1.3 0-6 1.3-10.6 2.9zM41.5 207.7l-2.8 14.7 5.4 5c7.8 7.1 29.7 21.2 31.8 20.4.7-.2-29.2-52.5-31-54.2-.3-.4-1.8 6-3.4 14.1z"/>
            </svg>
            <p>Loading …</p>
          </div>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
