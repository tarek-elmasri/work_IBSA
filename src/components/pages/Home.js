import { makeStyles , useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

import img1 from '../../assets/pexels-chokniti-khongchum-3938022.jpg'
import img2 from '../../assets/pexels-edward-jenner-4033148.jpg'
import img3 from '../../assets/pexels-thirdman-5922103.jpg'


const useStyles= makeStyles(theme => ({
  root: {
    
  },
  carouselImg: {
    width: '100%',
    maxHeight: 650
  }
}))
function Home() {
  const classes= useStyles();
  const theme = useTheme()
  const isMobile= useMediaQuery(theme.breakpoints.down('sm'));
  const pic1 = img1
  const pic2 = img2
  const pic3= img3
  return (
    <div>
      <div style={{position: 'relative'}}>
        <Carousel navButtonsAlwaysVisible={isMobile? false : true} animation='slide' >
          <img src={pic1} alt='' className={classes.carouselImg}  />
          <img src={pic2} alt='' className={classes.carouselImg}  />
          <img src={pic3} alt='' className={classes.carouselImg}  />
        </Carousel>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
