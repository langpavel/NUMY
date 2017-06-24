import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import Head from 'next/head';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js',
  },
});

export default pageWithIntl(({ intl }) => (
  <Layout>
    <Head>
      <meta name="description" content={intl.formatMessage(description)} />
    </Head>
    <div className="game">
      <div className="startstatus">
        <div className="name">
          <FormattedMessage id="greeting" defaultMessage="Welcome to NUMY" />
        </div>
      </div>
      <div className="line" />
      <div className="logo" />
      <div className="startdisplay">
        <div className="start">
          <FormattedMessage id="index.start" defaultMessage="Start" />
        </div>
        <div className="stat">
          <FormattedMessage id="index.stat" defaultMessage="Statistics" />
        </div>
        <div className="leader">
          <FormattedMessage id="index.leader" defaultMessage="Leaderboard" />
        </div>
        <div className="set">
          <FormattedMessage id="index.set" defaultMessage="Settings" />
        </div>
      </div>
    </div>
  </Layout>
));
