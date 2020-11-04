import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Menu from './components/Menu';
import  ListItems  from './components/ListItems';
import { Container} from '@material-ui/core';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu/>

      <Switch>
        <Route exact path = "/">
          <Container maxWidth="lg" title = "Home">
              <ListItems/>
          </Container>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer></ItemDetailContainer>
        </Route>

      </Switch>

    </BrowserRouter>
    </>
  );
}
export default App;