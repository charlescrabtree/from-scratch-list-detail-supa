export function renderPokemonCard(pokemon) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('pokemon-card');
    console.log('render-pokemon', pokemon);

    p.textContent = pokemon.name;
    img.src = `./assets/${pokemon.name}.png`;
    a.href = `/detail/?id=${pokemon.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPokemonDetail(pokemon) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const pokedexEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const evolutionEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const evolutionAndTypeEl = document.createElement('div');

    div.classList.add('pokemon-detail');

    nameEl.textContent = pokemon.name;
    nameEl.classList.add('name');

    pokedexEl.textContent = pokemon.pokedexn;
    pokedexEl.classList.add('pokedex-number');

    evolutionEl.textContent = pokemon.evolution;
    evolutionEl.classList.add('evolution');


    typeEl.textContent = pokemon.type;
    typeEl.classList.add('type');

    evolutionAndTypeEl.classList.add('evolution-and-type');

    evolutionAndTypeEl.append(evolutionEl, typeEl);

    img.src = `../assets/${pokemon.name}.png`;

    div.append(nameEl, img, evolutionAndTypeEl, pokedexEl);

    return div;


}