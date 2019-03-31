import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './components/Footer';
import Splash from './views/Splash'
import Items from './views/Items';
import Events from './views/Events';
import {withStyles} from '@material-ui/core/styles';

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
   static propTypes = {
      history: PropTypes.object.isRequired
   };

   render() {
      const {classes, history} = this.props;

      return (
         <Router history={history}>
            <MuiThemeProvider theme={theme}>
               <Paper className={classes.app}>
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
                  <Switch>
                     <Route exact path="/" component={Splash}/>
                     <Route exact path="/items" component={Items}/>
                     <Route path="/items/detail/:id" component={Items}/>
                     <Route exact path="/events" component={Events}/>
                     <Route path="/events/detail/:id" component={Events}/>
                  </Switch>
                  <Footer/>
               </Paper>
            </MuiThemeProvider>
         </Router>
      )
   }
}

export default withStyles(styles)(App);
