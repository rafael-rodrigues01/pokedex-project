import { getPokemonApi, getPokemonData } from "../../services/apiService";
import { useState, useEffect } from "react";
import { PokemonCard } from "../../components/Pokemon-card";
import styled from "styled-components";
import { Button } from "../../components/Button";

import logoPokemon from "../../images/logo-pokedex.png";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next10PokemonsUrls, setNext10pokemonsUrls] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonsApi = await getPokemonApi();
      const next10PokemonsUrls = pokemonsApi.next;
      setNext10pokemonsUrls(next10PokemonsUrls);
      const pokemonsResults = pokemonsApi.results;
      const pokemonsUrls = pokemonsResults.map((result) => result.url);
      const pokemonsData = pokemonsUrls.map(
        async (url) => await getPokemonData(url)
      );

      const pokemonList = await Promise.all(pokemonsData);

      setPokemons(pokemonList);
    };

    fetchData();
  }, []);

  const loadMore10Pokemons = async (next10PokemonsUrls, pokemons) => {
    const response = await getPokemonData(next10PokemonsUrls);
    const pokemonsResults = response.results;
    const pokemonsUrls = pokemonsResults.map((result) => result.url);
    const pokemonsData = pokemonsUrls.map(
      async (url) => await getPokemonData(url)
    );
    const nextPokemonList = await Promise.all(pokemonsData);
    setPokemons([...pokemons, ...nextPokemonList]);
    setNext10pokemonsUrls(response.next);
  };

  return (
    <>
      <Img src={logoPokemon} />

      <DivBackground>
        <Div>
          {pokemons.map((pokemon, index) => {
            return <PokemonCard key={index} pokemonData={pokemon} pokemonId={pokemon.id}/>;
          })}
        </Div>
      </DivBackground>
      <Button
        loadMore10Pokemons={loadMore10Pokemons}
        next10PokemonsUrls={next10PokemonsUrls}
        setNext10pokemonsUrls={setNext10pokemonsUrls}
        pokemons={pokemons}
      />
    </>
  );
};

const Img = styled.img`
  width: 50%;
  min-width: 250px;
  max-width: 38%;
`;

const DivBackground = styled.div`
  background-color: #f23454;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  min-width: 60vw;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  padding: 20px;
`;

export { Home };
