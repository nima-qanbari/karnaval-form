import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { useLogout } from '../../Hooks/useLogout';

import { useMember } from '../../Hooks/useMember';

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
    const [member, ,] = useMember()

    const clickHandler = () => {
        logout()
        navigate("/")
        
    }

    return (
      <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {member.name} {member.family} خوش آمدید
            </Typography>
          </CardContent>
          <Button component={Link} to="/dashboard/profile">تغییر مشخصات</Button>
          {/* <Link to="/profile">تغییر مشخصات</Link> */}
          <Button onClick={clickHandler}>خروج</Button>
          
      </Card>
    )
}

export default Dashboard