import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const styles = {
   root: {
      width: '100%',
   },
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginLeft: -12,
      marginRight: 20,
   },
   title: {
      //display: 'none',
      //[theme.breakpoints.up('sm')]: {
      display: 'block',
      //},
   },
   navLink: {
      textDecoration: 'none',
      marginLeft: 10,
      marginRight: 10,
      fontFamily: 'Arial',
      fontSize: 22

   },
   search: {
      position: 'relative',
      //borderRadius: theme.shape.borderRadius,
      //backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: "white" //fade(theme.palette.common.white, 0.25),
      },
      //marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      //[theme.breakpoints.up('sm')]: {
      //   marginLeft: theme.spacing(3),
      //  width: 'auto',
      //},
   },
   searchIcon: {
      //width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
      width: '100%',
   },
   inputInput: {
      width: '100%'
   },
   sectionDesktop: {
      display: 'flex',
   },
   sectionMobile: {
      display: 'flex',
   }
};

export function Navigation(props) {
   const classes = styles;

   let title = "MUI02"; // history.location.pathname.replace(/^\/([^/]*)(?:[/\d]+([^/]+))?.*?$/, '$1 $2');

   if (title === null || title === '' || title === ' ') {
      title = 'Home';
   }

   return (
      <div sx={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <NavLink style={classes.navLink} to='/'>
                  Home
               </NavLink>
               <NavLink style={classes.navLink} to='items'>
                  Items
               </NavLink>
               <NavLink style={classes.navLink} to='events'>
                  Events
               </NavLink>
            </Toolbar>
         </AppBar>
      </div>
   );
}
