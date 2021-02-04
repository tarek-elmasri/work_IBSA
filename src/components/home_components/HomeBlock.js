import React ,{ useState} from 'react'
import { Avatar, makeStyles, Typography } from '@material-ui/core';

const useStyles=makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 95
  },
  avatar: {
    height: 80,
    width: 80,
    marginRight: 15,
    border: '2px solid #1f1480',
  },
  avatarHover: {
    height: 80,
    width: 80,
    marginRight: 15,
    border: '2px solid #1f1480',
    backgroundColor: '#1f1480'
  }
}))
function HomeBlock({icon=null , title="" , body=""}) {

  const classes=useStyles();
  const [hover,setHover] = useState(false)

  return (
    <div className={classes.root} onMouseMove={()=> setHover(true)} onMouseOut={()=> setHover(false)}>
      {icon &&
        <Avatar className={hover ? classes.avatarHover : classes.avatar}>
          {icon}
        </Avatar>
      }
        <div>
          <Typography variant='subtitle1' style={{fontWeight: 500}} >{title}</Typography>
          <Typography variant='body2'>
            {body}
          </Typography>
        </div>
    </div>
  )
}

export default HomeBlock
