import React, { Component } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import Link from 'next/link';
import wrapPage from '../components/PageWrapper';
import Layout from '../components/Layout';

const messages = defineMessages({
  howto: {
    id: 'howto',
    defaultMessage: `
      NUMY is a new and simple game based on your ability to sum as fast as you can. During the given time, go through as many levels as you can and get to the tops of the world's halls of fame - that's where various surprises are waiting for you!{br}
      {br}
      What should I do?{br}
      Count the digit root of 3- or 4-digit numbers as fast as you can.{br}
      E.g. 606; 6+0+6=12; 1+2=3; click 3!{br}
      {br}
      How much time do I have?{br}
      60 seconds. Solve as many sums as you can! You can also share your final score with your friends.{br}
      {br}
      Can I get something by playing?{br}
      Yes! Each month the player with the highest score wins valuable prizes from the organizators. So try your best!{br}
      {br}
      So do you think you've got what it takes? Play NUMY and proove us!`,
  },
});

class Howto extends Component {
  static async getInitialProps({ req }) {
    return { someDate: Date.now() };
  }

  render() {
    return (
      <Layout>
        <div className="status">
          <div className="name">
            <FormattedMessage id="howto.title" defaultMessage="How to Play" />
          </div>
        </div>
        <div className="howto">
          <FormattedMessage {...messages.howto} values={{ br: <br /> }} />
          <div className="logo">
            <img width="256" height="256" src="/android-chrome-256x256.png" alt="NUMY" />
          </div>
          <div className="start">
            <Link prefetch href="/game">
              <button>
                <FormattedMessage id="howto.start" defaultMessage="Play Now!" />
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default wrapPage(Howto);
