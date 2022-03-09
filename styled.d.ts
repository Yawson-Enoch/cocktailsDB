import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    tertiaryColor: string;
    secondaryColor: string;
    linksColor: string;
    linksHoverColor: string;
    errorColor: string;
  }
}
