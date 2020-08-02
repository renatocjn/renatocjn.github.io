import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText"

import BioIcon from '@material-ui/icons/ShortText';
import PublishedWorkIcon from '@material-ui/icons/LibraryBooks';
import SkillsIcon from '@material-ui/icons/Extension';
import TimelineIcon from '@material-ui/icons/Timeline';

import useStyle from "../styles"

export default () => {
   const classes = useStyle()

   return (
      <React.Fragment>
         <ListItem button component="a"
               href="#bio" className={classes.navItems}>
            <ListItemIcon>
               <BioIcon/>
            </ListItemIcon>
            <ListItemText primary="Short bio"/>
         </ListItem>

         <ListItem button component="a"
               href="#timeline" className={classes.navItems} >
            <ListItemIcon>
               <TimelineIcon/>
            </ListItemIcon>
            <ListItemText primary="Timeline"/>
         </ListItem>

         <ListItem button component="a"
               href="#skills" className={classes.navItems}>
            <ListItemIcon>
               <SkillsIcon/>
            </ListItemIcon>
            <ListItemText primary="Skills"/>
         </ListItem>

         <ListItem button component="a"
               href="#published_work" className={classes.navItems}>
            <ListItemIcon>
               <PublishedWorkIcon/>
            </ListItemIcon>
            <ListItemText primary="Published Work"/>
         </ListItem>
      </React.Fragment>
   )
}
