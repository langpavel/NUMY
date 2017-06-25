
export default function getInitialState() {
  return {
    game: {
      running: false,
      paused: false,
      answered: 0,
      digits: [0, 0, 0, 0],
      // in ms
      timeRemaiming: 60000,
      jokerAvailable: false,
    },
  };
}
