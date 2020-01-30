import React from 'react';

import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import PinDropIcon from "@material-ui/icons/PinDrop"
import GitHubIcon from "@material-ui/icons/GitHub"

import useStyle from "../styles"

export default props => {
   const classes = useStyle()

   return (
      <React.Fragment>
         <ListItem className={[classes.navItems, classes.contactInfo].join(" ")}>
            <ListItemIcon> <MailIcon/> </ListItemIcon>
            <ListItemText primary={props.info.email} />
         </ListItem>

         <ListItem className={[classes.navItems, classes.contactInfo].join(" ")}>
            <ListItemIcon> <PhoneIcon/> </ListItemIcon>
            <ListItemText primary={props.info.phone_number} />
         </ListItem>

         <ListItem className={[classes.navItems, classes.contactInfo].join(" ")}>
            <ListItemIcon> <GitHubIcon/> </ListItemIcon>
            <ListItemText primary={props.info.github} />
         </ListItem>

         <ListItem className={[classes.navItems, classes.contactInfo].join(" ")}>
            <ListItemIcon> <PinDropIcon/> </ListItemIcon>
            <ListItemText primary={props.info.address} />
         </ListItem>
      </React.Fragment>
   )
}
