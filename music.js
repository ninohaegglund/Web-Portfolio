
const backgroundMusic = document.getElementById('backgroundMusic');

backgroundMusic.volume = 0.1;


const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeControl = document.getElementById('volumeControl');


volumeControl.addEventListener('input', (event) => {
    backgroundMusic.volume = event.target.value;
});


playButton.addEventListener('click', () => {
  backgroundMusic.play();
});


pauseButton.addEventListener('click', () => {
  backgroundMusic.pause();
});

