const $video = document.getElementById("video_player");
const $play = document.getElementById("play");
const $pause = document.getElementById("pause");
const $backward = document.getElementById("backward");
const $forward = document.getElementById("forward");
const $progress = document.getElementById("player_progress");

$play.addEventListener("click", () => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
});

$pause.addEventListener("click", () => {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
});

$backward.addEventListener("click", () => {
  $video.currentTime -= 10;
});

$forward.addEventListener("click", () => {
  $video.currentTime += 10;
});

$video.addEventListener("loadedmetadata", () => {
  $progress.max = $video.duration;
});

$video.addEventListener("timeupdate", () => {
  $progress.value = $video.currentTime;
});

$progress.addEventListener("input", () => {
  $video.currentTime = $progress.value;
});
