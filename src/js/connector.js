const GREY_ROCKET_ICON =
  'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
const WHITE_ROCKET_ICON =
  'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';
console.log('Hello World');

const onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

const onBtnReportsClick = function (t, opts) {
  console.log('Open Reports!!!');
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [
      {
        icon:
          'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
        text: 'Estimate Size',
        callback(t) {
          return t.popup({
            title: 'Estimation',
            url: 'estimate.html',
          });
        },
      },
    ];
  },
  'card-badges': function (t, options) {
    return t.get('card', 'shared', 'estimate').then(function (estimate) {
      return [
        {
          icon: estimate ? GREY_ROCKET_ICON : WHITE_ROCKET_ICON,
          text: estimate || 'No Estimate!',
          color: estimate ? null : 'red',
        },
      ];
    });
  },

  'card-detail-badges': function (t, options) {
    return t.get('card', 'shared', 'estimate').then(function (estimate) {
      return [
        {
          title: 'Estimate',
          text: estimate || 'No Estimate!',
          color: estimate ? null : 'red',
          callback(t) {
            return t.popup({
              title: 'Estimation',
              url: 'estimate.html',
            });
          },
        },
      ];
    });
  },

  'board-buttons': function (t, options) {
    return [
      {
        icon: {
          dark: WHITE_ROCKET_ICON,
          light: GREY_ROCKET_ICON,
        },
        text: 'Callback',
        callback: onBtnClick,
        condition: 'edit',
      },
      {
        icon: {
          dark: WHITE_ROCKET_ICON,
          light: GREY_ROCKET_ICON,
        },
        text: 'Reports',
        callback: onBtnReportsClick,
        condition: 'edit',
      },
    ];
  },
});
