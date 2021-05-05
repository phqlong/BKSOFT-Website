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
import NotFound from './views/NotFound/NotFound';

import { BrowserRouter, Route, Switch, IndexRoute, hashHistory} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/home" component={Home} />

          <Route path="/introduction" component={Introduction} />

          <Route path="/game" component={Game} />

          <Route path="/socialapp" component={SocialApp} />

          <Route path="/news" component={News} />
          
          <Route path="/events" component={Events} />

          <Route path="/contact" component={Contact} />

          <Route path="/aboutus" component={AboutUs} />

          <Route component={NotFound} status={404} />
        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
