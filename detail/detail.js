import { getPokemon } from '../gopeekychu.js';
import { renderPokemonDetail } from '../renderOMG.js';

const pokemonDetailContainer = document.getElementById('pokemon-detail-container');

// window.addEventListener('load', async () => {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');

//     const pokemon = await getPokemon(id);
//     console.log(pokemon);

//     const pokemonDetailEl = renderPokemonDetail(pokemon);
//     pokemonDetailContainer.append(pokemonDetailEl);
// });

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const pokemon = await getPokemon(id);
    console.log(pokemon);

    const pokemonDetailEl = renderPokemonDetail(pokemon);
    pokemonDetailContainer.append(pokemonDetailEl);
}

loadData();