import React from 'react';
import HomePage from './components/pages/HomePage';
import {DataProvider} from './store';

const App = () => (
  <DataProvider>
    <HomePage />
  </DataProvider>
)

export default App;
