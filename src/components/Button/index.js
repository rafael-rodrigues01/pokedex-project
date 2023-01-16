import styled from "styled-components";
import { getPokemonApi, getPokemonData } from "../../services/apiService";

const Button = ({
  loadMore10Pokemons,
  next10PokemonsUrls,
  setNext10pokemonsUrls,
  pokemons,
}) => {
  return (
    <ButtonStyle
      type="submit"
      onClick={async () => {
        const response = await loadMore10Pokemons(next10PokemonsUrls, pokemons);
      }}
    >
      Load more
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  font-size: 30px;
  background-color: #0088cc;
  color: #fff;
  padding: 5px 8px;
  border: 1px solid #0088cc;
  border-radius: 4px;
  cursor: pointer;
`;
export { Button };
