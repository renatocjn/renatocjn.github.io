import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText"
import Typography from '@material-ui/core/Typography';

import ExperienceIcon from '@material-ui/icons/Work';
import DirectionsIcon from '@material-ui/icons/DirectionsTwoTone';
import EducationIcon from '@material-ui/icons/School';
import BioIcon from '@material-ui/icons/ShortText';
import ContactInfoIcon from '@material-ui/icons/ContactPhone';
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
               href="#education" className={classes.navItems}>
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
