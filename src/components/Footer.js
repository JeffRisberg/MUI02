import React from 'react';

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

export default Footer;
