import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CampaignForm from '../CampaignForm/CampaignForm';
import ContactListTable from './ContactListTable';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white',
  },
}));

export default function ContactLists() {

    const classes = useStyles();
    return (
      <div className={classes.main} >
      <ContactListTable />
    </div>
    );
    }
