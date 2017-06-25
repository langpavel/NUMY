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
    <div className={paused ? 'timer paused' : 'timer'}>
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
      </svg>
      {' '}
      {time}
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
