import { ButtonStyle } from "./style";

const Button = ({ loadMore10Pokemons, next10PokemonsUrls, pokemons }) => {
  return (
    <ButtonStyle
      type="submit"
      onClick={async () => {
        return await loadMore10Pokemons(next10PokemonsUrls, pokemons);
      }}
    >
      Load more
    </ButtonStyle>
  );
};

export { Button };
