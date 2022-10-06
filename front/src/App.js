import './App.css';
import { Route, Switch } from "react-router-dom"
import { Nursedata } from './components/Nursedata';
import { Remainingspots } from './components/Remainingspots';
import { Hiringposibility } from './components/Hiringposibility';
import { Moreshifts } from './components/Moreshifts';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar/>
      </Route>
      
      <Switch>                
        <Route path="/remaining">
          <Remainingspots />
        </Route>

        <Route path="/hiring">
          <Hiringposibility />
        </Route>

        <Route path="/shifts-taken">
          <Moreshifts />
        </Route>

        <Route exact path="/">
          <Nursedata />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
