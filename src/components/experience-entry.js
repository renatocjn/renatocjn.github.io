import React from 'react';

import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider"

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import useStyles from "../styles"

export default props => {
   const classes = useStyles()
   const cardClassesMapping = {
      root: classes.educationEntry,
      header: classes.educationEntryHeader,
      content: classes.educationEntryContent
   }
   return (
      <Card classes={cardClassesMapping}>
         <CardHeader title={props.position} subheader={props.company}/>
         <Divider variant="middle"/>
         <CardContent>
            <Typography variant="body2">
               <List>
                  <ListItem key={0} className={classes.listItemHalfWidth}>
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
