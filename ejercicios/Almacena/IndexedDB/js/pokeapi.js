function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const onePokemon = document.getElementById("onePokemon");
const fivePokemon = document.getElementById("fivePokemon");

onePokemon.addEventListener("click", function () {
    pokeCall();
});

fivePokemon.addEventListener("click", function () {
    for(let i = 0; i < 5; i++){
        pokeCall();
    }
    
});

async function getPokemon() {
   const url = `https://pokeapi.co/api/v2/pokemon/${random(1, 1010)}`;
   const options = {
     method: 'GET',
   };
   
   try {
     const response = await fetch(url);
     const result = await response.json();
     return result;
   } catch (error) {
     console.error(error);
   }
}

async function pokeCall() {
    const data = await getPokemon();
    const pokemonName = data.name;
    const pokemonType = data.types.map(typeInfo => typeInfo.type.name).join(", ");
    const pokemonImage = data.sprites.front_default;
    saveData(pokemonName, pokemonType, pokemonImage);
}