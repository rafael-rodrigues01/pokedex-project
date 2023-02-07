import { Link } from "react-router-dom";

import { DivMainCard, DivSubcard, DivImage, Span, Img } from "./style";

const PokemonCard = ({ pokemonData, pokemonId }) => {
  return (
    <Link to={`/pokemon-detail/${pokemonId}`}>
      <DivMainCard>
        <DivSubcard>
          <Span>{pokemonData.name}</Span>
          <DivImage>
            <Img
              src={
                pokemonData["sprites"]["versions"]["generation-v"][
                  "black-white"
                ]["animated"]["front_default"]
              }
            />
          </DivImage>
        </DivSubcard>
      </DivMainCard>
    </Link>
  );
};

export { PokemonCard };
