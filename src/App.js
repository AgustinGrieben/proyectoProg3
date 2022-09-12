import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';

function App() {
  return (
    <React.Fragment>
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
      <footer>

      </footer>



    </React.Fragment>
  );
}

export default App;
