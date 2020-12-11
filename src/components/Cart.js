import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer} from '@material-ui/core';
import {TableHead, TableRow, Paper, Button } from '@material-ui/core';
//import { Alert, AlertTitle } from '@material-ui/lab';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


// components
import Resume from '../components/Resume';
import ItemAction from '../components/ItemAction';

//icons
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



//context
import { useCartContext } from '../context/cartContext';
import userEvent from '@testing-library/user-event';





const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Cart = () => {


    const classes = useStyles();

    const { cart, removeItem, clearItems } = useCartContext();


    
    return (
    <>
      { cart.length > 0 && <Resume/> }

      { !cart.length > 0 && <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Your cart is empty <strong>check it out!</strong>
        <hr/>
        <Link to="/">Go back to Home</Link>
      </Alert>
      }

      { cart.length >0 && <TableContainer component={Paper} style={{ marginTop: "2em" }}>
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

                <ItemAction stock={ item.stock } item={ item }/>
                </TableCell>
              <TableCell align="right">
                <Button variant="contained" 
                color="secondary" 
                onClick={ () => removeItem(item) } 
                style={{ marginTop: "2em" }} 
                 >
                    <DeleteIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }
  </>
  );
        
};

export default Cart;