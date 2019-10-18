import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Main from './components/Main';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
