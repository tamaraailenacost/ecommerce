import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



class Menu extends Component {
    render() {
        return ( 
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <MenuIcon></MenuIcon>
                        <Typography variant="h6" >
                        FitNess World
                        </Typography>¨
                        <SearchIcon />
                            <InputBase placeholder="Search product"/>
                        <div className="menuI">
                            <Button color="inherit">Products</Button>
                            <Button color="inherit">contact us</Button>
                            <Button color="inherit">contact us</Button>
                            <Button color="inherit">contact us</Button>
                            <Button color="inherit">contact us</Button>
                            <ShoppingCartIcon/>
                            <AccountCircle/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Menu;