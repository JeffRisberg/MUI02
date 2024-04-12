import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Footer from './components/Footer';
import Items from './views/Items';
import Events from './views/Events';

import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';
import {createTheme} from '@mui/material/styles';
import {Home} from "@mui/icons-material";

const styles = {
   root: {
      textAlign: 'center',
      paddingTop: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 500,
   },
   app: {
      maxWidth: 1200,
      margin: 'auto'
   },
   card: {
      paddingTop: 40,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
   },
};

const theme = createTheme({
   typography: {
      useNextVariants: true,
   },
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
      classes: PropTypes.object,
      history: PropTypes.object.isRequired
   };

   render() {
      const {classes, history} = this.props;

      return (
         <BrowserRouter>
            <Paper>
               <Navigation/>
               <Routes>
                  <Route path="/"  element={<Home />} />
                  <Route path="items" element={<Items />} />
                  <Route path="events" element={<Events />} />
               </Routes>
               <Footer/>
            </Paper>
         </BrowserRouter>
      )
   }
}

export default withStyles(styles)(App);
