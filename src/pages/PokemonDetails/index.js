import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPokemonDataId, getPokemonData } from "../../services/apiService";

import { Main, Card, SubCard, DivImage, P } from "./styled";

export const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState({
    // name: "",
    // image: "",
    // moves: [],
    // types: [],
    // abilities: [],
  });

  const [pokemonAbility, setPokemonAbility] = useState({
    name: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responsePokemonData = await getPokemonDataId(id);

      setPokemonInfo({
        name: responsePokemonData.name,
        image: responsePokemonData.sprites.front_default,
        moves: responsePokemonData.moves.slice(0, 10),
        types: responsePokemonData.types,
        abilities: responsePokemonData.abilities,
      });
    };

    fetchData();
  }, []);

  const { abilities } = pokemonInfo;

  const getPokemonSkillDescription = async (abilities) => {
    const abilityUrls = abilities.map((ability) => ability.ability.url);
    let skillDescription = abilityUrls.map(async (url) => {
      return await getPokemonData(url);
    });

    skillDescription = await Promise.all(skillDescription);
    console.log(skillDescription);
    setPokemonAbility({
      name: skillDescription.map((name) => name.name),
    });
  };

  console.log(pokemonAbility);

  useEffect(() => {
    getPokemonSkillDescription(abilities);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const abilityName = pokemonInfo.abilities.map(
  //       (ability) => ability.ability.name
  //     );
  //     const urls = pokemonInfo.abilities.map((ability) => ability.ability.url);

  //     const getPokemonAbilityDescription = urls.map(
  //       async (url) => await getPokemonData(url)
  //     );
  //     const skillDescription = await Promise.all(getPokemonAbilityDescription);
  //     console.log(skillDescription);
  //     setPokemonAbility({
  //       name: abilityName,
  //       description: skillDescription.effect_entries,
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <Main>
      <Card>
        <SubCard>
          <P>
            {pokemonInfo.name}
            <span>moves</span>
          </P>

          <DivImage>
            <img src={pokemonInfo.image} />
          </DivImage>
          <div>
            <h4>Moves</h4>
            <h4>Abilities</h4>
          </div>
          <section>
            {Object.keys(pokemonInfo).length > 0 && (
              <ul>
                {pokemonInfo.moves.map((move, index) => {
                  return <li key={index}>{move.move.name}</li>;
                })}
              </ul>
            )}

            {/* {Object.keys(pokemonAbility).length > 0 && (
              <ul>
                {pokemonAbility.name.map((ability, index) => {
                  console.log(ability);
                })}
              </ul>
            )} */}
          </section>
        </SubCard>
      </Card>
    </Main>
  );
};
