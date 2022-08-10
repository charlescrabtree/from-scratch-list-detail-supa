
import { getPokemans } from './gopeekychu.js';
import { renderPokemonCard } from './renderOMG.js';

const pokeballContainer = document.getElementById('pokeball-container');

window.addEventListener('load', async () => {
    const pokemans = await getPokemans();

    for (let pokemon of pokemans) {
        const pokeEl = renderPokemonCard(pokemon);

        pokeballContainer.append(pokeEl);
    }

});

