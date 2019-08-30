import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CampaignForm from '../CampaignForm/CampaignForm';
import UsersTable from './UsersTable';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white',
  },
}));

export default function Users() {

    const classes = useStyles();
    return (
      <div className={classes.main} >
      <UsersTable />
    </div>
    );
    }
