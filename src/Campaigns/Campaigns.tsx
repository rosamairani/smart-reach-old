import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CampaignForm from '../CampaignForm/CampaignForm';
import CampaignsTable from './CampaignsTable';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white',
  },
}));

export default function Campaign() {

    const classes = useStyles();
    return (
      <div className={classes.main} >
      <CampaignsTable />
    </div>
    );
    }



  