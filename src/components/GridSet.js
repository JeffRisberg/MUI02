import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const GridSet = () => (
<div className={classes.root}>
    <Grid container spacing={24}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
    </Grid>
</div>
)

export default GridSet;
