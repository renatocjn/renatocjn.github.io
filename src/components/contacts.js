import React from 'react';

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Typography from "@material-ui/core/Typography"

import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import PinDropIcon from "@material-ui/icons/PinDrop"
import GitHubIcon from "@material-ui/icons/GitHub"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"

import useStyle from "../styles"

export default props => {
   const classes = useStyle()

   return (
      <List disablePadding>
         <Typography variant="body2">
            <ListItem className={[classes.navItems, classes.contactInfo]}>
               <ListItemIcon> <MailIcon/> </ListItemIcon>
               <ListItemText primary={props.info.email} />
            </ListItem>

            {
               // <ListItem className={classes.navItems}>
               //    <ListItemIcon> <PhoneIcon/> </ListItemIcon>
               //    <ListItemText primary={props.info.phone_number} />
               // </ListItem>
            }

            <ListItem className={[classes.navItems, classes.contactInfo]}>
               <ListItemIcon> <GitHubIcon/> </ListItemIcon>
               <ListItemText primary={props.info.github} />
            </ListItem>

            <ListItem className={[classes.navItems, classes.contactInfo]}>
               <ListItemIcon> <PinDropIcon/> </ListItemIcon>
               <ListItemText primary={props.info.address} />
            </ListItem>
         </Typography>
      </List>
   )
}