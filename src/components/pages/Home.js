import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import headerImg from '../../assets/header.jpg'
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import EventIcon from '@material-ui/icons/Event';
import SubHeader from '../home_components/SubHeader';

const useStyles= makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(1)}px`,

  },
  headerImg: {
    width: '100%',
    minHeight: 250,
    maxHeight: 725  
  },
  headerContent: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    backgroundColor: 'rgba(38, 20, 128,.8)',
    color: 'white',
    padding: theme.spacing(2),
    background: 'lightblue',
    [theme.breakpoints.up('sm')]:{
      padding: theme.spacing(4)
    }
  },

  subHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `30px 0px`,

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
          <Typography style={{fontSize: isMobile ? '1rem' : '2rem'}}>IBSA Regional Office</Typography>
          <Typography style={{fontSize: isMobile ? '1rem' : '2rem'}} gutterBottom>Gulf Area</Typography>
          <Typography style={{fontSize: isMobile ? '.8rem' : '1rem'}}>Connecting People</Typography>
        </div>
      </div>

      <Grid container style={{padding: `0 60px`}}>
        <Grid item xs={12} md={6}>
          <SubHeader 
            icon={<CenterFocusStrongIcon fontSize='large' />}
            title='SOCIAL RESPONSIBILITY'
            body='IBSA supports the rehabilitation centers with sterilizers produced by the company'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SubHeader 
            icon={<EventIcon fontSize='large' />}
            title='IBSA EVENTS CALENDER'
            body='IBSA Provide contineous online events and updates in different therapuetic areas'
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
