import styled from "styled-components";

import background from "../../images/fundo-pokemon.png";

export const DivMainCard = styled.div`
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
  background-blend-mode: multiply, multiply;
  width: 180px;
  height: 227px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;

  &:hover {
    box-shadow: 4px 4px 8px -1px rgba(48, 48, 48, 0.82);
    transition: 0.2s;
  }
`;

export const DivSubcard = styled.div`
  width: 150px;
  height: 195px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  border-radius: 4px;
`;

export const DivImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 144px;
  width: 150px;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 20px;
  left: 45px;
`;

export const Span = styled.span`
  color: #000000;
  font-size: 20px;
  font-family: "VT323", sans-serif;
  text-transform: capitalize;
`;
