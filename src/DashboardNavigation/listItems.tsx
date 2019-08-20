import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
import { SupervisorAccount, Group, Contacts } from '@material-ui/icons';

export const mainListItems = (
  <div>
    <ListItem button key="Dashboard"
  component={NavLink} to="/dashboard"> 
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button key="Administrator"
  component={NavLink} to="/administrator">
      <ListItemIcon>
        <SupervisorAccount />
      </ListItemIcon>
      <ListItemText primary="Administrator" />
    </ListItem>
    <ListItem button key="Campaigns"
  component={NavLink} to="/campaigns">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Campaigns" />
    </ListItem>
    <ListItem button key="Contact Lists"
  component={NavLink} to="/contact-lists">
      <ListItemIcon>
        <Contacts />
      </ListItemIcon>
      <ListItemText primary="Contact Lists" />
    </ListItem>
    <ListItem button key="Users"
  component={NavLink} to="/users">
      <ListItemIcon>
        <Group />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button key="Reports"
  component={NavLink} to="/reports">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Pinned Campaigns</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItem>
  </div>
);