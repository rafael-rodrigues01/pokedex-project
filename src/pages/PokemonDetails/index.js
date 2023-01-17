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

  
  return (
    <Main>
      <Card>
        <SubCard>
          <P>
            {pokemonInfo.name}
            <span>moves</span>
          </P>

          <DivImage src={pokemonInfo.image} />
          <ul>
          {
            pokemonInfo.moves.map(move => {
              console.log(move);
              return (
                <li>{move.move.name}</li>
              )
            })
          }

          </ul>
        </SubCard>
        {/* <img src={pokemonInfo.image} />
        <ul>
          {pokemonInfo.moves.map((move) => {
            return <li>{move.move.name}</li>;
          })}
        </ul> */}
      </Card>
    </Main>
  );
};
