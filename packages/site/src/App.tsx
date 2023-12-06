import { useContext } from 'react';
import { ToggleThemeContext } from 'src/index';
import Index from 'src/pages';
import styled from 'styled-components';

import { Footer, Header } from './components';
import { GlobalStyle } from './config/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
`;

export const App = () => {
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header handleToggleClick={toggleTheme} />
        <Index />
        <Footer />
      </Wrapper>
    </>
  );
};
