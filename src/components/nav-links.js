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

  let getOnclickScroller = (targetId) => (
    e => {
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
  })

  return (
      <React.Fragment>
        <ListItem button onClick={getOnclickScroller("bio")}
                  component="a" className={classes.navItems}>
            <ListItemIcon>
              <BioIcon/>
            </ListItemIcon>
            <ListItemText primary="Short bio"/>
         </ListItem>

         <ListItem button onClick={getOnclickScroller("timeline")}
                   component="a" className={classes.navItems} >
            <ListItemIcon>
              <TimelineIcon/>
            </ListItemIcon>
            <ListItemText primary="Timeline"/>
         </ListItem>

         <ListItem button onClick={getOnclickScroller("skills")}
                   component="a" className={classes.navItems}>
            <ListItemIcon>
               <SkillsIcon/>
            </ListItemIcon>
            <ListItemText primary="Skills"/>
         </ListItem>

         <ListItem button onClick={getOnclickScroller("published_work")}
                   component="a" className={classes.navItems}>
            <ListItemIcon>
               <PublishedWorkIcon/>
            </ListItemIcon>
            <ListItemText primary="Published Work"/>
         </ListItem>
      </React.Fragment>
   )
}
