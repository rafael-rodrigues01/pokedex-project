import { useState, useEffect, useContext } from "react";
import Switch from "react-switch";

import { Img, DivBackground, Div, DivApp, Header } from "./style";

import { getPokemonApi, getPokemonData } from "../../services/apiService";
import { PokemonCard } from "../../components/Pokemon-card";
import { Button } from "../../components/Button";

import { ThemeContext, themes } from "../../contexts/theme-context";

import logoPokemon from "../../images/logo-pokedex-01.png";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next10PokemonsUrls, setNext10pokemonsUrls] = useState();

  const { theme, setTheme } = useContext(ThemeContext);

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
    <DivApp theme={theme}>
      <Header>
        <Img src={logoPokemon} />

        <Switch
          onChange={() =>
            setTheme(theme === themes.light ? themes.dark : themes.light)
          }
          checked={theme === themes.dark}
          onColor={"#4949a2"}
          uncheckedIcon={false}
          checkedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
      </Header>

      <DivBackground>
        <Div>
          {pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                key={index}
                pokemonData={pokemon}
                pokemonId={pokemon.id}
              />
            );
          })}
        </Div>
      </DivBackground>
      <Button
        loadMore10Pokemons={loadMore10Pokemons}
        next10PokemonsUrls={next10PokemonsUrls}
        pokemons={pokemons}
      />
    </DivApp>
  );
};

export { Home };
