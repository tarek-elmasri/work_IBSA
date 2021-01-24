import { Collapse, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles=makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'inline-block',
    margin: theme.spacing(1),
    background: 'inherit',
    cursor: 'pointer',
    padding: theme.spacing(1),
    borderBottom: '2px solid #b8b3b3',
    color: 'black',
    zIndex: 20,
    '&:hover,&:focus': {
      color: '#1f1480',
      borderBottom: '2px solid #1f1480'
    }

  },
  
  menuActive: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    background: '#1f1480',
    width: 200,
    top: '109%',
    left: 0,
    borderRadius: '5px',
    border: '1px solid black',
    zIndex: 1
  },

  text: {
  
  }
}))

export default function NavItem({title="",children, ...others}) {

  const classes=useStyles();
  const [active,setActive] = useState(false)
  return (
    <>
    <div className={classes.root} {...others} onMouseEnter={()=> setActive(true)} onMouseLeave={()=> setActive(false)} >
      <Typography variant='body1' className={classes.text}>{title}</Typography>
        <Collapse in={active} timeout={1}>
          <div className={children ? classes.menuActive : classes.menu} >
            { children  }
          </div>
        </Collapse>
    </div>
      </>
  )
}
