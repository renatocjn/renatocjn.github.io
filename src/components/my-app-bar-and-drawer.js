import React from 'react'

//App bar stuff
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Drawer stuff
import Drawer from '@material-ui/core/SwipeableDrawer';
import Hidden from "@material-ui/core/Hidden"
import Box from "@material-ui/core/Box"

import NavLinks from './nav-links'

import useStyles from '../styles'

export default props => {
   const [isDrawerOpen, setDrawerState] = React.useState(false)
   const classes = useStyles()

   const toggleDrawer = open => event => {
      if (event && event.type === 'keydown' &&
         (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }
      setDrawerState(open);
   }

   return <Box>
            <AppBar className={classes.appBar}>
               <ToolBar>
                  <Hidden mdUp implementation='css'>
                     <IconButton color="inherit" aria-label="Open shortcuts"
                        onClick={() => setDrawerState(true)}>
                        <MenuIcon/>
                     </IconButton>
                  </Hidden>
                  <Typography variant="title">
                     <Hidden xsDown>Renato&nbsp;</Hidden>
                     <Hidden smUp>R.&nbsp;</Hidden>
                     <Hidden smDown>Caminha&nbsp;</Hidden>
                     <Hidden mdUp>C.&nbsp;</Hidden>
                     Juaçaba
                     Neto
                  </Typography>
                  <Typography className="appbar-subtitle" variant="subtitle2">
                     {props.position}
                  </Typography>
               </ToolBar>
            </AppBar>

            <Hidden lgUp implementation='css'>
               <Box component="nav" className="drawer">
                  <Drawer variant='temporary'
                     open={isDrawerOpen}
                     onClick={toggleDrawer(false)}
                     onKeyDown={toggleDrawer(false)}
                     ModalProps={{keepMounted: true}}>
                     <NavLinks/>
                  </Drawer>
               </Box>
            </Hidden>
         </Box>
}
