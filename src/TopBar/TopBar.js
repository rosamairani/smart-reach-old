import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.png';
import './TopBar.css';
import Toolbar from '@material-ui/core/Toolbar';
import { AccountCircle } from '@material-ui/icons';
import { renderByOrder } from 'recharts/lib/util/ReactUtils';


const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



class TopBar extends React.Component {
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
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="App-bar">
        <Toolbar className="Tool-bar" disableGutters={!this.state.open}>
          <IconButton color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
          <img button src={logo} className="App-logo" alt="logo" /></Link>
          <Link  to="/sign-in" className="Account-circle" >
            <AccountCircle className="Account-circle"/>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);