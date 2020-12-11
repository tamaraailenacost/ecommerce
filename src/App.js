import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu1 from './components/Menu1';
import  ListItems  from './components/ListItems';
import { Container} from '@material-ui/core';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/cartContext';
import Category from './components/Category';
import AuthProvider from './context/Auth';




function App() {

  
  return (
    <>
      <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Menu1/>

          <Switch>
            <Route exact path = "/">
              <Container maxWidth="lg" title = "Home">
                  <ListItems/>
              </Container>
            </Route>
            <Route exact  path="/detail/:id" >
              <ItemDetailContainer/>
            </Route>
            <Route exact  path="/categories/:categoryId" >
              <Category/>
            </Route>
            <Route exact  path="/cart" >
              <Cart/>
            </Route>

          </Switch>

        </BrowserRouter>
      </CartProvider>
      </AuthProvider>
    </>
  );
}
export default App;