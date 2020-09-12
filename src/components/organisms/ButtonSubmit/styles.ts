import styled from 'styled-components';

export const Button = styled.button`
  height: 35px;
  font-size: 14px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(55, 60, 62, 0.2);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  display: block;
  width: 100%;
`;
