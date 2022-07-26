import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', saveTime);

function saveTime({ seconds }) {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

let savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);
