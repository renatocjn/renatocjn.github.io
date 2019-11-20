import React from 'react';

import Section from '../components/section';
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import Grid from "@material-ui/core/Grid"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import PinDropIcon from "@material-ui/icons/PinDrop"
import GitHubIcon from "@material-ui/icons/GitHub"

export default props => (
   <Section sectionId="contact" name="Contact Info">
      <List> <Grid component="Grid" container spacing={1}>
         <Grid item xs={12} sm={6} md={4}> <ListItem>
            <ListItemIcon> <MailIcon/> </ListItemIcon>
            <ListItemText>{props.info.email}</ListItemText>
         </ListItem> </Grid>

         <Grid item xs={12} sm={6} md={4}> <ListItem>
            <ListItemIcon> <PhoneIcon/> </ListItemIcon>
            <ListItemText>{props.info.phone_number}</ListItemText>
         </ListItem> </Grid>

         <Grid item xs={12} sm={6} md={4}> <ListItem>
            <ListItemIcon> <GitHubIcon/> </ListItemIcon>
            <ListItemText>{props.info.github}</ListItemText>
         </ListItem> </Grid>

         <Grid item xs={12} sm={6} md={4}> <ListItem>
            <ListItemIcon> <PinDropIcon/> </ListItemIcon>
            <ListItemText>{props.info.address}</ListItemText>
         </ListItem> </Grid>
      </Grid> </List>
   </Section>
)
