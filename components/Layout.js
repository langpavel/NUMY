import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import Head from 'next/head';

import stylesheet from '../styles/index.scss';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'NUMY',
  },
});

export default injectIntl(({ intl, title, children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d89ef" />
      <meta name="apple-mobile-web-app-title" content="NUMY" />
      <meta name="application-name" content="NUMY" />
      <meta name="theme-color" content="#ffffff" />
      <title>{title || intl.formatMessage(messages.title)}</title>
      <style
        dangerouslySetInnerHTML={{ __html: stylesheet }} // eslint-disable-line react/no-danger
      />
    </Head>
    <div className="numy">
      {children}
    </div>
  </div>
));
