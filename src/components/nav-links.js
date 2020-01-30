import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText"

import ExperienceIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';
import BioIcon from '@material-ui/icons/ShortText';
import PublishedWorkIcon from '@material-ui/icons/LibraryBooks';
import SkillsIcon from '@material-ui/icons/Extension';

import useStyle from "../styles"

export default () => {
   const classes = useStyle()

   return (
      <React.Fragment>
         {
            // <ListItem className={classes.navItems}>
            //    <ListItemIcon>
            //       <DirectionsIcon/>
            //    </ListItemIcon>
            //    <ListItemText className={classes} primary={
            //       <Typography variant="h6">Go to:</Typography>
            //       }/>
            // </ListItem>
         }

         <ListItem button component="a"
               href="#bio" className={classes.navItems}>
            <ListItemIcon>
               <BioIcon/>
            </ListItemIcon>
            <ListItemText primary="Short bio"/>
         </ListItem>

         <ListItem button component="a"
               href="#education" className={classes.navItems} >
            <ListItemIcon>
               <EducationIcon/>
            </ListItemIcon>
            <ListItemText primary="Education"/>
         </ListItem>

         <ListItem button component="a"
               href="#experience" className={classes.navItems}>
            <ListItemIcon>
               <ExperienceIcon/>
            </ListItemIcon>
            <ListItemText primary="Experience"/>
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
         {
            // <ListItem button component="a"
            //       href="#contact" className={classes.navItems}>
            //    <ListItemIcon>
            //       <ContactInfoIcon/>
            //    </ListItemIcon>
            //    <ListItemText primary="Contact information"/>
            // </ListItem>
         }
      </React.Fragment>
   )
}
