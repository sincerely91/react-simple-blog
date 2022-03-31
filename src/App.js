import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import Button from './Button';
import Welcome from './Welcome';
import BlogDetails from './BlogDetails';
import Environment from './Categories/Environment';
import Updates from './Categories/Updates';
import Technology from './Categories/Technology';
import Design from './Categories/Design';
import Culture from './Categories/Culture';
import Business from './Categories/Business';
import Politics from './Categories/Politics';
import Opinion from './Categories/Opinion';
import Science from './Categories/Science';
import Health from './Categories/Health';
import Style from './Categories/Style';
import Travel from './Categories/Travel'
import Create from './Create';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
        <Navbar/>
          <div className="content">
            <Button/>
            <Switch>
              <Route exact path="/">
                <Welcome/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/create">
                <Create/>
              </Route>
              <Route exact path="/home/updates">
                <Updates/>
              </Route>
              <Route exact path="/home/environment">
                <Environment/>
              </Route>
              <Route exact path="/home/technology">
                <Technology/>
              </Route>
              <Route exact path="/home/design">
                <Design/>
              </Route>
              <Route exact path="/home/culture">
                <Culture/>
              </Route>
              <Route exact path="/home/business">
                <Business/>
              </Route>
              <Route exact path="/home/Politics">
                <Politics/>
              </Route>
              <Route exact path="/home/opinion">
                <Opinion/>
              </Route>
              <Route exact path="/home/science">
                <Science/>
              </Route>
              <Route exact path="/home/health">
                <Health/>
              </Route>
              <Route exact path="/home/style">
                <Style/>
              </Route>
              <Route exact path="/home/travel">
                <Travel/>
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
