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
  }
}))
function Home() {
  const classes= useStyles();
  const theme = useTheme()
  const isMobile= useMediaQuery(theme.breakpoints.down('sm'));
  console.log('ismobile: ', isMobile)
  return (
    <div>
      <div style={{position: 'relative'}}>
        <Carousel navButtonsAlwaysVisible={isMobile? false : true} >
          <img src={img1} alt='' className={classes.carouselImg} />
          <img src={img2} alt='' className={classes.carouselImg} />
          <img src={img3} alt='' className={classes.carouselImg} />
        </Carousel>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
