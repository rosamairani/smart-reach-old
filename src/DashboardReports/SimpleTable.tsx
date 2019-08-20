import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

let id = 0;
function createData(name: string, answered: number, disconnected: number, voting: number, attempted: number, voicemail: number) {
  id += 1;
  return { id, name, answered, disconnected, voting, attempted, voicemail };
}

const data = [
  createData('Austin', 159, 6.0, 24, 4.0, 3.2),
  createData('San Antonio', 237, 9.0, 37, 4.3, 5.6),
  createData('Fort Worth', 262, 16.0, 24, 6.0, 2.1),
  createData('Houston', 305, 3.7, 67, 4.3, 4.7)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Answered</TableCell>
            <TableCell align="right">Disconnected</TableCell>
            <TableCell align="right">Voting</TableCell>
            <TableCell align="right">Attempted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.answered}</TableCell>
              <TableCell align="right">{n.voicemail}</TableCell>
              <TableCell align="right">{n.disconnected}</TableCell>
              <TableCell align="right">{n.voting}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

