import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPokemonDataId, getPokemonData } from "../../services/apiService";

import { Main } from "./styled";

export const PokemonDetail = () => {
 const [pokemonInfo, setPokemonInfo] = useState({
  name: "",
  image: "",
  moves: [],
  types: [],
  abilities: []
 })

 const { id } = useParams();
 
 useEffect(() => {
  const fetchData = async () => {
    const responsePokemonData = await getPokemonDataId(id)

    setPokemonInfo({
      name: responsePokemonData.name,
      image: responsePokemonData.sprites.front_default,
      moves: responsePokemonData.moves.slice(0, 10),
      types: responsePokemonData.types,
      abilities: responsePokemonData.abilities
    })
    // setPokemonInfo({
    //   name: responsePokemonData.name,
    //   image: responsePokemonData.sprites.front_default,
    //   moves: responsePokemonData.moves,
    //   types: responsePokemonData.types
    // })
  }
  fetchData();
 }, [])

 const AbilityPokemonName = pokemonInfo.abilities.filter(ability => ability.ability.name)

 console.log(AbilityPokemonName);


 return(
  <>
    <h2>essa é minha página de detalhes de pokemon</h2>
    <img src={pokemonInfo.image} />
    <Main>
      <ul>
        {
          pokemonInfo.moves.map(move => {
            return (
              <li>{move.move.name}</li>
            )
          })
        }
        {
          pokemonInfo.types.map(type => {
            return (
              <li>{type.type.name}</li>
            )
          })
        }
      </ul>

      <ul>
        {/* {
          pokemonInfo.abilities.filter(ability => {
        
          })
        } */}
      </ul>
    </Main>
  </>
 )
}


