import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

const Dashboard = () => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              خوش آمدید
            </Typography>
          </CardContent>
      </Card>
    )
}

export default Dashboard