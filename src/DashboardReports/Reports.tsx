import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';


const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: 'white',
    },
    appBarSpacer: theme.mixins.toolbar,

    chartContainer: {
      marginLeft: -22,
    },
    tableContainer: {
      height: 320,
    },
  }));

export default function Reports() {

const classes = useStyles();

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


// Reports.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
