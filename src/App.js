import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu from './components/Menu';
import  ListItems  from './components/ListItems';
import { Container} from '@material-ui/core';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/cartContext';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Menu/>

          <Switch>
            <Route exact path = "/">
              <Container maxWidth="lg" title = "Home">
                  <ListItems/>
              </Container>
            </Route>
            {/*path="/item/:id"*/}
            <Route exact  path="/detail/:id" >
              <ItemDetailContainer/>
            </Route>
            <Route exact  path="/cart" >
              <Cart/>
            </Route>

          </Switch>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;