import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { answer, gameStart, pause, resume } from '../redux/actions/game';

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
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this._handleKeyDown);
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
    const { running, paused } = this.props;

    if (paused) {
      return this.renderContinue();
    }

    if (!running) {
      return this.renderStart();
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

const mapStateToProps = ({ game: { running, paused } }) => ({
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
