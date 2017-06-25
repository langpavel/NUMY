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
