const getPokemonApi = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=10");
  const json = await response.json();
  return json;
};

const getPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const getPokemonDataId = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return await response.json();
}

export { getPokemonApi, getPokemonData, getPokemonDataId };
