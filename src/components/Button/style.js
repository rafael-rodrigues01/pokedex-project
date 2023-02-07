import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 30px;
  background-color: #0088cc;
  color: #000;
  padding: 5px 8px;
  border: 1px solid #0088cc;
  border-radius: 0.6em;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
`;
