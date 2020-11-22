import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Badge  } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useCartContext } from '../context/cartContext';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
  }));


const Menu = () => {

    const classes = useStyles();
    
    const { cart, cartQty } = useCartContext();
    console.log( cartQty);
  

    return (
        <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        
                        <Typography variant="h6" className={classes.title}>
                          <Link to="/">
                          FITNESS
                          </Link>
                        </Typography>
                        <SearchIcon />
                            <InputBase classes={{root: classes.inputRoot,input: classes.inputInput}} 
                            placeholder="Search product"/>
                        <div className="menuI">
                          <Link to="/">
                          <Button color="inherit">Products</Button>
                          </Link>
                            <Button color="inherit">contact us</Button>
                            <Button color="inherit">contact us</Button>
                            <IconButton>
                            <Link to="/cart">
                            <Badge badgeContent={ cartQty } color="secondary">
                            <ShoppingCartIcon  className="mysiconos"/>
                            </Badge>
                            </Link>
                            </IconButton>
                            <IconButton>
                                <AccountCircle className="mysiconos"/>  
                            </IconButton>  
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    );
};

export default Menu;

