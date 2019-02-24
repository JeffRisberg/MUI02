import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './components/Footer';
import Splash from './views/Splash'
import Items from './views/Items';
import Events from './views/Events';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
      const {classes} = this.props;

      return (
         <MuiThemeProvider theme={theme}>
            <Paper className={classes.app}>
               <Router>
                  <AppBar position="static">
                     <Toolbar>
                        <Button>
                           <NavLink className={classes.navLink} to='/'>
                              Home
                           </NavLink>
                        </Button>
                        <Button>
                           <NavLink className={classes.navLink} to='/items'>
                              Items
                           </NavLink>
                        </Button>
                        <Button>
                           <NavLink className={classes.navLink} to='/events'>
                              Events
                           </NavLink>
                        </Button>
                     </Toolbar>
                  </AppBar>
                  <Router>
                     <Router>
                        <Switch>
                           <Route path="/" exact component={Splash}/>
                           <Route path="/items" component={Items}/>
                           <Route path="/events" component={Events}/>
                        </Switch>
                     </Router>
                     <Footer/>
            </Paper>
         </MuiThemeProvider>
   )
   }
   }

   export default withStyles(styles)(App);
