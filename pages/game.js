import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import wrapPage from '../components/PageWrapper';
import Layout from '../components/Layout';
import Keyboard from '../components/Keyboard';

const Game = ({ running, paused, answered, level, digits, timeRemaiming, jokerAvailable }) => (
  <Layout>
    <div className="game">
      {running ? (
        <div className="status">
          <div className="timer">{ timeRemaiming }</div>
          <div className="level">Level { level }</div>
        </div>
      ) : (
        <div className="status">
          <div className="timer">{ timeRemaiming }</div>
          <div className="level">stopped</div>
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

const mapStateToProps = ({ game }) => game;

export default wrapPage(Game, mapStateToProps);
