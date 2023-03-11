import Player from '@vimeo/player';
import throttle from "lodash.throttle"
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const onPlay = function (data) {
    console.log(data.seconds)
};
const curentTime = data.seconds
player.on('timeupdate', onPlay);
localStorage.setItem("videoplayer-current-time", "data.seconds");
player.setCurrentTime(curentTime)

// document.addEventListener(
//   "timeupdate",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 100000)
// );
