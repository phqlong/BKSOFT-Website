import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Introduction from './views/Introduction/Introduction';
import Game from './views/Products/Game/Game';
import SocialApp from './views/Products/SocialApp/SocialApp';
import News from './views/News/News/News';
import Events from './views/News/Events/Events';
import Contact from './views/Connect/Contact/Contact';
import AboutUs from './views/Connect/AboutUs/AboutUs';

import { BrowserRouter, Route, Switch, IndexRoute, hashHistory} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/introduction">
            <Introduction />
          </Route>

          <Route path="/game">
            <Game />
          </Route>

          <Route path="/socialapp">
            <SocialApp />
          </Route>
          
          <Route path="/news">
            <News />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
          </Route>
        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
