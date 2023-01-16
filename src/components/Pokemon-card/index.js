import styled from "styled-components";
import background from "../../images/fundo-pokemon.png";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonData, pokemonId }) => {
  return (
    <Link to={`/pokemon-detail/${pokemonId}`}>
      <DivMainCard>
        <DivSubcard>
          <P>{pokemonData.name}</P>
          <DivImage>
            <Img src={pokemonData.sprites.front_default} />
          </DivImage>
        </DivSubcard>
      </DivMainCard>
    </Link>
  );
};

const DivMainCard = styled.div`
  background-color: #cb3b0e;
  width: 180px;
  height: 227px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;
const DivSubcard = styled.div`
  width: 150px;
  height: 195px;
  background-color: #d35b04;
`;

const DivImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const P = styled.p`
  color: #000000;
  font-size: 27px;
  font-family: "VT323", sans-serif;
`;
const Img = styled.img`
  margin-left: -29px;
`;

export { PokemonCard };
