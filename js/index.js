const video = document.querySelector(".video");
const toggleBtn = document.querySelector(".toggleButton");
const progress__filled = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const skip = document.querySelectorAll("[data-skip]");
const controls = document.querySelector(".controls");
const videoPlayer = document.querySelector(".video-player");

skip.forEach((item) => {
  item.addEventListener("click", () => {
    const skipvalue = parseInt(item.dataset.skip);
    if (skipvalue === 10) {
      video.currentTime += +skipvalue;
    } else {
      video.currentTime += skipvalue;
    }
  });
});

progress__filled.style.width = `${0}%`;

function playBtn() {
  toggleBtn.querySelector("i").classList.remove("fa-play");
  toggleBtn.querySelector("i").classList.add("fa-pause");
  video.play();
}

function pauseBtn() {
  toggleBtn.querySelector("i").classList.remove("fa-pause");
  toggleBtn.querySelector("i").classList.add("fa-play");
  video.pause();
}
video.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress__filled.style.width = `${progressPercent}%`;
}

progress.addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = video.duration;

  video.currentTime = (clickX / width) * duration;
}

video.addEventListener("ended", () => {
  pauseBtn();
  progress__filled.style.width = `${0}%`;
});

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.querySelector("i").classList.contains("fa-play")) {
    playBtn();
  } else {
    pauseBtn();
  }
});

video.addEventListener("click", () => {
  if (toggleBtn.querySelector("i").classList.contains("fa-play")) {
    playBtn();
  } else {
    pauseBtn();
  }
});


videoPlayer.addEventListener("mouseout", (e) => {
  controls.setAttribute("style", "opacity: 0 ");
});
videoPlayer.addEventListener("mouseover", (e) => {
  controls.setAttribute("style", "opacity: 1");
});
