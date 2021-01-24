import { makeStyles } from '@material-ui/core'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ListItem from './sidebar_components/ListItem'


const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(35),
    background: '#cac9cf',
    display: 'flex',
    flexDirection: 'column'
  },
  subItem:{
    background: 'black',
    color: 'white',
    paddingLeft: theme.spacing(5),
    '&:hover,&:focus': {
      color: 'black',
      background: 'white',
      fontWeight: 'bolder'
    }
  }
}))

function SideBar({toggler}) {
  const classes=useStyles();

  return (
    <div className={classes.root}>
      <ListItem button title={<ArrowBackIcon fontSize='small' />}
        onClick={toggler(false)}
      />
      <ListItem button title='Home' />
      <ListItem button title='People' />
      <ListItem button title='Innovation' />
      <ListItem button title='Quality' />
      <ListItem button title='Reponsibility' />
      <ListItem button title='PharmacoVigilance' />
      <ListItem button title='Therabuetic Areas' expanded collapseItems={
        <ListItem button title='Test' className={classes.subItem}  />
      }
      />
      
      <ListItem button title='Careers' />

    </div>
  )
}

export default SideBar

