import styled from "styled-components";
import backgroundImage from "../../images/larger-background-image.png";
import pokedexFrame from "../../images/animate-background.webp"

export const Main = styled.main`
  height: 100vh;
  background:url(${pokedexFrame}) no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #405056;
  width: 20em;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;

  section{
    border: 2px solid #f4d534;
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
`;

export const SubCard = styled.div`
  height: 90%;
  width: 90%;
  background-color: #940530;
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    justify-content: space-around;
  }
`;

export const P = styled.p`
  text-align: start;
  padding-left: 20px;
  color: #000000;
  font-size: 27px;
  font-family: "VT323", sans-serif;
  display: flex;
  text-align: right;
  

  span {
    width: 100%;
    padding-right: 20px;
  }
`;

export const DivImage = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  height: 100vh;
`;


