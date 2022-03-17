import React from 'react';
import { Router } from './router/Router';
import { GlobalState } from './global/GlobalState';
import GlobalStyled from './styled/GlobalStyled';

function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <Router />
    </GlobalState>
  );
}

export default App;