import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navbar/container/Navbar';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={Navbar}/> */}
        </Switch>
    </Router>
  );
}

export default App;
