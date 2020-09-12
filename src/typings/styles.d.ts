import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      black: string;
      gray: string;
      darkText: string;
      transparentGray: string;
      yellow: string;
    };
  }
}
