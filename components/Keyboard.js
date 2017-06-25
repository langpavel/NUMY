import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { answer, gameStart, pause, resume } from '../redux/actions/game';

let hidden = null;
let visibilityChange = null;
function detectVisibilityApi() {
  if (typeof window.document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
    return true;
  }
  if (typeof window.document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
    return true;
  }
  if (typeof window.document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
    return true;
  }
  return false;
}

class Keyboard extends PureComponent {

  componentDidMount() {
    this._handleKeyDown = (event) => {
      const { code } = event;
      const { running, paused } = this.props;
      if (running && !paused) {
        const match = code.match(/^(Digit|Numpad)(\d)$/i);
        if (match) {
          const num = parseInt(match[2], 10);
          if (num) {
            event.preventDefault();
            this.props.answer(num);
          }
        }
      }
    };
    window.document.addEventListener('keydown', this._handleKeyDown);

    if (detectVisibilityApi()) {
      this._handleVisibilityChange = (event) => {
        if (window.document[hidden] && this.props.running && !this.props.paused) {
          console.info('App paused because of visibility');
          this.props.pause();
        }
      };
      window.document.addEventListener(visibilityChange, this._handleVisibilityChange);
    }
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this._handleKeyDown);
    if (this._handleVisibilityChange) {
      window.document.removeEventListener(visibilityChange, this._handleVisibilityChange);
    }
  }

  renderContinue() {
    return (
      <div className="keyboard">
        <button
          className="keyboard-large-button"
          onClick={this.props.resume}
        >
          &#9654;
        </button>
      </div>
    );
  }

  renderStart() {
    return (
      <div className="keyboard">
        <button
          className="keyboard-large-button"
          onClick={() => this.props.gameStart({ useJoker: false, extraTime: false })}
        >
          &#9654;
        </button>
      </div>
    );
  }

  renderTryAgain() {
    return (
      <div className="keyboard">
        <button
          className="keyboard-large-button again"
          onClick={() => this.props.gameStart({ useJoker: false, extraTime: false })}
        >
          <FormattedMessage id="keyboard.tryAgain" defaultMessage="Try again" />
        </button>
      </div>
    );
  }

  renderCell(num) {
    return (
      <div
        className="keycell"
        role="button"
        tabIndex={-1}
        onClick={() => this.props.answer(num)}
      >{num}</div>
    );
  }

  render() {
    const { isNewGame, running, paused } = this.props;

    if (!running) {
      if (isNewGame) {
        return this.renderStart();
      }
      return this.renderTryAgain();
    }

    if (paused) {
      return this.renderContinue();
    }

    return (
      <div className="keyboard">
        <div className="keyrow">
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div className="keyrow">
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
        </div>
        <div className="keyrow">
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game: { isNewGame, running, paused } }) => ({
  isNewGame,
  running,
  paused,
});

const mapDispatchToProps = {
  gameStart,
  answer,
  pause,
  resume,
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
