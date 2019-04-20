    
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import headerBackground from '../appheader.png';
import Grid from '@material-ui/core/Grid';
import './DashboardNavigation.css';
import Toolbar from '@material-ui/core/Toolbar';
import { AccountCircle } from '@material-ui/icons';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Reports from '../DashboardReports/Reports';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Campaigns from '../Campaigns/Campaigns';
import background from '../AppBackground.png';
import Dashboard from '../Dashboard/Dashboard';
import Administrator from '../Administrator/Administrator';

const drawerWidth = 240;

const styles = theme => ({
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
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  accountCircle: {
    color: '#EC1E79',
    alignItems: 'flex-end'
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});
class DashboardNavigation extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar} disableGutters={!this.state.open}>
          <Grid direction="row">
            <IconButton
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}>
              <MenuIcon />
            </IconButton></Grid>
            <Grid button direction="row">
            <Link button to="/" className={classes.logoPlacement}>
            <img src={logo} className={classes.logoStyle} alt="logo" /></Link></Grid>
            <Grid direction="row">
            <Link  to="/sign-in" className={classes.accountCircle} >
              <AccountCircle className={classes.accountCircle}/>
              </Link></Grid>
          </Toolbar>
        </AppBar>
        
        <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
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
            <Route exact path="/" component={Reports} />
            <Route exact path="/reports" component={Reports} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/campaigns" component={Campaigns} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/administrator" component={Administrator} />
          </Switch>
        </main>

      </div>
  </Router>

    );
  }
}

DashboardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardNavigation);