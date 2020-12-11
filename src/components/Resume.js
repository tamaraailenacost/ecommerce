import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableContainer} from '@material-ui/core';
import {TableHead, TableRow, Paper, Button } from '@material-ui/core';
import {Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@material-ui/core';
import Loading from '../components/Loading';
import { Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

//icons
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert, AlertTitle } from '@material-ui/lab';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//context
import { useAuthContext } from '../context/Auth';
import { useCartContext } from '../context/cartContext';

//Firabase
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';





const Resume = () => {

    const { cart, clearItems } = useCartContext();
    const { logIn,  user } = useAuthContext();
    const [orderId, setOrderId ] = useState(null);
    const [error, setError ] = useState( false);
  

    const total = cart.reduce( ( acum, index ) => {
        return acum += index.stock * index.price; 
      }, 0);



       function createOrder() {
        const newOrder = {
            buyer: { name: user.displayName, email: user.email },
            items: [...cart],
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: total,
        };
  
        const db = getFirestore();
  
        const orders = db.collection("orders");
  
        orders.add(newOrder).then( id => {

            const doc =  orders.add(newOrder);
            console.log('Order created with id: ', doc.id);
            setOrderId(doc.id);

        }).catch( (err) => {
          setError(true);
          console.log( "hubo un error");
  
        });
   
    }



    return (
        <>
          <Accordion className={ !orderId ? "claseCSSMostrar" :" claseCSSNoMostrar" }>
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
            { user && <AccordionDetails>
              
             Details
             <br/>
             Email:  { user.email}
             <br/>
             Name : {user.displayName}
             <br/>
          
            </AccordionDetails>
              }
            <br/>
            <AccordionActions >
              <Button  variant="contained" 
              size="small"  
              color="secondary"
              onClick={ clearItems }
              > 
              <DeleteIcon/>
              Remove items
              </Button>¨

              { !user && <Button  variant="contained" 
              size="small" 
              onClick={ logIn } 
              color="primary"
              >
                Login to complete the purcharse
              </Button>
              }
              { user && <Button  variant="contained" 
              onClick={createOrder}
              size="small" 
              color="primary"
              >
                Checkout
              </Button>
              }
            </AccordionActions>
          </Accordion> 
          { orderId && !error && <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}>
                  Your orden number is <strong>{ orderId } </strong>
                    <br/>
                    Total: <strong>${ total } </strong>
                    <br/>
                    Email:  { user.email}
                    <br/>
                    Name : {user.displayName}
                    <br/>
            </Alert>
            }
            { error  && <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  There is a problem <strong> with the internet conexion  </strong>
                  or the item you are looking for doesn't exist.
                  <hr/>
                  <Link to="/">Go back to Home</Link>
                </Alert>
            }
        </>
    );
};

export default Resume;