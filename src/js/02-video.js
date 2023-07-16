import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
let player = new Player(iframe);

player.on('timeupdate', throttle(function (currentTime) {
    localStorage.setItem("videoplayer-current-time", currentTime.seconds);
}, 1000));


let savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
    player.getDuration().then((duration) => {
        if (savedTime >= 0 && savedTime < duration) {
            player.setCurrentTime(savedTime);
        } else {
            localStorage.removeItem("videoplayer-current-time");
        }
    })
}

