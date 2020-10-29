import React from 'react';
import { Card, 
        CardActionArea, 
        CardMedia, 
        Typography, 
        Button, 
        CardContent, 
        CardActions, 
        IconButton
    } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ItemCount from '../components/ItemCount';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Items = () => {
    return (
        <div>
           <Card>
            <CardActionArea>
                <CardMedia
                style={{ height: "150px"}}
                image="assets/images/gallery/imagen_vacia.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia 
                    asperiores exercitationem doloribus...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <AttachMoneyIcon size="small" color="primary"/>
                    <Typography>
                        1500
                    </Typography>
                <ItemCount />
                <IconButton >
                    <ShareIcon size="small" color="primary" />
                </IconButton>
            </CardActions>
            <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingBasketIcon />}
            >
                Buy
            </Button>
            </Card> 
        </div>
    );
};

export default Items;