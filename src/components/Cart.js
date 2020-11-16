import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useCartContext } from '../context/cartContext';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



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
              <TableCell component="th" scope="row"> {item.title} </TableCell>
              <TableCell align="right">$ {item.price}</TableCell>
              <TableCell align="right">{item.stock}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="secondary" onClick={ () => removeItem(item.id) } style={{ marginTop: "2em" }} >
                    <DeleteIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" color="secondary" onClick={ clearItems } style={{ marginTop: "2em" }} >
    <DeleteIcon/>
         Delete all 
    </Button>
    </>
  );
        
};

export default Cart;