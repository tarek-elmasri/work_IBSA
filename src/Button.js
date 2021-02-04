import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Button as MuiButton } from '@material-ui/core'

const useStyles=makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 0,
    height: 40,
    width: 120,
    "&:hover": {
      backgroundColor: 'white',
    }
  }
}))
function Button({...props}) {
  const classes=useStyles();

  return (
    <MuiButton className={classes.root} {...props}>
      
    </MuiButton>
  )
}

export default Button
