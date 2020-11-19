import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer} from '@material-ui/core';
import {TableHead, TableRow, Paper, Button } from '@material-ui/core';
import {Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Typography} from '@material-ui/core';

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Firabase
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';

//context
import { useCartContext } from '../context/cartContext';





const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Cart = () => {


    const classes = useStyles();

    const { cart, removeItem, clearItems } = useCartContext();
    
    const acum = cart.map( (i ) => {        
        return i.price * i.stock;
    });
    const sum =acum.reduce( (acum, index) => acum + index );


    function createOrder() {
      const newOrder = {
          buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
          items: [
              { id: '1', title: 'zapas', price: 200, quantity: 2 },
              { id: '2', title: 'gorro', price: 100, quantity: 1 },
          ],
          date: firebase.firestore.FieldValue.serverTimestamp(),
          total: 500,
      };

      const db = getFirestore();

      const orders = db.collection("orders");

      orders.add(newOrder).then(id => {
          console.log('Order created with id: ', id);
      });
  }

    
    return (
    <>
      <Button variant="contained" color="secondary" onClick={ createOrder } style={{ marginTop: "2em" }} >
              <DeleteIcon/>
              Create
            </Button>
            <Button variant="contained" color="secondary" onClick={ clearItems } style={{ marginTop: "2em" }} >
        <DeleteIcon/>
           Delete all 
      </Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> Total compra:  {sum}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab aliquid temporibus quisquam, consequatur maxime itaque quam. Eum, asperiores dolor at doloremque cum molestias architecto suscipit cupiditate doloribus quam tempore.
        </AccordionDetails>
      </Accordion>
      <TableContainer component={Paper} style={{ marginTop: "2em" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => ( 
            <TableRow key={item.title}>
              <TableCell component="th" scope="row"> {item.title} - ${item.price} u. </TableCell>
              <TableCell align="right">$ {item.price * item.stock}</TableCell>
              <TableCell align="right">
              <Button variant="contained" color="action" fontSize="small"  style={{ marginTop: "2em", marginRight:"2em"  }} >
                    <AddIcon/>
                </Button>

                {item.stock}

                <Button variant="contained" color="inherit" fontSize="small" style={{ marginTop: "2em", marginLeft:"2em" }} >
                    <RemoveIcon/>
                </Button>
                </TableCell>
              <TableCell align="right">
                <Button variant="contained" color="secondary" onClick={ () => removeItem(item) } style={{ marginTop: "2em" }} >
                    <DeleteIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
  </>
  );
        
};

export default Cart;