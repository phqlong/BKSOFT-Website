import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import Game from './components/Products/Game/Game';
import SocialApp from './components/Products/SocialApp/SocialApp';
import News from './components/News/News/News';
import Events from './components/News/Events/Events';
import Contact from './components/Connect/Contact/Contact';
import AboutUs from './components/Connect/AboutUs/AboutUs';

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

          <Route path="/products">
            <Route path="/game" component={Game} />
            <Route path="/socialapp" component={SocialApp} />
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
