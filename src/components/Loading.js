import React from 'react';
import { Grid, Paper, CircularProgress } from '@material-ui/core';


const Loading = () => {
    return (
        <>
             <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
                 <CircularProgress   size='10rem' style={{ marginTop: "10em" }}
            />
            </Grid>   
        </>
    );
};

export default Loading;