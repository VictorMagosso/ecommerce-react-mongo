import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import Shirts from './Pages/Shirt/shirts';
import ProductScreen from './Pages/ProductScreen/productScreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cart from './Pages/Cart/cart';
import SignIn from './Pages/SignIn/signin';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/produto/:id' component={ProductScreen}/>
    <Route path='/camisetas-todos-os-itens' component={Shirts}/>
    <Route path='/carrinho/:id?' component={Cart}/>
    <Route path='/signin' component={SignIn}/>
    </Switch>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
