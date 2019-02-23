import React, {Component} from 'react';
import Footer from './components/Footer';

import Splash from './views/Splash'
import Items from './views/Items';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';

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

class App extends Component {

    render() {
        return (
            <div className={props.classes.root}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Splash}/>
                        <Route path="/items" component={Items}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(App);
