import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        marginTop: "10px",
        padding: "5px",
        background: "#eee"
    },
};

function Footer(props) {
    const {classes} = props;
    const spacing = 16;

    return (
        <div className={classes.root}>
            MUI02
        </div>
    );
}

export default withStyles(styles)(Footer);
