import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/App';
import { ThemeProvider } from 'styled-components';

import { dark, light } from './config/theme';
import { MetaMaskProvider } from './hooks';
import { getThemePreference, setLocalStorage } from './utils';

export type RootProps = {
  children: ReactNode;
};

type ToggleTheme = () => void;

export const ToggleThemeContext = createContext<ToggleTheme>(
  (): void => undefined,
);

const Index = () => {
  const [darkTheme, setDarkTheme] = useState(getThemePreference());

  const toggleTheme: ToggleTheme = () => {
    setLocalStorage('theme', darkTheme ? 'light' : 'dark');
    setDarkTheme(!darkTheme);
  };

  return (
    <ToggleThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <MetaMaskProvider>
          <App />
        </MetaMaskProvider>
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
