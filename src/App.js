import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Footer from './components/Footer';
import Splash from './views/Splash'
import Items from './views/Items';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

const styles = {
    root: {
        textAlign: 'center',
        paddingTop: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 500,
    },
    card: {
        paddingTop: 40,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
};

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: grey,
        text: {
            primary: '#000',
            secondary: '#888'
        }
    },
    status: {
        danger: 'orange',
    },
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Paper className={classes.app}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Splash}/>
                            <Route path="/items" component={Items}/>
                        </Switch>
                    </Router>
                    <Footer/>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(App);
