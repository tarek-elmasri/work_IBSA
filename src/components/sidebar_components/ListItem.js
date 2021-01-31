import { Collapse, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { ListItem as MuiListItem } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles=makeStyles(theme => ({
  root: {
    borderBottom: '1px solid rgb(50, 40, 148)',
    background: '#1f1480',
    color: 'white',
    '&:hover,&:focus': {
      background: 'rgb(50, 40, 148)',
      paddingLeft: theme.spacing(5)
    },
  },

  expandItem: {
    fontSize: '.8rem',
    color: 'green'
  }
}))
function ListItem({ icon=null, title="", expanded=false,navbar=false,onClick=()=>{}, collapseItems=null,href=null, ...others}) {
  const classes=useStyles();
  const history=useHistory();
  const [expandState,setExpandState] = useState(false)

  return (
    <div>
        <MuiListItem className={classes.root} onClick={()=>{
          setExpandState(!expandState);
          href && history.push(href);
          onClick();
          
          }}
          {...others}
        >
          {icon &&
            <ListItemIcon>
                {icon}
            </ListItemIcon>}
          <ListItemText primary={title} primaryTypographyProps={{variant: 'body2'}}/>
          { expanded ? ( expandState ? (navbar ? <ArrowRightIcon /> : <ExpandLessIcon />) : (navbar ? <ArrowRightIcon /> : <ExpandMoreIcon />)) : null }
        </MuiListItem>

        {
          (expanded && collapseItems) && (
              <Collapse in={(expandState)} timeout={'auto'}>
                {collapseItems}
              </Collapse>
            )
        }
        
    </div>

  )
}


export default ListItem
