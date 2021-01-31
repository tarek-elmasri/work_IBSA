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
      <ListItem button title={<ArrowBackIcon fontSize='small' />} onClick={toggler(false)} />
      <ListItem button title='Home' href='/' onClick={toggler(false)} />
      <ListItem button title='People' onClick={toggler(false)} />
      <ListItem button title='Innovation' href='/research' onClick={toggler(false)} />
      <ListItem button title='Quality' onClick={toggler(false)} />
      <ListItem button title='Reponsibility'onClick={toggler(false)} />
      <ListItem button title='PharmacoVigilance' onClick={toggler(false)} />
      <ListItem button title='Therabuetic Areas' expanded collapseItems={
        <ListItem button title='Test' onClick={toggler(false)} className={classes.subItem}  />
      }
      />
      
      <ListItem button title='Careers' />

    </div>
  )
}

export default SideBar

