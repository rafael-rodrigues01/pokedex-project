import { useState, useEffect, useContext } from "react";

import arrowImage from "../../images/arrow-image.png";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Switch from "react-switch";

import { themes, ThemeContext } from "../../contexts/theme-context";

import { getPokemonDataId, getPokemonData } from "../../services/apiService";

import { Main, Card, SubCard, DivImage, Div, Header } from "./styled";

export const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});

  const { theme, setTheme } = useContext(ThemeContext);

  const [pokemonAbility, setPokemonAbility] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const responsePokemonData = await getPokemonDataId(id);
      const abilityUrls = responsePokemonData.abilities.map(
        (ability) => ability.ability.url
      );

      let skillDescription = abilityUrls.map(async (url) => {
        return await getPokemonData(url);
      });

      skillDescription = await Promise.all(skillDescription);
      setPokemonAbility(skillDescription);

      setPokemonInfo({
        name: responsePokemonData.name,
        image:
          responsePokemonData["sprites"]["versions"]["generation-v"][
            "black-white"
          ]["animated"]["front_default"],
        moves: responsePokemonData.moves.slice(0, 10),
        types: responsePokemonData.types,
        abilities: responsePokemonData.abilities,
      });
    };

    fetchData();
  }, []);

  return (
    <Main theme={theme}>
      <Card>
        <Header>
          <Link to="/">
            <img src={arrowImage} width="35"></img>
          </Link>

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
        <SubCard>
          <Div>
            <p>{pokemonInfo.name}</p>
            {Object.keys(pokemonInfo).length > 0 && (
              <ul>
                {pokemonInfo.types.map((type, index) => (
                  <li style={{ paddingLeft: "5px", textTransform: 'capitalize' }} key={index}>
                    {type.type.name}
                  </li>
                ))}
              </ul>
            )}
          </Div>

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
                {pokemonInfo.moves.map((move, index) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
            )}

            {Object.keys(pokemonAbility).length > 0 && (
              <ul className="ability">
                {pokemonAbility.map((ability, index) => (
                  <li key={index}>
                    <b style={{ textTransform: "capitalize" }}>
                      {ability.name}
                    </b>
                    <p style={{ marginBottom: "6px" }}>
                      {ability.effect_entries[0].effect}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </SubCard>
      </Card>
    </Main>
  );
};
