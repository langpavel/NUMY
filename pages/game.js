import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import wrapPage from '../components/PageWrapper';
import Layout from '../components/Layout';
import Keyboard from '../components/Keyboard';
import Timer from '../components/Timer';

const Game = ({ running, paused, level, digits, timeRemaiming, jokerAvailable }) => (
  <Layout>
    <div className="game">
      {paused ? (
        <div className="status">
          <Timer timeRemaiming={timeRemaiming} running={running} paused={paused} />
          <div className="level">Level { level }</div>
        </div>
      ) : (
        <div className="status">
          <Timer timeRemaiming={timeRemaiming} running={running} paused={paused} />
          <div className="level">Level { level }</div>
        </div>
      )}
      <div className="line" />
      <div className="display">
        {(running && !paused) ? (
          <div className="digitrow">
            <span className="digit">{digits[0]}</span>
            <span className="digit">{digits[1]}</span>
            <span className="digit">{digits[2]}</span>
            <span className="digit">{digits[3]}</span>
          </div>
        ) : null}
      </div>
      <Keyboard />
    </div>
  </Layout>
);

const mapStateToProps = ({ game }) => ({
  ...game,
  level: game.answered + 1,
});

export default wrapPage(Game, mapStateToProps);
