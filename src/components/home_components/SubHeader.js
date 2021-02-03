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
    backgroundColor: '#37373737',
    color: 'white'
  },
  avatarHover: {
    width: '100px',
    height: '100px',
    marginBottom: '30px',
    backgroundColor: 'black',
    color: 'white'
  },
  btn: {
    backgroundColor: 'black',
    color:'white'
  },
  btnHover: {
    backgroundColor: '#37373737',
    color: 'white'
  }
}))


function SubHeader({icon=null , title='' , body=''}) {
  const classes=useStyles();
  const [hover,setHover] = useState(false)

  const toggleHover = (value) => {
    setHover(value)
  }
  return (
    <div className={classes.root} onMouseEnter={()=> toggleHover(true)} onMouseLeave={()=> toggleHover(false)}>
      <Avatar className={hover ? classes.avatarHover : classes.avatar}>
        {icon}
      </Avatar>

      <Typography variant='h6' gutterBottom>{title}</Typography>

      <Divider gutterBottom flexItem variant='middle' style={{ height: '1px'}} />

      <Typography variant='body1' style={{marginTop: '20px'}}>
        {body}
      </Typography>

      <Button className={hover? classes.btn : classes.btnHover} style={{marginTop: '30px'}}>read more</Button>
    </div>
  )
}

export default SubHeader
