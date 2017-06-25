import React from 'react';

export default function Timer({ paused, timeRemaiming }) {
  if (paused) {
    return (
      <div className="timer">&#9208;</div>
    );
  }

  const time = Math.ceil(timeRemaiming / 1000);
  return (
    <div className="timer">
      { time }
    </div>
  );
}
