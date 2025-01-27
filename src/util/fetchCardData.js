const pokeApiUrl = "https://pokeapi.co/api/v2/";
const apiEndpoint = "pokemon";
const pokemonNameList = [
  "pikachu",
  "bulbasaur",
  "charizard",
  "pidgeot",
  "oshawott",
  "gible",
  "greninja",
  "infernape",
  "onix",
  "snivy",
];

async function fetchPokemonData(pokemonName) {
  try {
    const fetchResponse = await fetch(
      `${pokeApiUrl}/${apiEndpoint}/${pokemonName}`
    );
    if (!fetchResponse.ok) {
      throw new Error(`Response not ok! Status : ${fetchResponse.status}`);
    }
    const responseJson = await fetchResponse.json();
    const pokemonData = {
      name: `${responseJson.name
        .charAt(0)
        .toUpperCase()}${responseJson.name.slice(1)}`,
      spriteUrl: responseJson.sprites.front_default,
      id: responseJson.id,
    };

    return pokemonData;
  } catch (error) {
    console.log(error.message);
  }
}

export default async function getPokemonsData() {
  const pokemonDataList = [];

  for (let i = 0; i < pokemonNameList.length; i++) {
    const pokemonData = await fetchPokemonData(pokemonNameList[i]);
    pokemonDataList.push(pokemonData)
  }

  return pokemonDataList;
}
