import React from 'react'

//App bar stuff
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Drawer stuff
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

//Drawer Icons
import ExperienceIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';
import BioIcon from '@material-ui/icons/ShortText';
import ContactInfoIcon from '@material-ui/icons/ContactPhone';
import PublishedWorkIcon from '@material-ui/icons/LibraryBooks';
import SkillsIcon from '@material-ui/icons/Extension';


export default props => {
   const [isDrawerOpen, setDrawerState] = React.useState(false)

   const toggleDrawer = open => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setDrawerState(open);
   }

   return <React.Fragment>
            <AppBar position="sticky">
               <ToolBar>
                  <IconButton color="inherit" aria-label="Open shortcuts"
                     onClick={() => setDrawerState(true)}>
                     <MenuIcon/>
                  </IconButton>
                  <Typography variant="h5">
                     Renato Caminha Juaçaba Neto
                  </Typography>
                  <Typography className="appbar-subtitle" variant="subtitle2">
                     {props.position}
                  </Typography>
               </ToolBar>
            </AppBar>

            <SwipeableDrawer open={isDrawerOpen} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
               <List component="nav" aria-label="Shortcuts">
                  <ListItem button component="a" href="#bio">
                     <ListItemIcon>
                        <BioIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Short bio"/>
                  </ListItem>

                  <ListItem button component="a" href="#education">
                     <ListItemIcon>
                        <EducationIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Education"/>
                  </ListItem>

                  <ListItem button component="a" href="#experience">
                     <ListItemIcon>
                        <ExperienceIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Experience"/>
                  </ListItem>

                  <ListItem button component="a" href="#skills">
                     <ListItemIcon>
                        <SkillsIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Skills"/>
                  </ListItem>

                  <ListItem button component="a" href="#published_work">
                     <ListItemIcon>
                        <PublishedWorkIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Published Work"/>
                  </ListItem>

                  <ListItem button component="a" href="#contact">
                     <ListItemIcon>
                        <ContactInfoIcon/>
                     </ListItemIcon>
                     <ListItemText primary="Contact information"/>
                  </ListItem>
               </List>
            </SwipeableDrawer>
         </React.Fragment>
}
