import { getPokemon } from '../gopeekychu.js';
import { renderPokemonDetail } from '../renderOMG.js';

const pokemonDetailContainer = document.getElementById('pokemon-detail-container');


async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const pokemon = await getPokemon(id);

    const pokemonDetailEl = renderPokemonDetail(pokemon);
    pokemonDetailContainer.append(pokemonDetailEl);
}

loadData();