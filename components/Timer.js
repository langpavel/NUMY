import React from 'react';

export default function Timer({ timeRemaiming }) {
  const time = Math.ceil(timeRemaiming / 1000);

  return (
    <div className="timer">
      { time }
    </div>
  );
}
