import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.transparentGray};
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  padding: 20px;

  border-radius: 10px;
`;
