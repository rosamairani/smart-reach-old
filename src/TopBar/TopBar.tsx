import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import './TopBar.css';
import Toolbar from '@material-ui/core/Toolbar';
import { AccountCircle } from '@material-ui/icons';
import clsx from 'clsx';
import headerBackground from '../appheader.png';
import { Grid, Button } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    justifyContent: 'space-between',
    
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    color: `#EC1E79`,
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    backgroundImage: `url(${headerBackground})`,

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
   
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: '#EC1E79',

  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  logoPlacement: {
      justifyContent: 'center'
    },
  logoStyle: {
      height: '7vmin',
      pointerEvents: 'none'
  },
  accountCircle: {
    color: '#EC1E79',
    alignItems: 'flex-end'
  },
  grow: {
    flexGrow: 1,
  },
}));



export default function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (   
      <AppBar position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} >
          <Grid container direction="row">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
            </IconButton></Grid>
            <Grid container direction="row">
            <Button className={classes.logoPlacement} href="/">
              <img src={logo} className={classes.logoStyle} alt="logo" />
            </Button>
              
            </Grid>
          <Grid container direction="row">
          <Button href="/sign-in">
            <AccountCircle className={classes.accountCircle}/>
          </Button>  
            </Grid>
        </Toolbar>
      </AppBar>
  );
}

// TopBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
