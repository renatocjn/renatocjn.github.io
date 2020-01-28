import React from 'react';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider"

import useStyles from "../styles"

export default props => {
   const classes = useStyles()
   return (
      <Card elevation={0} className={classes.experienceEntry}>
         <CardHeader title={props.position} subheader={props.company}
            classes={{title: classes.experienceEntryHeader,
               subheader: classes.experienceEntrySubHeader}}/>
         <Divider variant="middle"/>
         <CardContent className={classes.experienceEntryContent}>
            <Typography variant="body2">
               <List disablePadding dense>
                  <ListItem className={classes.listItemHalfWidth} key={0}>
                  <ListItemText primary="Begin" secondary={props.start.toLocaleDateString()} />
                  </ListItem>
                  <ListItem key={1} className={classes.listItemHalfWidth}>
                     <ListItemText primary={props.end ? "End" : "Current"}
                                   secondary={props.end && props.end.toLocaleDateString()}/>
                  </ListItem>
                  {props.activites.map((txt, idx) => (
                     <ListItem key={idx+2}> <ListItemText> {txt} </ListItemText> </ListItem>
                     ))}
               </List>
            </Typography>
         </CardContent>
      </Card>
   )
}
