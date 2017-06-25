import React from 'react';
import { FormattedMessage } from 'react-intl';

export default () => (
  <div className="vote">
    <a
      className="button"
      href="https://www.reactriot.com/entries/52-some-motivation-needed/vote"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FormattedMessage id="votebutton" defaultMessage="Vote for us" />
    </a>
  </div>
);
