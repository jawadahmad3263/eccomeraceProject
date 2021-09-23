import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/container/Home';
import Login from './pages/login/container/Login';
import AllProducts from './pages/allProducts/container/AllProducts'

import Navbar from './components/navbar/container/Navbar';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Products" component={AllProducts}/>
          <Route  path="/Login" component={Login}/>

        </Switch>
    </Router>
  );
}

export default App;
