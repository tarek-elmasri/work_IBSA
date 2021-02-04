import { Avatar, Divider, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '../../Button';

const useStyles=makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `30px 0px`,
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: '30px',
    border: '2px solid #1f1480',
    backgroundColor: '#37373737',
    color: 'black'
  },
  avatarHover: {
    width: '100px',
    height: '100px',
    marginBottom: '30px',
    border: '2px solid #1f1480',
    backgroundColor: '#1f1480',
    color: 'white'
  },
  btn: {
    color:'black',
    backgroundColor: '#37373737',
    border: '2px solid #1f1480',
    borderRadius: 0,
    height: 40,
    width: 120,
    transition:'background-color 0s'
  },
  btnHover: {
    backgroundColor: '#1f1480',
    border: '2px solid #1f1480',
    color: 'white',
    borderRadius: 0,
    height: 40,
    width: 120,
    "&:hover": {
      backgroundColor: 'rgb(50, 40, 148)',
    },
  }
}))


function SubHeader({icon=null , title='' , body=''}) {
  const classes=useStyles();
  const [hover,setHover] = useState(false)

  const toggleHover = (value) => {
    setHover(value)
  }
  return (
    <div className={classes.root} onMouseMove={()=> toggleHover(true)} onMouseOut={()=> toggleHover(false)}>
      <Avatar className={hover ? classes.avatarHover : classes.avatar}>
        {icon}
      </Avatar>

      <Typography variant='subtitle2' gutterBottom>{title}</Typography>

      <Divider flexItem variant='middle' style={{ height: '1px'}} />

      <Typography variant='body1' style={{marginTop: '20px'}}>
        {body}
      </Typography>

      <Button className={hover? classes.btnHover : classes.btn} style={{marginTop: '30px'}}>read more</Button>
    </div>
  )
}

export default SubHeader
