import { Fragment } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    </Fragment>
  );
}

export default App;
