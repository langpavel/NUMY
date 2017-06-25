import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import Head from 'next/head';
import Link from 'next/link';
import wrapPage from '../components/PageWrapper';
import Layout from '../components/Layout';

const messages = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'NUMY is a new and simple game based on your ability to sum as fast as you can',
  },
});

const IndexPage = ({ intl }) => (
  <Layout>
    <Head>
      <meta name="description" content={intl.formatMessage(messages.description)} />
    </Head>
    <div className="status">
      <div className="name">
        <FormattedMessage id="greeting" defaultMessage="Welcome to NUMY" />
      </div>
    </div>
    <div className="logo">
      <img width="256" height="256" src="/android-chrome-256x256.png" alt="NUMY" />
    </div>
    <div className="startdisplay">
      <div className="start">
        <Link href="/game">
          <button>
            <FormattedMessage id="index.start" defaultMessage="Start" />
          </button>
        </Link>
      </div>
      <div className="howto">
        <Link href="/howto">
          <button>
            <FormattedMessage id="index.howto" defaultMessage="How to play" />
          </button>
        </Link>
      </div>
      { /*
      <div className="stat">
        <FormattedMessage id="index.stat" defaultMessage="Statistics" />
      </div>
      <div className="leader">
        <FormattedMessage id="index.leader" defaultMessage="Leaderboard" />
      </div>
      <div className="set">
        <FormattedMessage id="index.set" defaultMessage="Settings" />
      </div>
      */ }
    </div>
  </Layout>
);

export default wrapPage(IndexPage);
