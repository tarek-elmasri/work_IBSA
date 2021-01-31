import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import WebIcon from '@material-ui/icons/Web';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles= makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    background: '#373737',
    

  },
  partContainer: {
    display: 'flex',
    flexDirection:'column',
    margin: '15px 0',
    [theme.breakpoints.up('md')]:{
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  contactContainer: {

  }
}))
function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container justify='space-between'>

        <Grid item xs={12} md={7}>
          <div className={classes.partContainer}>
            <div style={{margin: 'auto'}}>
              <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_IBSA.svg/1200px-Logo_IBSA.svg.png'
                  alt='IBSA LOGO'
                  width= '200px'
                  style={{margin: 15}}
              />
            </div>
            <div>
              <Typography variant='h6' style={{color: 'white'}}>About Us</Typography>
              <Typography variant='body1' style={{color: 'gray' , marginTop: 10}}>
                IBSA Regional Office Gulf area (IROGA) is a saudi scientific office for IBSA institue biochemiqu located in Ligano Switherland.
                IROGA main office is based in Riyadh-SA, and runs operations in Saudi Arabia, Iraq, Kuwait and UAE.
              </Typography>
            </div>
          </div>
        </Grid >

        <Grid item xs={12} md={4} style={{margin: '15px 0'}}>
          <Typography variant='h6' style={{color: 'white'}}>Contact Us</Typography>
          
          <div style={{display: 'flex' , color: 'gray',marginTop: 10}}>
            <LocationOnIcon fontSize='small' style={{marginRight: 10}} />
            <Typography>P.O Box 202020 Riyadh 11455, K.S.A</Typography>
          </div>

          <div style={{display: 'flex' , color: 'gray',marginTop: 10}}>
            <MailOutlineIcon fontSize='small' style={{marginRight: 10}} />
            <Typography>ibsa@ibsagulf.com</Typography>
          </div>

          <div style={{display: 'flex' , color: 'gray',marginTop: 10}}>
            <PhoneIcon fontSize='small' style={{marginRight: 10}} />
            <Typography>00966-011-248576</Typography>
          </div>

          <div style={{display: 'flex' , color: 'gray',marginTop: 10}}>
            <WebIcon fontSize='small' style={{marginRight: 10}} />
            <Typography>www.ibsagulf.com</Typography>
          </div>

        </Grid >

        <Grid item xs={12}>
          <div style={{display: 'flex' , justifyContent: 'center', margin: 15}}>
            <FacebookIcon fontSize='large' style={{marginRight: 15,cursor: 'pointer', color: 'white'}} />
            <TwitterIcon fontSize='large' style={{margin: '0 15px',cursor: 'pointer', color: 'white'}} />
            <LinkedInIcon fontSize='large' style={{margin: '0 15px',cursor: 'pointer', color: 'white'}} />
            <InstagramIcon fontSize='large' style={{margin: '0 15px',cursor: 'pointer', color: 'white'}} />
          </div>
          <div style={{textAlign:'center', color: 'gray'}}>
            <Typography variant='caption'>COPYRIGHT &copy; 2021 IROGA. ALL RIGHT RESERVED.</Typography>
          </div>
        </Grid>
      </Grid >

      </div>
  )
}

export default Footer
