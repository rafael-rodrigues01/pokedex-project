import styled from "styled-components";

import backgroundImage from "../../images/larger-background-image.png";

export const Main = styled.main`
  height: 100vh;
  background: url(${(props) => props.theme.backgroundImage}) no-repeat
    center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  width: 20em;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    display: grid;
    grid-template-columns: repeat(2, 135px);
    overflow: auto;
  }

  ul {
    border: 1px solid #000;
  }

  .ability {
    border-left-style: none;
  }
`;

export const SubCard = styled.div`
  height: 90%;
  width: 90%;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  div {
    display: flex;
    justify-content: space-around;
    padding-bottom: 4px;

    h4 {
      color: #2c20e9;
    }
  }
`;

export const Div = styled.div`
  color: #000000;
  font-size: 24px;
  font-family: "VT323", sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 2px 5px 0 5px;

  p {
    padding-right: 26px;
    text-transform: capitalize;
  }

  ul {
    border: none;
    display: flex;
  }

  span {
    width: 100%;
    text-transform: capitalize;
  }
`;

export const DivImage = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  min-height: 175px;

  img {
    margin: auto;
  }
`;
