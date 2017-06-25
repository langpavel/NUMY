import React from 'react';

const OUT_RADIUS = 38;

const n = (num) => (num || 0).toFixed(2);

export default function Timer({ paused, timeRemaiming }) {
  const time = Math.ceil(timeRemaiming / 1000);
  const angle = (Math.PI * timeRemaiming) / 30000;
  const x = Math.sin(angle);
  const y = Math.cos(angle);
  const largeArc = time >= 30 ? 1 : 0;

  return (
    <div className="timer">
      {time}
      {paused ? '⏸' : null}
    </div>
  );

/*
  return (
    <div className="timer">
      <svg width="70" height="70" viewBox="-40 -40 80 80">
        <path
          d={`
            M${n(x * OUT_RADIUS)},${n(y * OUT_RADIUS)}
            A ${OUT_RADIUS} ${OUT_RADIUS} 0 ${largeArc} 0 0 ${-OUT_RADIUS}
          `}
        />
        <text x="0" y="0" fontFamily="Verdana" fontSize="20">
          {time}
        </text>
      </svg>
    </div>
  );
*/
}
