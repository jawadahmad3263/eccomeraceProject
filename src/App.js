import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/container/Home';
import Login from './pages/login/container/Login';
import AllProducts from './pages/allProducts/container/AllProducts'

import Navbar from './components/navbar/container/Navbar';
import FooterUi from './components/footer/Ui/FooterUi';
import Shipping from './components/shipping/Shipping';
import Category from './components/category/container/Category';
import CartPage from './pages/cart/container/CartPage';
import Detail from './components/detailComponent/container/Detail';



function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Products" component={AllProducts}/>
          <Route  path="/Login" component={Login}/>
          <Route path="/cartPage" component={CartPage}/>
           <Route path="/checkout" component={Shipping}/>
           <Route path="/category/:categoryType" component={Category}/>
           <Route exact path="/detail" component={Detail}/>
        </Switch>
        <FooterUi/>
    </Router>
  );
}

export default App;
