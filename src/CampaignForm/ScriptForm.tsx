import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


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

export default function ScriptForm() {
  const state = {
    name: 'Cat in the Hat',
    age: '',
    description: '',
    campaignType: '',
    location1: '210',
    location2: '210',
    recipientList: '',
  };

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Script
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" >
        FIRST NAME
      </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" >
        LAST NAME
      </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary">
        SENDER FIRST NAME
      </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary">
        SENDER LAST NAME
      </Button>
          </Grid>
          <Grid item xs={12}>
          <TextField
            id="standard-multiline-flexible"
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
