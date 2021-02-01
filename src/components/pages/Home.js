import { makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import headerImg from '../../assets/header.jpg'


const useStyles= makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(1)}px`,

  },
  headerImg: {
    width: '100%',
    maxHeight: 650
  },
  headerContent: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    backgroundColor: 'rgba(38, 20, 128,.8)',
    color: 'white',
    padding: theme.spacing(2),
    background: 'lightblue'
  }
}))
function Home() {
  const classes= useStyles();
  const theme = useTheme()
  const isMobile= useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
    <div className={classes.root}>
      <div style={{position: 'relative'}}>
        <img src={headerImg} alt="" className={classes.headerImg}/>
        <div className={classes.headerContent}>
          <Typography style={{fontSize: isMobile ? '.8rem' : '2rem'}}>IBSA Regional Office</Typography>
          <Typography style={{fontSize: isMobile ? '.8rem' : '2rem'}} gutterBottom>Gulf Area</Typography>
          <Typography style={{fontSize: isMobile ? '.5rem' : '1rem'}}>Connecting People</Typography>
        </div>
      </div>
    </div>
  )
}

export default Home
