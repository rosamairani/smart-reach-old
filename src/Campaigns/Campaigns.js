import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CampaignForm from '../CampaignForm/CampaignForm';

const styles = theme => ({
  main: {
    backgroundColor: 'white',
  },
});

class Campaign extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main} >
      <CampaignForm />
    </div>
    );
    }
    }

Campaign.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Campaign);