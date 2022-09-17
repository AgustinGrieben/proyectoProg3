import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CancionesPopulares from './screens/cancionesPopulares/CancionesPopulares';
import AlbumesPopulares from './screens/albumesPopulares/AlbumesPopulares';
import DetailCancion from './screens/DetailCancion/DetailCancion';
import DetailAlbum from './screens/DetailAlbum/DetailAlbum';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cancionesPopulares" component={CancionesPopulares}/>
          <Route path="/albumesPopulares" component={AlbumesPopulares}/>
          <Route path="/DetailCancion" component={DetailCancion}/>
          <Route path="/DetailAlbum" component={DetailAlbum}/>
        </Switch>
      </main>
      
      <footer>
        <Footer/>
      </footer>

    </React.Fragment>
  );
}

export default App;
