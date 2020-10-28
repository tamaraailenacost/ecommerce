import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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

    return (
        <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        FITNESS
                        </Typography>
                        <SearchIcon />
                            <InputBase classes={{root: classes.inputRoot,input: classes.inputInput}} 
                            placeholder="Search product"/>
                        <div className="menuI">
                            <Button color="inherit">Products</Button>
                            <Button color="inherit">contact us</Button>
                            <Button color="inherit">contact us</Button>
                            <IconButton>
                                <ShoppingCartIcon className="mysiconos"/>
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

