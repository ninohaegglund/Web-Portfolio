
const backgroundMusic = document.getElementById('backgroundMusic');

backgroundMusic.volume = 0.05;


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

async function fetchData() {

  try{

      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if(!response.ok){
          throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
  }
  catch(error){
      console.error(error)    

  }
}

