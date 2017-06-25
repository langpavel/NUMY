import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import wrapPage from '../components/PageWrapper';
import Layout from '../components/Layout';
import Keyboard from '../components/Keyboard';
import Timer from '../components/Timer';
import { gameStart } from '../redux/actions/game';

class Game extends Component {

  componentDidMount() {
    if (this.props.isNewGame) {
      this.props.gameStart({
        useJoker: false,
        extraTime: false,
      });
    }
  }

  renderDisplay() {
    const { running, paused, level, digits, timeRemaiming } = this.props;
    if (running && !paused) {
      return (
        <div className="display">
          <div className="digitrow">
            <span className="digit">{digits[0]}</span>
            <span className="digit">{digits[1]}</span>
            <span className="digit">{digits[2]}</span>
            <span className="digit">{digits[3]}</span>
          </div>
        </div>
      );
    }
    if (paused) {
      return (
        <div className="display">
          <div className="digitrow paused">
            <span className="digit">Paused</span>
          </div>
        </div>
      );
    }
    return (
      <div className="display">
        <div className="digitrow empty">
          <span className="digit">–</span>
          <span className="digit">–</span>
          <span className="digit">–</span>
          <span className="digit">–</span>
        </div>
      </div>
    );
  }

  render() {
    const { running, paused, level, digits, timeRemaiming } = this.props;
    return (
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
          {this.renderDisplay()}
          <Keyboard />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  ...game,
  level: game.answered + 1,
});

const mapDispatchToProps = {
  gameStart,
};

export default wrapPage(Game, mapStateToProps, mapDispatchToProps);
