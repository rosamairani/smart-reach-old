import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
  palette: {
    primary: { main: '#EC1E79' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldDescription: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 552,
  },
  textFieldRecipient: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    alignSelf: 'left'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: '210',
    label: 'San Antonio (210)',
  },
  {
    value: '512',
    label: 'Austin (512)',
  }
];

const types = [
  {
    value: 'Call',
    label: 'Phone Call'
  },
  {
    value: 'Text',
    label: 'Text'
  }
];

const lists = [
  {
    value: 'id1',
    label: 'Austin district 1'
  },
  {
    value: 'id3',
    label: 'Austin district 2'
  },
  {
    value: 'id2',
    label: 'San Antonio district 1'
  },
  {
    value: 'id4',
    label: 'San Antonio district 2'
  }
];


class SetupForm extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    description: '',
    campaignType: '',
    location1: '210',
    location2: '210',
    recipientList: '',
  };
handleChange = name => event => {
  this.setState({ [name]: event.target.value });
};
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment >
        <Typography variant="h6" gutterBottom>
          Setup
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="campaignName"
              name="campaignName"
              label="Campaign Name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-campaign-type"
            select
            label="Campaign Type"
            className={classes.textField}
            value={this.state.campaignType}
            onChange={this.handleChange('campaignType')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {types.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-location"
            select
            label="Location 1"
            className={classes.textField}
            value={this.state.location1}
            onChange={this.handleChange('location1')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              }
            }}
            helperText="Please select your location"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-location"
            select
            label="Location 2"
            className={classes.textField}
            value={this.state.location2}
            onChange={this.handleChange('location2')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your location"
            margin="normal"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows="4"
            value={this.state.description}
            className={classes.textFieldDescription}
            margin="normal"
          />
          </Grid>
          <Grid item xs={12} >
          <TextField
            id="standard-select-list"
            select
            label="Recipients"
            className={classes.textFieldRecipient}
            value={this.state.recipientList}
            onChange={this.handleChange('recipientList')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your recipient list"
            margin="normal"
          >
            {lists.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

SetupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetupForm);