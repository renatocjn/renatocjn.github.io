import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText"

import ExperienceIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';
import BioIcon from '@material-ui/icons/ShortText';
import ContactInfoIcon from '@material-ui/icons/ContactPhone';
import PublishedWorkIcon from '@material-ui/icons/LibraryBooks';
import SkillsIcon from '@material-ui/icons/Extension';

export default () => (
   <List>
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
)
