import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop'
import Home from './views/Home/Home';
import Introduction from './views/Introduction/Introduction';
import Game from './views/Products/Game/Game';
import Software from './views/Products/Software/Software';
import News from './views/News/News/News';
import Events from './views/News/Events/Events';
import Contact from './views/Connect/Contact/Contact';
import AboutUs from './views/Connect/AboutUs/AboutUs';
import NotFound from './views/NotFound/NotFound';
import GameDetail from './views/Products/GameDetail/GameDetail';

// import {handleTogglerInHome} from '../src/assets/js/index'

import { BrowserRouter, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>

          <Route exact path="/home">
            <Home /> 
          </Route>

          <Route>
            <Header />

            <Switch>
              <Route path="/introduction" component={Introduction} />

              <Route path="/game" component={Game} />

              <Route path="/gamedetail" component={GameDetail} />

              <Route path="/software" component={Software} />

              <Route path="/news" component={News} />

              <Route path="/events" component={Events} />

              <Route path="/contact" component={Contact} />

              <Route path="/aboutus" component={AboutUs} />

              <Route component={NotFound} status={404} />
            </Switch>

            <Footer />
            <ScrollTop />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
