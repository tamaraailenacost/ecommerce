import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Items from '../components/Items';

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

const ListItems = () => {

    const classes = useStyles();
    
    return (
        <div>
             <Grid container item spacing={4} style={{ marginTop: "2em" }}>
                 <Grid xs={0} sm={1} />
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={3} >
                        <Items/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={3} >
                        <Items/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper} elevation={3} >
                        <Items/>
                    </Paper>
                </Grid>
                <Grid xs={0} sm={1}/>
            </Grid>    
        </div>
    );
};

export default ListItems;