import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { CocktailsContextProvider } from '../../store/context/CocktailsContext';
import { GlobalStyles } from '../../styles/globalStyles';
import { light } from '../../styles/theme';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { LayoutWrapper } from './Layout.styles';

const Layout: FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <CocktailsContextProvider>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </CocktailsContextProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
