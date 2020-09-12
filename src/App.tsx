import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyles';
import defaultColors from './theme/defaultColors';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultColors}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
