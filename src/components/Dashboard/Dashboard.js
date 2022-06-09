import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { useLogout } from '../../Hooks/useLogout';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

const Dashboard = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const logout = useLogout()

    const clickHandler = () => {
        logout()
        navigate("/")
        
    }

    return (
      <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              خوش آمدید
            </Typography>
          </CardContent>
          <Button onClick={clickHandler}>خروج</Button>
      </Card>
    )
}

export default Dashboard