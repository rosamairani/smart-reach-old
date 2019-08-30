    
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import headerBackground from '../appheader.png';
import Grid from '@material-ui/core/Grid';
import './DashboardNavigation.css';
import Toolbar from '@material-ui/core/Toolbar';
import { AccountCircle } from '@material-ui/icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Reports from '../DashboardReports/Reports';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import { Switch, Route, Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Campaigns from '../Campaigns/Campaigns';
import Dashboard from '../Dashboard/Dashboard';
import Administrator from '../Administrator/Administrator';
import { Button, Menu, MenuItem } from '@material-ui/core';
import TopBar from '../TopBar/TopBar';
import SignUp from '../SignUp/SignUp';
import ContactLists from '../ContactLists/ContactLists';
import Users from '../Users/Users';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100vh',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  tableContainer: {
    height: 320,
  },
  accountCircle: {
    color: '#EC1E79',
    alignItems: 'flex-end'
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function  DashboardNavigation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const loggedIn = false;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
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
            <Button key="Dashboard"
              component={NavLink} to="/" className={classes.logoPlacement}>
              <img src={logo} className={classes.logoStyle} alt="logo" />
            </Button>
              
            </Grid>
            {/* <Grid container direction="row"> */}
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
              <AccountCircle className={classes.accountCircle}/>
            </Button>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {loggedIn?<span>
        <MenuItem  key="Account"
              component={NavLink} to="/sign-in" onClick={handleClose}>Account</MenuItem>
        <MenuItem key="Logout"
              component={NavLink} to="/sign-up"onClick={handleClose}>Logout</MenuItem></span>:<span><MenuItem  key="SignIn"
              component={NavLink} to="/login" onClick={handleClose}>Sign In</MenuItem>
        <MenuItem key="SignUp"
              component={NavLink} to="/register"onClick={handleClose}>Sign Up</MenuItem></span>}
      </Menu>  
              {/* </Grid> */}
          </Toolbar>
        </AppBar>
        
        <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/reports" component={Reports} />
            <Route path="/login" component={SignIn} />
            <Route path="/campaigns" component={Campaigns} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/contact-lists" component={ContactLists} />
            <Route path="/users" component={Users} />
            <Route path="/administrator" component={Administrator} />
            <Route path="/register" component={SignUp} />
          </Switch>
        </main>
      </div>
  </Router>

    );
}

