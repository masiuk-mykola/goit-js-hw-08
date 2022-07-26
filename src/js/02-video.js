import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime({ seconds }) {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

let savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);
