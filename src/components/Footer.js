import React from 'react';
import FilterLink from '../containers/FilterLink';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        marginTop: "10px",
        background: "#f44"
    },
};

function Footer(props) {
    const {classes} = props;
    const spacing = 16;

    return (
        <p className={classes.root}>
            <FilterLink filter="SHOW_ALL">All</FilterLink>
            <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </p>
    );
}

export default withStyles(styles)(Footer);
