const getPokemonApi = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=10");
    return await response.json();
  } catch (error) {
    alert(error);
  }
};

const getPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const getPokemonDataId = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
};

export { getPokemonApi, getPokemonData, getPokemonDataId };
