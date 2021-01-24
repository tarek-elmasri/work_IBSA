import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, Grid, Hidden, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import NavItem from './navbar_components/NavItem';
import ListItem from './sidebar_components/ListItem';



function Navbar() {

  const classes=useStyles();
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const sidebarToggler = (state) => e => {
    setOpenSideMenu(state)
  }


  return (
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

                <NavItem title='Innovation'>
                  <ListItem button title='Research & Development' className={classes.navListItem}/>
                  <ListItem button title='Technologies' className={classes.navListItem} />
                  <ListItem button title='Molecules' className={classes.navListItem}/>
                </NavItem>

                <NavItem title='Reponsibility' />

                <NavItem title='PharmacoVigilance' />

                <NavItem title='Therabuetic Areas' >
                  <ListItem button title='Human Reproduction' className={classes.navListItem}/>
                  <ListItem button title='Pain & Inflammation' className={classes.navListItem} />
                  <ListItem button title='Dermoaesthetic' className={classes.navListItem}/>
                </NavItem>

                <NavItem title='About Us'>
                  <ListItem button title='Who we are' className={classes.navListItem}/>
                  <ListItem button title='Mission' className={classes.navListItem} />
                  <ListItem button title='Values' className={classes.navListItem}/>
                </NavItem>

                <NavItem title='Careers' >
                    <ListItem button title='Why IBSA' className={classes.navListItem}/>
                    <ListItem button title='Current Openning' className={classes.navListItem} />
                    <ListItem button title='Submit Resume' className={classes.navListItem}/>
                </NavItem>
              </Grid>
            </Hidden>


              <Grid item>
                <Box className={classes.lang}>
                  <Typography variant='body1' style={{paddingRight: 20, paddingLeft: 20}}>En</Typography>
                  <Divider orientation='vertical' flexItem={true} style={{background: 'black'}} />
                  <Typography variant='body2' style={{paddingLeft: 20}}>العربية</Typography>
                </Box>
              </Grid>
              
          </Grid>
        </Toolbar>

      
      
      <Drawer  anchor='left' open={openSideMenu} onClose={sidebarToggler(false)} classes={{paper: classes.drawer}} >
        <SideBar toggler={sidebarToggler} />
      </Drawer>
      </AppBar>

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
    borderBottom: '1px solid rgb(50, 40, 148)',
    '&:hover,&:focus': {
      backgroundColor: 'rgb(50, 40, 148)',
      paddingLeft: 30
    }
  }
}))