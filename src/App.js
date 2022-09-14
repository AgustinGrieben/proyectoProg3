import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      
      <main>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
      
      <footer>
        <Footer/>
      </footer>

    </React.Fragment>
  );
}

export default App;
