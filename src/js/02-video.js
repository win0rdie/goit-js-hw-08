import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(handlePlayClick, 1000));

function handlePlayClick({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
