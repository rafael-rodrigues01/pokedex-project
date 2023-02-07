import styled from "styled-components";

export const DivApp = styled.div`
  background: url(${(props) => props.theme.backgroundImage}) top/cover no-repeat
    fixed;
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.img`
  width: 50%;
  min-width: 200px;
  max-width: 33%;
`;

export const DivBackground = styled.div`
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  min-width: 60vw;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-items: center;
  padding: 20px;
`;
