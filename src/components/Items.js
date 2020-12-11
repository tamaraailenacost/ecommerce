import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Card,
        Chip, 
        CardActionArea, 
        CardMedia, 
        Typography, 
        Button, 
        Paper,
        Grid,
        CardContent, 
        CardActions, 
        IconButton
    } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ItemCount from '../components/ItemCount';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const Items = ( { resp } ) => {

    const classes = useStyles();

    return resp.map( (item) =>
        
        <Grid item xs={12} sm={3}> 
        <Paper className={classes.paper} elevation={3} >
           <Card>
            <CardActionArea>
                
                    <CardMedia
                    style={{ height: "150px"}}
                    image={ item.pictureUrl }
                    title={ item.title }
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { item.title }
                    </Typography>
                    <Typography>
                     $ { item.price } 
                     </Typography>
                    <Chip label={ item.category }   color="secondary" />
                    </CardContent>
                    <Link to={ `/detail/${item.id }`}  color="initial"   underline="none">
                        Read More...
                    </Link>
                    <hr/>
            </CardActionArea>
            <CardActions>
                    <Grid>
                    <ItemCount  item = {item} />
                    </Grid>
            </CardActions>
            </Card> 
        </Paper>
    </Grid>
    )
};

export default Items;