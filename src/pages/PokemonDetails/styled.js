import styled from "styled-components";
import backgroundImage from "../../images/larger-background-image.png";

export const Main = styled.main`
  height: 100vh;
  background-color: #994;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #405056;
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubCard = styled.div`
  height: 90%;
  width: 90%;
  background-color: #940530;
  display: flex;
  flex-direction: column;
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
  background: url(${backgroundImage}) no-repeat;
  height: 100vh;
  margin-left: 152px;
`;
