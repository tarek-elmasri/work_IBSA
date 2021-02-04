import { Grid, makeStyles, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import headerImg from '../../assets/header.jpg'
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import EventIcon from '@material-ui/icons/Event';
import SubHeader from '../home_components/SubHeader';
import TelegramIcon from '@material-ui/icons/Telegram';
import HomeBlock from '../home_components/HomeBlock';
import CompareIcon from '@material-ui/icons/Compare';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

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
  const isMobile= useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <div className={classes.root}>
      <Paper elevation={0} style={{borderRadius: 0}}>
        <div style={{position: 'relative'}}>
          <img src={headerImg} alt="" className={classes.headerImg}/>
          <div className={classes.headerContent}>
            <Typography style={{fontSize: isMobile ? '1rem' : '2rem'}}>IBSA Regional Office</Typography>
            <Typography style={{fontSize: isMobile ? '1rem' : '2rem'}} gutterBottom>Gulf Area</Typography>
            <Typography style={{fontSize: isMobile ? '.8rem' : '1rem'}}>Connecting People</Typography>
          </div>
        </div>
      </Paper>

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

      <div style={{backgroundColor: '#2f2f2f2f', width: '100%' , display: 'flex', justifyContent:'center'}}>
        <div style={{width: '80%' , padding: 40, display: 'flex' , justifyContent: 'center'}}>
          <img style={{display: isMobile ? 'none' : 'inline'}}
            src='http://www.spimaco.com.sa/img/uploads/img08.png'
            alt=''
          />
          <div style={{padding: 35}}>
            <Typography variant='h4' gutterBottom>Manufacturing Execelence</Typography>
            <HomeBlock 
              icon={<TelegramIcon fontSize='large' />} 
              title='QUALITY IN IBSA'
              body='SPIMACO ADDWAEIH recognizes its responsibility towards meeting customer 
              requirements and satisfaction by applying quality criteria in all business
              aspects within the organization. Furthermore, SPIMACO 
              has developed and sustained a strong position in Sa.
              '
            />

            <HomeBlock 
              icon={<CompareIcon fontSize='large' />} 
              title='PLANT'
              body='IBSA pharmaceutical manufacturing facility is located at the heart of the 
              industrial zone of Qassim, some 320 km North West of Riyadh. The site of Al-Qassim Pharmaceutical 
              Plant covers 150,000 sq. m., with built area of over 60,000 sq. m. and is operated by 500 
              highly qualified professionals.
              '
            />

            <HomeBlock 
              icon={<SystemUpdateAltIcon fontSize='large' />} 
              title='PRODUCT DEVELOPMENT'
              body='IBSA Product Development Center is composed of highly 
              qualified and skilled team of professionals,equipped with sophisticated
              devices where they scientifically handle formulation and 
              analytical development of high quality
              '
            />


            
          </div>
        </div>

      </div>


        
      
    </div>
  )
}

export default Home
