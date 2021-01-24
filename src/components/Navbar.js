import React, { useState } from 'react'
import { AppBar, Box, Button, Collapse, Divider, Drawer, Grid, Hidden, IconButton, makeStyles, Menu, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import NavItem from './navbar_components/NavItem';
import ListItem from './sidebar_components/ListItem';



function Navbar() {

  const classes=useStyles();
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const sidebarToggler = (state) => e => {
    setOpenSideMenu(state)
  }


  return (
    <div>
      <AppBar position='sticky' className={classes.root}>
        <Toolbar>
          <Grid container alignItems='center' className={classes.barContainer}>
            <Grid item style={{display: 'flex' ,alignItems: 'center'}}>
              <Hidden lgUp>
                <IconButton edge='start' onClick={sidebarToggler(true)}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <img 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Logo_IBSA.svg/1200px-Logo_IBSA.svg.png'
              alt='IBSA LOGO'
              width= '90px'
              />
            </Grid>
            <Hidden mdDown>
              <Grid item>
                <NavItem title='Home' />
                <NavItem title='About Us'>
                  
                    <ListItem button title='Who we are' className={classes.navListItem}/>
                    <ListItem button title='Mission' className={classes.navListItem} />
                    <ListItem button title='Who we are' className={classes.navListItem}/>
                    <ListItem button title='Mission' className={classes.navListItem} />
                    <ListItem button title='Who we are' className={classes.navListItem}/>
                    <ListItem button title='Mission' className={classes.navListItem} />
                    <ListItem button title='Who we are' className={classes.navListItem}/>
                    <ListItem button title='Mission' className={classes.navListItem} />
                  
                </NavItem>
                <NavItem title='Contact Us' />
              </Grid>
            </Hidden>


              <Grid item>
                <Box className={classes.lang}>
                  <Typography variant='body1' style={{paddingRight: 20, paddingLeft: 20}}>En</Typography>
                  <Divider orientation='vertical' flexItem={true} style={{background: 'black'}} />
                  <Typography variant='body2' style={{paddingLeft: 20}}>ع</Typography>
                </Box>
              </Grid>
              
          </Grid>
        </Toolbar>

      
      
      </AppBar>
      <Drawer  anchor='left' open={openSideMenu} onClose={sidebarToggler(false)} classes={{paper: classes.drawer}} >
        <SideBar toggler={sidebarToggler} />
      </Drawer>

    </div>
  )
}



export default Navbar


const useStyles= makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#b8b3b3',
    padding: 3
  },
  logo: {
    flexGrow: 1
  },
  lang: {
    display: 'flex',
    alignItems: 'center',
    color: 'black'
  },
  barContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  drawer: {
    background: '#1f1480'
  },
  test: {
    background: 'yellow'
  },

  navListItem: {
    background: '#1f1480',
    color: 'white',
    '&:hover,&:focus': {
      backgroundColor: 'rgb(50, 40, 148)'
    }
  }
}))