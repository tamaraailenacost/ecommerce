import React from 'react';
import {Table, TableBody, TableCell, TableContainer} from '@material-ui/core';
import {TableHead, TableRow, Paper, Button } from '@material-ui/core';
import {Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@material-ui/core';
import { Typography, Box} from '@material-ui/core';

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useCartContext } from '../context/cartContext';




const Resume = () => {

    const { cart, clearItems } = useCartContext();

    const total = cart.reduce( ( acum, index ) => {
        return acum += index.stock * index.price; 
      }, 0);



    return (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/> }
              aria-controls="panel1a-content"
              id="panel1a-header"
            > 
              <Typography > 
                Total price: $ { total } 
              </Typography>
              <Typography  style={{ color:'#8276f4', marginLeft:"4em" }}>
                BUY IT NOW!
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab aliquid temporibus quisquam, consequatur maxime itaque quam. Eum, asperiores dolor at doloremque cum molestias architecto suscipit cupiditate doloribus quam tempore.
            </AccordionDetails>
            <br/>
            <AccordionActions>
              <Button  variant="contained" 
              size="small"  
              color="secondary"
              onClick={ clearItems }
              > 
              <DeleteIcon/>
              Remove items
              </Button>
              <Button  variant="contained" 
              size="small" 
              onClick={ clearItems } 
              color="primary"
              >
                Login to complete the purcharse
              </Button>
            </AccordionActions>
          </Accordion> 
        </>
    );
};

export default Resume;