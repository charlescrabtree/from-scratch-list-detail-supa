// import functions and grab DOM elements
import { getPokemans } from './gopeekychu.js';
import { renderPokemonCard } from './renderOMG.js';
// let state
const pokeballContainer = document.getElementById('pokeball-container');
// set event listeners 
window.addEventListener('load', async () => {
    const pokemans = await getPokemans();

    for (let pokemon of pokemans) {
        const pokeEl = renderPokemonCard(pokemon);

        pokeballContainer.append(pokeEl);
    }

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
