import Footer from './components/Footer';
import Header from './components/Header';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import DealScreen from './screens/DealScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content__wrapper">
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route exact path="/deals/:category" component={DealScreen} />
            <Route exact path="/menu/:category" component={FoodScreen} />
            <Route path="/cart/:category?" component={CartScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
