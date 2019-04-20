import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';

const drawerWidth = 240;

const styles = theme => ({
    main: {
      backgroundColor: 'white',
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    backgroundSize: 'cover',
    backgroundColor: 'white',
    chartContainer: {
      marginLeft: -22,
    },
    tableContainer: {
      height: 320,
    },
  });

class Reports extends React.Component {

render() {
const { classes } = this.props;
return (
  <div className={classes.main} >
<div className={classes.appBarSpacer} />
<Typography variant="h4" gutterBottom component="h2">
  Campaigns
</Typography>
<Typography component="div" className={classes.chartContainer}>
  <SimpleLineChart />
</Typography>
<Typography variant="h4" gutterBottom component="h2">
  Voters
</Typography>
<div className={classes.tableContainer}>
  <SimpleTable />
</div>
</div>
);
}
}

Reports.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Reports);
