import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);
console.log(player);

const localeStorage = 0;
player.on('timeupdate', function (e) {
  console.log(e);
  // console.log('videoplayer-current-time');
});

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
