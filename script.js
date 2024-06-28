let progress = document.querySelector(".progress input");
let song = document.querySelector(".song");
let ctrlIocn = document.getElementById("play-pause");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrlIocn.classList.contains("fa-pause")) {
    song.pause();
    ctrlIocn.classList.remove("fa-pause");
    ctrlIocn.classList.add("fa-play");
  } else {
    song.play();
    ctrlIocn.classList.remove("fa-play");
    ctrlIocn.classList.add("fa-pause");
  }
}
if (!song.pause()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = () => {
  song.currentTime = progress.value;
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    playPause();
  }
});
