import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




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
    label: 'list1'
  },
  {
    value: 'id2',
    label: 'list2'
  }
];


export default function FeedbackForm() {
  // const classes = useStyles();
  const state = {
    description: '',
    campaignType: '',
    location1: '210',
    location2: '210',
    recipientList: '',
  };
  
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Setup
        </Typography>
        <Grid container spacing={3}>
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
            value={state.campaignType}
            helperText="Please select your location"
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
            value={state.location1}
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
            value={state.location2}
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
          <Grid item xs={12}>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={state.description}
            margin="normal"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-list"
            select
            label="Who do you want to send to?"
            value={state.recipientList}
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
