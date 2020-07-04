import React from 'react';
import {
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(3)
  },
  card: {
    padding: theme.spacing(4),
    width: '28%',
    margin: theme.spacing(3),
    marginTop: '-30vh',
    height: 300,
    transition: 'all 0.3s ease-out',
    '&:hover': {
      transform: 'translateY(-10px)'
    }
  }
}))

export default function Cards() {
  const classes = styles();
  return (
    <div className={classes.main}>
      <Paper className={classes.card}>Hello</Paper>
      <Paper className={classes.card}>Hello</Paper>
      <Paper className={classes.card}>Hello</Paper>
    </div>
  )
}
