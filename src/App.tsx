import { BrowserRouter } from 'react-router-dom';

import Router from './router/Router';
import Navbar from './components/Navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
