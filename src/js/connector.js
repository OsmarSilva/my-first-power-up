console.log('Hello World');

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [
      {
        icon:
          'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
        text: 'Estimate Size',
      },
    ];
  },
  'card-badges': function (t, options) {
    return [
      {
        icon:
          'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
        text: '3',
      },
    ];
  },
});
