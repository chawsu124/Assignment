// Music Player //
const musicPlayerContainerTag = document.getElementsByClassName("musicPlayerContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];

const currentProgressTag = document.getElementById("currentProgress");// no need [0] cause of given it to id
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const track = [
    { trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
    { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
    { trackId: "music/track3.mp3", title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein",},
    { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " }
]

for(let i = 0;i < track.length;i++){
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        currentPlayingIndex = i;
        playSong();
    })
    
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + track[i].title;
    trackTag.textContent = title;
    musicPlayerContainerTag.append(trackTag);
}

let duration = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration); // 147.92938
    durationText = createMinuteAndSecondText(duration);
  });
  
audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime); // 147.3949
    const currentTimeText = createMinuteAndSecondText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
  });

const updateCurrentProgress = (currentTime) => {
      const currentProgressWidth = (500 / duration) * currentTime;
      currentProgressTag.style.width = currentProgressWidth.toString() + "px";
  }
  // we have given currentProgress's width = 500px;
  // if duration = 4; now currentTime = 12;
  // (500 / 4) * 12


const createMinuteAndSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);// 240.251423 / 60 --> 4 min
    const seconds = totalSecond % 60;// 240.251423 % 60 --> 12 sec
  
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minuteText + ":" + secondText;
  }

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);//250.251423
    isPlaying = true;
    if(currentTime === 0){
        playSong();
    }
    else{
        audioTag.play();
        updatePlayAndPauseButton();
    }
})

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPauseButton();
})

previousButtonTag.addEventListener("click", () => {
    if(currentPlayingIndex === 0){
        return;
    }
    else{
        currentPlayingIndex -= 1;
        playSong();
    }
})

nextButtonTag.addEventListener("click", () => {
    if(currentPlayingIndex === track.length - 1){
        return;
    }
    else{
        currentPlayingIndex += 1;
        playSong();
    }
})


const playSong = () => {
    const songIdToPlay = track[currentPlayingIndex].trackId;
    audioTag.src = songIdToPlay;
    audioTag.play();
    isPlaying = true;
    updatePlayAndPauseButton();
}

const updatePlayAndPauseButton = () => {
      if(isPlaying){
        playButtonTag.style.display = "none";
        pauseButtonTag.style.display = "inline";
      }else{
        playButtonTag.style.display = "inline";
        pauseButtonTag.style.display = "none";
      }
  }

